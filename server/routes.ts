import type { Express } from "express";
import { createServer, type Server } from "http";
// import { storage } from "./storage";
import { getClientByAppId, SecurityValidator } from "./security";
import { GoogleGenAI, Modality } from "@google/genai";

import crypto from "crypto";
import "dotenv/config";
import { generateAppId as utilsGenerateAppId, parseBase64Image } from "./utils";
import { nhost } from "../shared/nhost";
nhost.graphql.setHeaders({
  "x-hasura-role": "admin",
  "x-hasura-admin-secret": process.env.NHOST_ADMIN_SECRET!,
});
// Gemini AI integration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
export async function registerRoutes(
  app: Express,
  shouldCreateServer: boolean = true
): Promise<Server | Express> {
  app.post("/api/hello", async (req, res) => {
    console.log("api health");
    return res.json({
      message: "Running...",
    });
  });
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
          userIp: req.ip || req.connection.remoteAddress || "unknown",
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

  app.post("/api/try-on", async (req, res) => {
    try {
      const {
        appId,
        userImageUrl,
        userImage,
        clothingImage,
        clothingImageUrl,
      } = req.body;

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
      const userIp = req.ip || req.connection.remoteAddress || "unknown";
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
            originDomain: req.get("host"),
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
          originDomain: req.get("host"),
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
            { id: session.id, status: "completed" }
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

  if (shouldCreateServer) {
    const httpServer = createServer(app);
    return httpServer;
  } else {
    return app;
  }
}

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

    // const prompt = `{{
    //         "objective": "Generate a photorealistic virtual try-on image, seamlessly integrating a specified clothing item onto a person while rigidly preserving their facial identity, the clothing's exact appearance, and placing them in a completely new, distinct background.",
    //         "task": "High-Fidelity Virtual Try-On with Identity/Garment Preservation and Background Replacement",

    //         "inputs": {{
    //         "userImage": {{
    //             "description": "Source image containing the target person. Used *primarily* for identity (face, skin tone), pose, body shape, hair, and accessories. The original background will be DISCARDED.",
    //             "id": "input_1"
    //         }},
    //         "clothingImage": {{
    //             "description": "Source image containing the target clothing item. May include a model, mannequin, or be flat-lay. Used *strictly* for the clothing's visual properties (color, style, texture, pattern).",
    //             "id": "input_2"
    //         }}
    //         }},

    //         "processing_steps": [
    //         "Isolate the clothing item from 'garment_image' (input_2), discarding any original model, mannequin, or background. Extract exact color, pattern, texture, and style information.",
    //         "Identify the person (face, body shape, skin tone), pose, hair, and accessories from 'person_image' (input_1).",
    //         "Segment the person from the original background in 'person_image'.",
    //         "Determine the desired new background based on 'background_preference' or generate a suitable default.",
    //         "Analyze lighting cues from 'person_image' to inform initial lighting on the subject, but adapt lighting for consistency with the *new* background."
    //         ],

    //         "output_requirements": {{
    //         "description": "Generate a single, high-resolution image where the person from 'person_image' appears to be naturally and realistically wearing the clothing item from 'garment_image', situated within a **completely new and different background**.",
    //         "format": "Image (e.g., PNG, JPG)",
    //         "quality": "Photorealistic, free of obvious artifacts, blending issues, or inconsistencies between subject, garment, and the new background."
    //         }},

    //         "core_constraints": {{
    //         "identity_lock": {{
    //             "priority": "ABSOLUTE CRITICAL",
    //             "instruction": "Maintain the **PERFECT** facial identity, features, skin tone, and expression of the person from 'person_image'. **ZERO alterations** to the face are permitted. Treat the head region (including hair) as immutable unless directly and logically occluded by the garment. DO NOT GUESS OR HALLUCINATE FACIAL FEATURES."
    //         }},
    //         "garment_fidelity": {{
    //             "priority": "ABSOLUTE CRITICAL",
    //             "instruction": "Preserve the **EXACT** color (hue, saturation, brightness), pattern, texture, material properties, and design details of the clothing item from 'garment_image'. **ZERO deviations** in style, color, or visual appearance are allowed. Render the garment precisely as depicted in input_2."
    //         }},
    //         "background_replacement": {{
    //             "priority": "CRITICAL",
    //             "instruction": "Generate a **COMPLETELY NEW and DIFFERENT** background that is distinct from the original background in 'person_image'. The new background should be photorealistic and contextually plausible for a person/fashion image unless otherwise specified by 'background_preference'. Ensure the person is seamlessly integrated into this new environment. **NO elements** from the original background should remain visible."
    //         }},
    //         "pose_preservation": {{
    //             "priority": "HIGH",
    //             "instruction": "Retain the **exact** body pose and positioning of the person from 'person_image'."
    //         }},
    //         "realistic_integration": {{
    //             "priority": "HIGH",
    //             "instruction": "Simulate physically plausible draping, folding, and fit of the garment onto the person's body according to their shape and pose. Ensure natural interaction with the body within the context of the *new* background."
    //         }},
    //         "lighting_consistency": {{
    //             "priority": "HIGH",
    //             "instruction": "Apply lighting, shadows, and highlights to the rendered garment AND the person that are **perfectly consistent** with the direction, intensity, and color temperature implied by the **NEW background**. Adjust subject lighting subtly if necessary to match the new scene, but prioritize maintaining a natural look consistent with the original subject's lighting where possible."
    //         }}
    //         }},

    //         "additional_constraints": {{
    //         "body_proportion_accuracy": "Scale the garment accurately to match the person's body proportions.",
    //         "occlusion_handling": "Render natural and correct occlusion where the garment covers parts of the body, hair, or existing accessories from 'person_image'. Preserve visible unique features (tattoos, scars) unless occluded.",
    //         "hair_and_accessory_integrity": "Maintain hair and non-clothing accessories (glasses, jewelry, hats) from 'person_image' unless logically occluded by the new garment. Integrate them seamlessly with the person and the new background.",
    //         "texture_and_detail_rendering": "Render fine details (e.g., embroidery, seams, buttons, lace, sheer fabric properties) from the garment with high fidelity.",
    //         "scene_coherence": "Ensure the person logically fits within the generated background environment (e.g., appropriate scale, perspective, interaction with ground plane if applicable)."
    //         }},

    //         "edge_case_handling": {{
    //         "tight_fitting_clothing": "Accurately depict fabric stretch and conformity to body contours.",
    //         "transparent_sheer_clothing": "Realistically render transparency, showing underlying skin tone or layers appropriately.",
    //         "complex_garment_geometry": "Handle unusual shapes, layers, or asymmetrical designs with correct draping.",
    //         "unusual_poses": "Ensure garment drape remains physically plausible even in non-standard or dynamic poses.",
    //         "garment_partially_out_of_frame": "Render the visible parts of the garment correctly; do not hallucinate missing sections.",
    //         "low_resolution_inputs": "Maximize detail preservation but prioritize realistic integration over inventing details not present in the inputs.",
    //         "mismatched_lighting_inputs": "Prioritize generating a coherent lighting environment based on the **NEW background**, adapting the garment and slightly adjusting the person's apparent lighting for a unified final image. Avoid harsh lighting clashes."
    //         }},

    //         "prohibitions": [
    //         "DO NOT alter the person's facial features, identity, expression, or skin tone.",
    //         "DO NOT modify the intrinsic color, pattern, texture, or style of the clothing item.",
    //         "DO NOT retain ANY part of the original background from 'person_image'.",
    //         "DO NOT change the person's pose.",
    //         "DO NOT introduce elements not present in the input images (person, garment) except for the generated background and necessary shadows/lighting adjustments for integration.",
    //         "DO NOT hallucinate or guess facial details; if obscured, maintain the integrity of visible parts based on identity lock.",
    //         "DO NOT generate a background that is stylistically jarring or contextually nonsensical without explicit instruction via 'background_preference'."
    //         ]
    //         }}

    //         You are a virtual fashion stylist.
    //         Create a realistic try-on visualization of the uploaded clothing onto the person image.

    // `;
    const response = await ai.models.generateContent({
      // model: "gemini-2.0-flash-exp-image-generation",
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

    // const response = await result.response;
    // const text = response.text();
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
    // For now, return a placeholder since Gemini doesn't generate images directly
    // In production, you'd integrate with an image generation service
    // return userImage; // Placeholder - return original image
  } catch (error) {
    console.error("Gemini processing error:", error);
    throw new Error("AI processing failed");
  }
}
