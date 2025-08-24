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
