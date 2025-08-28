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
      {/* <div
        className={`fixed ${positionClasses[config.position]} z-[10000] w-80`}
      >
        <div
          className={`${
            themeClasses[config.theme]
          } shadow-2xl border rounded-lg overflow-hidden`}
        >
           <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V19H19V9Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Virtual Try-On</h3>
              </div>
              <button
                onClick={() => {
                  setIsExpanded(false);
                  trackEvent("widget_closed");
                }}
                className="text-white hover:bg-white/20 p-1 rounded transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                </svg>
              </button>
            </div>
          </div>

           <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}

             <div>
              <label className="block text-sm font-medium mb-2">
                Your Photo
              </label>
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "user")}
                  className="hidden"
                  id="user-photo-upload"
                />
                <label htmlFor="user-photo-upload" className="cursor-pointer">
                  {state.userImage ? (
                    <div className="space-y-2">
                      <img
                        src={state.userImage}
                        alt="Your photo"
                        className="w-16 h-16 object-cover rounded-lg mx-auto"
                      />
                      <p className="text-sm text-green-600 font-medium">
                        Photo uploaded
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          clearUserPhoto();
                        }}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <svg
                        className="w-8 h-8 text-blue-600 mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7Z" />
                      </svg>
                      <p className="text-sm text-blue-600 font-medium">
                        Upload Photo
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG up to 5MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

             <div>
              <label className="block text-sm font-medium mb-2">
                Selected Item
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "clothing")}
                  className="hidden"
                  id="clothing-upload"
                />
                <label htmlFor="clothing-upload" className="cursor-pointer">
                  {state.clothingImage || state.clothingImageUrl ? (
                    <div className="space-y-2">
                      <img
                        src={state.clothingImage || state.clothingImageUrl}
                        alt="Clothing item"
                        className="w-16 h-16 object-cover rounded-lg mx-auto"
                      />
                      <p className="text-sm text-green-600 font-medium">
                        {state.clothingImageUrl
                          ? "Auto-detected from page"
                          : "Item uploaded"}
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          clearClothingItem();
                        }}
                        className="text-xs text-gray-600 hover:underline"
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <svg
                        className="w-8 h-8 text-gray-600 mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16V10H5L12 3L19 10H15V16H9ZM5 20V18H19V20H5Z" />
                      </svg>
                      <p className="text-sm text-gray-600 font-medium">
                        Upload clothing item
                      </p>
                      <p className="text-xs text-gray-500">
                        Or it will auto-detect from page
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

             <button
              onClick={handleTryOn}
              disabled={
                state.isProcessing ||
                !state.userImage ||
                (!state.clothingImage && !state.clothingImageUrl)
              }
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              {state.isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12Z" />
                  </svg>
                  <span>Try On Now</span>
                </div>
              )}
            </button>

             <div className="bg-green-50 rounded-lg p-3 text-xs">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">🔒</span>
                </div>
                <div className="text-green-700">
                  <p className="font-medium mb-1">Secure & Auto-Refreshing:</p>
                  <ul className="space-y-1 text-green-600">
                    <li>• Your photos are processed securely</li>
                    <li>• Session automatically maintained</li>
                    <li>• No manual refresh needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Result Modal */}
      {/* {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[10001] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your Try-On Result</h3>
              <button
                onClick={() => setShowResult(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Original
                  </h4>
                  <img
                    src={state.userImage}
                    alt="Original photo"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    With Clothing Item
                  </h4>
                  <img
                    src={resultImage}
                    alt="Try-on result"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <button
                onClick={() => setShowResult(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
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

  // Create widget container
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "tryon-ai-widget";
  document.body.appendChild(widgetContainer);

  // Render widget
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
