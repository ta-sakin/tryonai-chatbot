import express from "express";
import { getClientByAppId, SecurityValidator } from "../server/security";
import { GoogleGenAI, Modality } from "@google/genai";
import { parseBase64Image } from "../server/utils";
import { nhost } from "../shared/nhost";

console.log("Initializing Express app for Vercel...");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

console.log("Setting up nhost headers...");
// Set up nhost headers
nhost.graphql.setHeaders({
  "x-hasura-role": "admin",
  "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET!,
});

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
console.log("Express app initialized successfully");

// Health check endpoint
app.post("/api/hello", async (req, res) => {
  console.log("api health check called");
  return res.json({
    message: "Running...",
    timestamp: new Date().toISOString(),
    env: {
      hasNhostSecret: !!process.env.NHOST_ADMIN_SECRET,
      hasGeminiKey: !!process.env.GEMINI_API_KEY,
      nodeEnv: process.env.NODE_ENV,
    },
  });
});

// Simple GET endpoint for easier testing
app.get("/api/hello", async (req, res) => {
  console.log("api health check GET called");
  return res.json({
    message: "GET endpoint working...",
    timestamp: new Date().toISOString(),
  });
});

// Widget initialization endpoint
app.post("/api/widget/init", async (req, res) => {
  try {
    const { appId, domain } = req.body;

    if (!appId || !domain) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters",
        error: null,
      });
    }

    console.log({ appId, domain });
    // Get client by appId from Nhost GraphQL
    const { data, error: clientError } = await nhost.graphql.request(
      `query GetClientByAppId($appId: String!) {
        clients(where: { app_id: { _eq: $appId } }) {
          id
          is_active
          widget_position
          widget_theme
          max_requests_per_minute
          require_referrer_check
          allowed_domains
        }
      }`,
      { appId }
    );

    if (clientError) throw clientError;

    const client = data?.clients[0];
    if (!client || !client.is_active) {
      return res.status(404).json({
        success: false,
        message: "Invalid widget configuration",
        error: null,
      });
    }

    // Validate domain if required
    if (
      client.require_referrer_check &&
      client.allowed_domains &&
      client.allowed_domains.length > 0
    ) {
      const allowedDomains = client.allowed_domains as string[];
      if (
        !SecurityValidator.validateDomain(`https://${domain}`, allowedDomains)
      ) {
        return res.status(403).json({
          success: false,
          message: "Domain not authorized",
          error: null,
        });
      }
    }

    // Track widget initialization
    await nhost.graphql.request(
      `mutation CreateAnalytics(
        $clientId: uuid!
        $eventType: String!
        $metadata: jsonb
        $originDomain: String!
        $userIp: String!
      ) {
        insert_analytics_one(object: {
          client_id: $clientId
          event_type: $eventType
          metadata: $metadata
          origin_domain: $originDomain
          user_ip: $userIp
        }) { id }
      }`,
      {
        clientId: client.id,
        eventType: "widget_init",
        metadata: { domain, appId },
        originDomain: domain,
        userIp: req.ip || req.connection?.remoteAddress || "unknown",
      }
    );

    // Return widget config only (no session token)
    return res.json({
      success: true,
      message: "Widget initialized successfully",
      error: null,
      config: {
        position: client.widget_position,
        theme: client.widget_theme,
        maxRequestsPerMinute: client.max_requests_per_minute,
      },
    });
  } catch (error) {
    console.error("Widget init error:", error);
    return res.status(500).json({
      success: false,
      message: "Widget initialization failed",
      error,
    });
  }
});

// Try-on endpoint
app.post("/api/try-on", async (req, res) => {
  try {
    const { appId, userImageUrl, userImage, clothingImage, clothingImageUrl } =
      req.body;

    if (!appId) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid App Id", error: null });
    }

    // 1. Get client
    const { data: clientData, error: clientError } = await getClientByAppId(
      appId
    );
    if (clientError) throw clientError;

    const client = clientData?.clients[0];
    if (!client || !client.is_active) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid client", error: null });
    }

    const now = new Date();
    const lastReset = client.last_reset_date
      ? new Date(client.last_reset_date)
      : null;

    let updatedClient = client;
    const monthsApart = lastReset
      ? (now.getFullYear() - lastReset.getFullYear()) * 12 +
        (now.getMonth() - lastReset.getMonth())
      : Infinity; // force reset if lastReset is null

    if (monthsApart >= 1) {
      const { data: resetData, error: resetError } =
        await nhost.graphql.request(
          `mutation ResetMonthlyCount($clientId: uuid!, $now: timestamp!) {
          update_clients_by_pk(
            pk_columns: { id: $clientId }
            _set: { monthly_try_on_count: 0, last_reset_date: $now }
          ) { id monthly_try_on_count last_reset_date }
        }`,
          { clientId: client.id, now: now.toISOString() }
        );
      if (resetError) throw resetError;
      updatedClient = resetData.update_clients_by_pk;
    }

    const monthlyTryOnCount = updatedClient.monthly_try_on_count;
    const monthlyTryOnLimit = updatedClient.monthly_try_on_limit;

    // 2. Check limits
    if (monthlyTryOnCount >= monthlyTryOnLimit) {
      return res.status(429).json({
        success: false,
        message: "Monthly try-on limit exceeded",
        error: null,
      });
    }

    // 3. Process user image
    let userImageToProcess = userImage;
    if (userImageUrl && !userImage) {
      const response = await fetch(userImageUrl);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const mimeType = response.headers.get("content-type") || "image/jpeg";
      userImageToProcess = `data:${mimeType};base64,${base64}`;
    }
    if (!userImageToProcess) {
      return res.status(400).json({
        success: false,
        message: "No user image provided",
        error: null,
      });
    }

    // 4. Process clothing image
    let clothingImageToProcess = clothingImage;
    if (clothingImageUrl && !clothingImage) {
      const response = await fetch(clothingImageUrl);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const mimeType = response.headers.get("content-type") || "image/jpeg";
      clothingImageToProcess = `data:${mimeType};base64,${base64}`;
    }
    if (!clothingImageToProcess) {
      return res.status(400).json({
        success: false,
        message: "No clothing image provided",
        error: null,
      });
    }

    // 5. Create session
    const userIp = req.ip || req.connection?.remoteAddress || "unknown";
    const { data: sessionData, error: sessionError } =
      await nhost.graphql.request(
        `mutation CreateTryOnSession(
        $clientId: uuid!
        $userImage: String!
        $clothingImage: String!
        $clothingImageUrl: String
        $originDomain: String!
        $userIp: String!
      ) {
        insert_try_on_sessions_one(object: {
          client_id: $clientId
          user_image: $userImage
          clothing_image: $clothingImage
          clothing_image_url: $clothingImageUrl
          result_image: null
          status: "processing"
          origin_domain: $originDomain
          user_ip: $userIp
        }) { id }
      }`,
        {
          clientId: client.id,
          userImage: userImageToProcess,
          clothingImage: clothingImageToProcess,
          clothingImageUrl,
          originDomain: req.get("host") || "unknown",
          userIp,
        }
      );
    if (sessionError) throw sessionError;
    const session = sessionData.insert_try_on_sessions_one;

    // 6. Increment try-on count
    await nhost.graphql.request(
      `mutation IncrementTryOnCount($id: uuid!) {
        update_clients_by_pk(pk_columns: { id: $id }, _inc: { monthly_try_on_count: 1 }) { id }
      }`,
      { id: client.id }
    );

    // 7. Track analytics
    await nhost.graphql.request(
      `mutation CreateAnalytics(
        $clientId: uuid!
        $eventType: String!
        $metadata: jsonb
        $originDomain: String!
        $userIp: String!
      ) {
        insert_analytics_one(object: {
          client_id: $clientId
          event_type: $eventType
          metadata: $metadata
          origin_domain: $originDomain
          user_ip: $userIp
        }) { id }
      }`,
      {
        clientId: client.id,
        eventType: "try_on",
        metadata: {
          sessionId: session.id,
          clothingImageUrl,
          securityValidated: true,
        },
        originDomain: req.get("host") || "unknown",
        userIp,
      }
    );

    // 8. Call AI processor
    try {
      const resultImage = await processWithGemini(
        userImageToProcess,
        clothingImageToProcess
      );
      try {
        await nhost.graphql.request(
          `mutation UpdateTryOnSession($id: uuid!, $resultImage: String, $status: String!) {
            update_try_on_sessions_by_pk(pk_columns: { id: $id }, _set: {
              result_image: $resultImage
              status: $status
            }) { id status }
          }`,
          { id: session.id, resultImage, status: "completed" }
        );
      } catch (e) {
        console.log("error update_try_on_sessions_by_pk", e);
      }

      return res.json({
        success: true,
        message: "Try-on completed successfully",
        error: null,
        sessionId: session.id,
        resultImage,
      });
    } catch (aiError) {
      await nhost.graphql.request(
        `mutation UpdateTryOnSession($id: uuid!, $status: String!) {
          update_try_on_sessions_by_pk(pk_columns: { id: $id }, _set: { status: $status }) { id }
        }`,
        { id: session.id, status: "failed" }
      );
      return res.status(500).json({
        success: false,
        message: "AI processing failed",
        error: aiError,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
});

async function processWithGemini(
  userImage: string,
  clothingImage: string
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const userImageData = parseBase64Image(userImage);
    const clothingImageData = parseBase64Image(clothingImage);

    const prompt = `
      Create a virtual try-on result by combining these two images:
      1. A person's photo (user image)
      2. A clothing item (clothing image)

      Generate a photorealistic image showing the person wearing the clothing item. Remember keep the clothing image as it is with same color and texture.
      The result should look natural and maintain the person's proportions and pose.
      Return only the processed image data.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: [
        { text: prompt },
        {
          inlineData: {
            data: userImageData.base64Data,
            mimeType: userImageData.mimeType,
          },
        },
        {
          inlineData: {
            data: clothingImageData.base64Data,
            mimeType: clothingImageData.mimeType,
          },
        },
      ],
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    console.log("ai response", JSON.stringify(response, null, 2));
    const parts = response.candidates?.[0]?.content?.parts || [];
    console.log("generated image parts", JSON.stringify(parts, null, 2));
    const imagePart = parts.find((part) => part.inlineData);

    if (!imagePart) {
      throw new Error("No image generated");
    }

    console.log("imagePart", imagePart);
    const generatedBase64 = imagePart?.inlineData?.data;
    console.log("generatedBase64", generatedBase64);
    return `data:image/png;base64,${generatedBase64}`;
  } catch (error) {
    console.error("Gemini processing error:", error);
    throw new Error("AI processing failed");
  }
}

// Add error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Express error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error:
      process.env.NODE_ENV === "development" ? err.message : "Server error",
  });
});

// Add a catch-all route for debugging
app.all("*", (req, res) => {
  console.log(`Unhandled route: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`,
    availableRoutes: ["/api/hello", "/api/widget/init", "/api/try-on"],
  });
});

// Export the Express app as a Vercel serverless function
export default app;
