import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

export function generateAppId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 15);
  return `tryon_${timestamp}_${randomStr}`;
}

export function parseBase64Image(dataUrl: string) {
  const [meta, base64Data] = dataUrl.split(",");
  const mimeType = meta.match(/data:(.*);base64/)?.[1] || "image/jpeg";
  return { mimeType, base64Data };
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Initialize R2 client
const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function optimizeImage(
  base64Data: string,
  options: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: "jpeg" | "png" | "webp";
  } = {}
): Promise<Buffer> {
  const {
    maxWidth = 1024,
    maxHeight = 1024,
    quality = 85,
    format = "jpeg",
  } = options;

  try {
    const buffer = Buffer.from(base64Data, "base64");

    let sharpInstance = sharp(buffer).resize(maxWidth, maxHeight, {
      fit: "inside",
      withoutEnlargement: true,
    });

    switch (format) {
      case "jpeg":
        sharpInstance = sharpInstance.jpeg({ quality });
        break;
      case "png":
        sharpInstance = sharpInstance.png({ quality });
        break;
      case "webp":
        sharpInstance = sharpInstance.webp({ quality });
        break;
    }

    return await sharpInstance.toBuffer();
  } catch (error) {
    console.error("Image optimization error:", error);
    throw new Error("Failed to optimize image");
  }
}

export async function uploadToR2(
  buffer: Buffer,
  key: string,
  contentType: string = "image/jpeg"
): Promise<string> {
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    });

    await r2Client.send(command);

    // Return the public URL
    return `https://${process.env.R2_BUCKET_NAME}.${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;
  } catch (error) {
    console.error("R2 upload error:", error);
    throw new Error("Failed to upload to R2");
  }
}

export async function storeOptimizedImage(
  dataUrl: string,
  filename: string,
  options?: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: "jpeg" | "png" | "webp";
  }
): Promise<string> {
  try {
    const { base64Data } = parseBase64Image(dataUrl);

    // Optimize the image
    const optimizedBuffer = await optimizeImage(base64Data, options);

    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const extension = options?.format || "jpg";
    const key = `images/${timestamp}-${filename}.${extension}`;

    // Upload to R2
    const url = await uploadToR2(
      optimizedBuffer,
      key,
      `image/${extension === "jpg" ? "jpeg" : extension}`
    );

    return url;
  } catch (error) {
    console.error("Store optimized image error:", error);
    throw new Error("Failed to store optimized image");
  }
}
