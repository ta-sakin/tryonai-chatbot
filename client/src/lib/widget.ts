// Widget API utilities for Express server

import { APP_URL } from "./utils";

export interface WidgetConfig {
  position: string;
  theme: string;
  maxRequestsPerMinute: number;
}

export interface TryOnResult {
  sessionId: number;
  resultImage: string;
  status: string;
}

export class WidgetAPI {
  private sessionToken: string | null = null;

  async initWidget(
    publicKey: string,
    domain: string
  ): Promise<{ sessionToken: string; config: WidgetConfig }> {
    const response = await fetch(`${APP_URL}/api/widget/init`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicKey, domain }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Widget initialization failed");
    }

    const data = await response.json();
    this.sessionToken = data.sessionToken;
    return data;
  }

  async tryOn(
    userImage: string,
    clothingImage?: string,
    clothingImageUrl?: string
  ): Promise<TryOnResult> {
    if (!this.sessionToken) {
      throw new Error("Widget not initialized. Call initWidget first.");
    }

    const response = await fetch(`${APP_URL}/api/try-on`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: this.sessionToken,
        userImage,
        clothingImage,
        clothingImageUrl,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Try-on failed");
    }

    return response.json();
  }

  async trackEvent(eventType: string, metadata?: any): Promise<void> {
    if (!this.sessionToken) {
      return; // Silently fail if not initialized
    }

    try {
      await fetch(`${APP_URL}/api/analytics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionToken: this.sessionToken,
          eventType,
          metadata,
        }),
      });
    } catch (error) {
      console.warn("Analytics tracking failed:", error);
    }
  }
}

export const widgetAPI = new WidgetAPI();
