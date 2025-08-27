import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function genereateRandomBytes(bytes = 16): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getAvatarUrl(avatarUrl?: string, name?: string) {
  if (avatarUrl?.includes("blank")) {
    return undefined;
  }
  return avatarUrl;
}
export const APP_URL = import.meta.env.VITE_APP_URL;
