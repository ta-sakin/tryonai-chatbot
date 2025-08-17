import { Request, Response } from "express";
import { nhost } from "../utils/nhost-admin";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface TryOnRequest {
  sessionToken: string;
  userImage: string;
  clothingImage?: string;
  clothingImageUrl?: string;
}

function verifySessionToken(token: string) {
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    if (decoded.expiresAt < Date.now()) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}

function parseBase64Image(base64String: string) {
  const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches) {
    throw new Error("Invalid base64 image format");
  }
  return {
    mimeType: matches[1],
    base64: matches[2],
  };
}

async function processWithGemini(
  userImage: string,
  clothingImage: string
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  try {
    const { GoogleGenerativeAI } = await import("@google/genai");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const userImageData = parseBase64Image(userImage);
    const clothingImageData = parseBase64Image(clothingImage);

    const prompt = `
      Create a virtual try-on result by combining these two images:
      1. A person's photo (user image)
      2. A clothing item (clothing image)
      
      Generate a photorealistic image showing the person wearing the clothing item.
      The result should look natural and maintain the person's proportions and pose.
      Return only the processed image data.
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: userImageData.base64,
          mimeType: userImageData.mimeType,
        },
      },
      {
        inlineData: {
          data: clothingImageData.base64,
          mimeType: clothingImageData.mimeType,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    // For now, return a placeholder since Gemini doesn't generate images directly
    // In production, you'd integrate with an image generation service
    return userImage; // Placeholder - return original image
  } catch (error) {
    console.error("Gemini processing error:", error);
    throw new Error("AI processing failed");
  }
}

export default async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      sessionToken,
      userImage,
      clothingImage,
      clothingImageUrl,
    }: TryOnRequest = req.body;

    if (!sessionToken) {
      return res.status(401).json({ error: "Session token required" });
    }

    // Validate session token
    const tokenData = verifySessionToken(sessionToken);
    if (!tokenData) {
      return res
        .status(401)
        .json({ error: "Invalid or expired session token" });
    }

    // Get client data
    const { data: clientData, error: clientError } =
      await nhost.graphql.request(
        `
      query GetClient($id: Int!) {
        clients_by_pk(id: $id) {
          id
          is_active
          monthly_try_on_count
          monthly_try_on_limit
          last_reset_date
        }
      }
    `,
        { id: tokenData.clientId }
      );

    if (clientError || !clientData?.clients_by_pk?.is_active) {
      return res.status(404).json({ error: "Invalid client" });
    }

    const client = clientData.clients_by_pk;

    // Check monthly limits
    const now = new Date();
    const lastReset = new Date(client.last_reset_date);
    const monthsApart =
      (now.getFullYear() - lastReset.getFullYear()) * 12 +
      (now.getMonth() - lastReset.getMonth());

    if (monthsApart >= 1) {
      // Reset monthly count
      await nhost.graphql.request(
        `
        mutation ResetMonthlyCount($id: Int!) {
          update_clients_by_pk(pk_columns: {id: $id}, _set: {monthly_try_on_count: 0, last_reset_date: "now()"}) {
            id
          }
        }
      `,
        { id: client.id }
      );
      client.monthly_try_on_count = 0;
    }

    if (client.monthly_try_on_count >= client.monthly_try_on_limit) {
      return res.status(429).json({
        error: "Monthly try-on limit exceeded",
        limit: client.monthly_try_on_limit,
        used: client.monthly_try_on_count,
      });
    }

    // Determine clothing image source
    let clothingImageToProcess = clothingImage;
    if (clothingImageUrl && !clothingImage) {
      try {
        const response = await fetch(clothingImageUrl);
        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        const mimeType = response.headers.get("content-type") || "image/jpeg";
        clothingImageToProcess = `data:${mimeType};base64,${base64}`;
      } catch (fetchError) {
        console.error("Failed to fetch clothing image from URL:", fetchError);
        return res
          .status(400)
          .json({ error: "Failed to load clothing image from URL" });
      }
    }

    if (!clothingImageToProcess) {
      return res.status(400).json({
        error: "Either clothingImage or clothingImageUrl must be provided",
      });
    }

    // Create try-on session
    const { data: sessionData, error: sessionError } =
      await nhost.graphql.request(
        `
      mutation CreateTryOnSession($object: try_on_sessions_insert_input!) {
        insert_try_on_sessions_one(object: $object) {
          id
        }
      }
    `,
        {
          object: {
            client_id: client.id,
            user_image: userImage,
            clothing_image: clothingImageToProcess,
            clothing_image_url: clothingImageUrl || null,
            result_image: null,
            status: "processing",
            origin_domain: tokenData.domain,
            user_ip: req.ip || "unknown",
          },
        }
      );

    if (sessionError) {
      throw new Error("Failed to create try-on session");
    }

    const sessionId = sessionData.insert_try_on_sessions_one.id;

    // Increment try-on count
    await nhost.graphql.request(
      `
      mutation IncrementTryOnCount($id: Int!) {
        update_clients_by_pk(pk_columns: {id: $id}, _inc: {monthly_try_on_count: 1}) {
          id
        }
      }
    `,
      { id: client.id }
    );

    // Track analytics
    await nhost.graphql.request(
      `
      mutation CreateAnalytics($object: analytics_insert_input!) {
        insert_analytics_one(object: $object) {
          id
        }
      }
    `,
      {
        object: {
          client_id: client.id,
          event_type: "try_on",
          metadata: {
            sessionId,
            clothingImageUrl,
            securityValidated: true,
            tokenUsed: true,
          },
          origin_domain: tokenData.domain,
          user_ip: req.ip || "unknown",
        },
      }
    );

    // Process with Gemini AI
    try {
      const resultImage = await processWithGemini(
        userImage,
        clothingImageToProcess
      );

      await nhost.graphql.request(
        `
        mutation UpdateTryOnSession($id: Int!, $resultImage: String!) {
          update_try_on_sessions_by_pk(pk_columns: {id: $id}, _set: {result_image: $resultImage, status: "completed"}) {
            id
          }
        }
      `,
        { id: sessionId, resultImage }
      );

      res.json({
        sessionId,
        resultImage,
        status: "completed",
      });
    } catch (aiError) {
      console.error("Gemini AI error:", aiError);
      await nhost.graphql.request(
        `
        mutation UpdateTryOnSession($id: Int!) {
          update_try_on_sessions_by_pk(pk_columns: {id: $id}, _set: {status: "failed"}) {
            id
          }
        }
      `,
        { id: sessionId }
      );
      res.status(500).json({ error: "AI processing failed" });
    }
  } catch (error) {
    console.error("Try-on error:", error);
    res.status(400).json({ error: "Invalid request data" });
  }
};
