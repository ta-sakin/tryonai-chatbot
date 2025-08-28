import React, { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { VirtualTryOnWidget } from "./virtual-try-on-widget";
import { APP_URL } from "@/lib/utils";

interface WidgetConfig {
  appId: string;
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme: "default" | "dark" | "minimal";
}

interface WidgetState {
  userImage: string;
  clothingImage: string;
  clothingImageUrl: string;
  isProcessing: boolean;
  sessionToken: string | null;
  tokenExpiry: number | null;
}

export const VirtualTryOnStandaloneWidget: React.FC<{
  config: WidgetConfig;
}> = ({ config }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState<WidgetState>({
    userImage: "",
    clothingImage: "",
    clothingImageUrl: "",
    isProcessing: false,
    sessionToken: null,
    tokenExpiry: null,
  });
  console.log("config", config);
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Refs for managing intervals and preventing memory leaks
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshingRef = useRef(false);
  const mountedRef = useRef(true);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const themeClasses = {
    default: "bg-white border-gray-200",
    dark: "bg-gray-900 border-gray-700 text-white",
    minimal: "bg-white border-gray-100 shadow-sm",
  };

  // Parse JWT token to get expiry time
  const parseTokenExpiry = useCallback((token: string): number | null => {
    try {
      const decoded = JSON.parse(Buffer.from(token, "base64").toString());
      const payload = JSON.parse(decoded.payload);
      return payload.exp * 1000; // Convert to milliseconds
    } catch (error) {
      console.error("Failed to parse token expiry:", error);
      return null;
    }
  }, []);

  // Initialize widget with secure token
  const initializeWidget = useCallback(
    async (isRefresh = false) => {
      if (isRefreshingRef.current && isRefresh) {
        return; // Prevent concurrent refresh attempts
      }

      if (isRefresh) {
        isRefreshingRef.current = true;
      }

      try {
        const domain = window.location.hostname;
        const response = await fetch(`${APP_URL}/api/widget/init`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appId: config.appId,
            domain: domain,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const tokenExpiry = parseTokenExpiry(data.sessionToken);
          console.log({ tokenExpiry });
          if (mountedRef.current) {
            setState((prev) => ({
              ...prev,
              sessionToken: data.sessionToken,
              tokenExpiry: tokenExpiry,
            }));

            if (!isRefresh) {
              setIsInitialized(true);
            }

            // Update widget config from server
            if (data.config) {
              config.position = data.config.position || config.position;
              config.theme = data.config.theme || config.theme;
            }

            // Clear any previous errors on successful refresh
            if (isRefresh && error) {
              setError("");
            }
          }
        } else {
          const errorData = await response.json();
          if (mountedRef.current) {
            setError(errorData.error || "Widget initialization failed");
          }
        }
      } catch (error) {
        console.error("Widget initialization error:", error);
        if (mountedRef.current) {
          setError("Failed to initialize widget");
        }
      } finally {
        if (isRefresh) {
          isRefreshingRef.current = false;
        }
      }
    },
    [config, parseTokenExpiry, error]
  );

  // Setup automatic token refresh
  const setupTokenRefresh = useCallback(() => {
    // Clear any existing interval
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }

    if (!state.tokenExpiry) return;

    const now = Date.now();
    const timeUntilExpiry = state.tokenExpiry - now;

    // Refresh token 5 minutes before expiry (or immediately if already expired)
    const refreshTime = Math.max(0, timeUntilExpiry - 5 * 60 * 1000);

    refreshIntervalRef.current = setTimeout(async () => {
      if (mountedRef.current && !isRefreshingRef.current) {
        console.log("Auto-refreshing widget token...");
        await initializeWidget(true);

        // Setup next refresh cycle
        if (mountedRef.current) {
          setupTokenRefresh();
        }
      }
    }, refreshTime);

    console.log(
      `Token refresh scheduled in ${Math.round(refreshTime / 1000)} seconds`
    );
  }, [state.tokenExpiry, initializeWidget]);

  // Initial widget initialization
  useEffect(() => {
    initializeWidget();

    return () => {
      mountedRef.current = false;
      if (refreshIntervalRef.current) {
        clearTimeout(refreshIntervalRef.current);
      }
    };
  }, [initializeWidget]);

  // Setup token refresh when token changes
  useEffect(() => {
    if (state.sessionToken && state.tokenExpiry) {
      setupTokenRefresh();
    }

    return () => {
      if (refreshIntervalRef.current) {
        clearTimeout(refreshIntervalRef.current);
      }
    };
  }, [state.sessionToken, state.tokenExpiry, setupTokenRefresh]);

  // Auto-detect product images on page load
  useEffect(() => {
    if (!isInitialized) return;

    const detectProductImage = () => {
      const selectors = [
        'img[src*="product"]',
        'img[alt*="product"]',
        ".product img",
        '[class*="product"] img',
      ];
      const image = document.querySelector(
        selectors.join(", ")
      ) as HTMLImageElement;
      if (image && image.src) {
        setState((prev) => ({ ...prev, clothingImageUrl: image.src }));
      }
    };

    setTimeout(detectProductImage, 1000);
  }, [isInitialized]);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "user" | "clothing"
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");

    if (file.size > 5 * 1024 * 1024) {
      setError("File too large. Please upload an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === "user") {
        setState((prev) => ({ ...prev, userImage: result }));
      } else {
        setState((prev) => ({
          ...prev,
          clothingImage: result,
          clothingImageUrl: "",
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Enhanced API request with automatic token refresh
  const makeAuthenticatedRequest = useCallback(
    async (url: string, options: RequestInit): Promise<Response> => {
      const makeRequest = async (token: string): Promise<Response> => {
        return await fetch(url, {
          method: options.method || "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            ...(options.body ? JSON.parse(options.body as string) : {}),
            sessionToken: token,
          },
        });
      };

      // First attempt with current token
      if (state.sessionToken) {
        const response = await makeRequest(state.sessionToken);

        // If token is valid, return response
        if (response.status !== 401) {
          return response;
        }

        // Token expired, try to refresh
        console.log("Token expired, attempting refresh...");
      }

      // Refresh token and retry
      await initializeWidget(true);

      // Wait a bit for state to update
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Get the latest token from state
      const currentState = state;
      if (currentState.sessionToken) {
        return makeRequest(currentState.sessionToken);
      } else {
        throw new Error("Failed to refresh authentication token");
      }
    },
    [state.sessionToken, initializeWidget, state]
  );

  const handleTryOn = async () => {
    if (!state.sessionToken) {
      setError("Widget not properly initialized. Please refresh the page.");
      return;
    }

    if (!state.userImage || (!state.clothingImage && !state.clothingImageUrl)) {
      setError("Please upload both your photo and select a clothing item.");
      return;
    }

    setError("");
    setState((prev) => ({ ...prev, isProcessing: true }));

    try {
      const response = await makeAuthenticatedRequest(
        `${APP_URL}/api/try-on`,

        {
          method: "POST",
          body: JSON.stringify({
            userImage: state.userImage,
            clothingImage: state.clothingImage || undefined,
            clothingImageUrl: state.clothingImageUrl || undefined,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResultImage(data.resultImage);
        setShowResult(true);
        trackEvent("try_on_success", { sessionId: data.sessionId });
      } else {
        throw new Error(data.error || "Try-on failed");
      }
    } catch (error: any) {
      console.error("Try-on error:", error);
      setError(error.message || "Try-on failed. Please try again.");
      trackEvent("try_on_failed", { error: error.message });
    } finally {
      setState((prev) => ({ ...prev, isProcessing: false }));
    }
  };

  const trackEvent = useCallback(
    async (eventType: string, metadata: any = {}) => {
      if (!state.sessionToken) return;

      try {
        await makeAuthenticatedRequest(`${APP_URL}/api/analytics`, {
          method: "POST",
          body: JSON.stringify({
            eventType,
            metadata,
          }),
        });
      } catch (error) {
        console.error("Analytics tracking error:", error);
        // Don't show user errors for analytics failures
      }
    },
    [state.sessionToken, makeAuthenticatedRequest]
  );

  const clearUserPhoto = () => {
    setState((prev) => ({ ...prev, userImage: "" }));
  };

  const clearClothingItem = () => {
    setState((prev) => ({ ...prev, clothingImage: "", clothingImageUrl: "" }));
  };

  // // Don't render if not initialized or if there's an initialization error
  // if (!isInitialized) {
  //   if (error) {
  //     console.error("TryOn AI Widget Error:", error);
  //     return null; // Fail silently for better UX
  //   }
  //   return null; // Still initializing
  // }

  // if (!isExpanded) {
  //   return (
  //     <div className={`fixed ${positionClasses[config.position]} z-[10000]`}>
  //       <button
  //         onClick={() => {
  //           setIsExpanded(true);
  //           trackEvent("widget_opened");
  //         }}
  //         className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl flex items-center justify-center transition-all hover:scale-110"
  //         title="Virtual Try-On"
  //       >
  //         <svg
  //           className="w-6 h-6 text-white"
  //           viewBox="0 0 24 24"
  //           fill="currentColor"
  //         >
  //           <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V19H19V9Z" />
  //         </svg>
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <>
      <VirtualTryOnWidget
        appId={config.appId}
        position="bottom-right"
        theme="default"
        isDemo={window.location.origin === APP_URL}
      />
    </>
  );
};

// Widget initialization function
declare global {
  interface Window {
    TryOnAI: {
      init: (config: Partial<WidgetConfig>) => void;
    };
  }
}

function initWidget() {
  // Extract config from script tag - matches the working version pattern
  const scripts = document.querySelectorAll("script[data-app-id]");
  const scriptTag = scripts[scripts.length - 1] as HTMLScriptElement;

  const config: WidgetConfig = {
    appId: scriptTag?.dataset.appId || "",
    position: (scriptTag?.dataset.position as any) || "bottom-right",
    theme: (scriptTag?.dataset.theme as any) || "default",
  };

  if (!config.appId) {
    console.error("TryOn AI Widget: App Id is required");
    return;
  }

  // Create widget container with Shadow DOM for style isolation
  const widgetHost = document.createElement("div");
  widgetHost.id = "tryon-ai-widget-host";
  document.body.appendChild(widgetHost);

  // Create shadow root for complete style isolation
  const shadowRoot = widgetHost.attachShadow({ mode: "open" });

  // Create the actual widget container inside shadow DOM
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "tryon-ai-widget";
  shadowRoot.appendChild(widgetContainer);

  // Render widget inside shadow DOM
  const root = createRoot(widgetContainer);
  root.render(<VirtualTryOnStandaloneWidget config={config} />);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWidget);
} else {
  initWidget();
}

// Export for manual initialization
window.TryOnAI = {
  init: (config: Partial<WidgetConfig>) => {
    const fullConfig: WidgetConfig = {
      appId: config.appId || "",
      position: config.position || "bottom-right",
      theme: config.theme || "default",
    };

    if (!fullConfig.appId) {
      console.error("TryOn AI Widget: App Id is required");
      return;
    }

    const widgetContainer = document.createElement("div");
    widgetContainer.id = "tryon-ai-widget";
    document.body.appendChild(widgetContainer);

    const root = createRoot(widgetContainer);
    root.render(<VirtualTryOnStandaloneWidget config={fullConfig} />);
  },
};
