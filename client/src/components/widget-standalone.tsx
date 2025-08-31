import React, { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { VirtualTryOnWidget } from "./virtual-try-on-widget";
import { APP_URL } from "@/lib/utils";
import styles from "../index.css?inline";

interface WidgetConfig {
  appId: string;
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme: "default" | "dark" | "minimal";
}

export const VirtualTryOnStandaloneWidget: React.FC<{
  widgetConfig: WidgetConfig;
}> = ({ widgetConfig }) => {
  const [error, setError] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [config, setConfig] = useState(widgetConfig);
  // Refs for managing intervals and preventing memory leaks
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshingRef = useRef(false);
  const mountedRef = useRef(true);

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
        console.log({
          APP_URL,
        });
        const response = await fetch(`${APP_URL}/api/widget/init`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appId: widgetConfig.appId,
            domain: domain,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (mountedRef.current) {
            if (!isRefresh) {
              setIsInitialized(true);
            }

            // Update widget config from server
            if (data.config) {
              setConfig({
                position: data.config.position || widgetConfig.position,
                theme: data.config.theme || widgetConfig.theme,
                appId: widgetConfig.appId,
              });
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
    [config, error]
  );

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
      // if (image && image.src) {
      //   setState((prev) => ({ ...prev, clothingImageUrl: image.src }));
      // }
    };

    setTimeout(detectProductImage, 1000);
  }, [isInitialized]);

  return (
    <>
      <VirtualTryOnWidget
        appId={config.appId}
        position={config.position}
        theme={config.theme}
        // isDemo={window.location.origin === APP_URL}
        isDemo={false}
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

async function mountWidget(config: WidgetConfig) {
  const host = document.createElement("div");
  host.id = "tryon-ai-widget-host";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const styleEl = document.createElement("style");
  styleEl.textContent = styles;
  shadow.appendChild(styleEl);
  const shadowDomStyles = styles.replace(":root", ":host");
  styleEl.textContent = shadowDomStyles;

  shadow.appendChild(styleEl);
  const container = document.createElement("div");
  container.id = "tryon-ai-widget";
  shadow.appendChild(container);

  createRoot(container).render(
    <VirtualTryOnStandaloneWidget widgetConfig={config} />
  );
}

function initWidgetFromScriptTag() {
  const scripts = document.querySelectorAll("script[data-app-id]");
  const scriptTag = scripts[scripts.length - 1] as HTMLScriptElement;

  const config: WidgetConfig = {
    appId: scriptTag?.dataset.appId || "",
    position: (scriptTag?.dataset.position as any) || "bottom-right",
    theme: (scriptTag?.dataset.theme as any) || "default",
  };

  console.log("scriptTag", scriptTag.dataset, "WidgetConfig", config);

  if (!config.appId) {
    console.error("TryOn AI Widget: App Id is required");
    return;
  }

  mountWidget(config);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWidgetFromScriptTag);
} else {
  initWidgetFromScriptTag();
}

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

    mountWidget(fullConfig);
  },
};
