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

// Standalone Theme Provider for Shadow DOM
const StandaloneThemeProvider: React.FC<{
  children: React.ReactNode;
  theme: "default" | "dark" | "minimal";
}> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Determine theme based on widget config and system preference
    let resolvedTheme: "light" | "dark" = "light";

    if (theme === "dark") {
      resolvedTheme = "dark";
    } else if (theme === "default") {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      resolvedTheme = prefersDark ? "dark" : "light";
    }

    setCurrentTheme(resolvedTheme);

    // Apply theme class to shadow DOM host
    const widgetHost = document.getElementById("tryon-ai-widget-host");
    if (widgetHost && widgetHost.shadowRoot) {
      const container = widgetHost.shadowRoot.querySelector(
        ".tryon-widget-container"
      );
      if (container) {
        container.className = `tryon-widget-container ${resolvedTheme}`;
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "default") {
        const newTheme = e.matches ? "dark" : "light";
        setCurrentTheme(newTheme);

        // Update shadow DOM theme class
        const widgetHost = document.getElementById("tryon-ai-widget-host");
        if (widgetHost && widgetHost.shadowRoot) {
          const container = widgetHost.shadowRoot.querySelector(
            ".tryon-widget-container"
          );
          if (container) {
            container.className = `tryon-widget-container ${newTheme}`;
          }
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Create a mock theme context
  const themeContext = {
    theme: currentTheme === "dark" ? "dark" : "light",
    setTheme: () => {}, // No-op for standalone widget
  };

  return (
    <div className={currentTheme} data-theme={currentTheme}>
      {React.cloneElement(children as React.ReactElement, { themeContext })}
    </div>
  );
};

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
    <StandaloneThemeProvider theme={config.theme}>
      <VirtualTryOnWidget
        appId={config.appId}
        position={config.position}
        theme={config.theme}
        // isDemo={window.location.origin === APP_URL}
        isDemo={false}
      />
    </StandaloneThemeProvider>
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

function createShadowDomStyles(
  originalStyles: string,
  theme: "default" | "dark" | "minimal"
): string {
  // Replace :root with :host for shadow DOM compatibility
  let shadowStyles = originalStyles.replace(/:root/g, ":host");

  // Add comprehensive theme support for shadow DOM
  const themeSupport = `
    /* Light theme variables (default) */
    :host {
      --background: 0 0% 100%;
      --foreground: 20 14.3% 4.1%;
      --muted: 60 4.8% 95.9%;
      --muted-foreground: 25 5.3% 44.7%;
      --popover: 0 0% 100%;
      --popover-foreground: 20 14.3% 4.1%;
      --card: 0 0% 100%;
      --card-foreground: 20 14.3% 4.1%;
      --border: 20 5.9% 90%;
      --input: 20 5.9% 90%;
      --primary: 239 84% 67%;
      --primary-foreground: 210 40% 98%;
      --secondary: 262 83% 58%;
      --secondary-foreground: 210 40% 98%;
      --accent: 142 76% 36%;
      --accent-foreground: 210 40% 98%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 60 9.1% 97.8%;
      --ring: 20 14.3% 4.1%;
      --radius: 0.5rem;
    }

    /* Dark theme variables */
    :host .dark,
    .tryon-widget-container.dark {
      --background: 240 10% 3.9%;
      --foreground: 0 0% 98%;
      --muted: 240 3.7% 15.9%;
      --muted-foreground: 240 5% 64.9%;
      --popover: 240 10% 3.9%;
      --popover-foreground: 0 0% 98%;
      --card: 240 10% 3.9%;
      --card-foreground: 0 0% 98%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --primary: 239 84% 67%;
      --primary-foreground: 210 40% 98%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --accent: 240 3.7% 15.9%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 0% 98%;
      --ring: 240 4.9% 83.9%;
    }

    /* Ensure theme classes work in shadow DOM */
    .dark {
      color-scheme: dark;
    }

    /* Widget container styling */
    .tryon-widget-container {
      background-color: transparent;
      color: hsl(var(--foreground));
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    }

    /* Dark theme overrides for container */
    .tryon-widget-container.dark {
      --background: 240 10% 3.9%;
      --foreground: 0 0% 98%;
      --muted: 240 3.7% 15.9%;
      --muted-foreground: 240 5% 64.9%;
      --card: 240 10% 3.9%;
      --card-foreground: 0 0% 98%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --accent: 240 3.7% 15.9%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 0% 98%;
      --ring: 240 4.9% 83.9%;
    }

    /* Ensure all child elements can access theme variables */
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: border-box;
    }

    /* Apply system theme preference if theme is default */
    @media (prefers-color-scheme: dark) {
      :host(.system-theme) {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        --muted: 240 3.7% 15.9%;
        --muted-foreground: 240 5% 64.9%;
        --popover: 240 10% 3.9%;
        --popover-foreground: 0 0% 98%;
        --card: 240 10% 3.9%;
        --card-foreground: 0 0% 98%;
        --border: 240 3.7% 15.9%;
        --input: 240 3.7% 15.9%;
        --secondary: 240 3.7% 15.9%;
        --secondary-foreground: 0 0% 98%;
        --accent: 240 3.7% 15.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 0 0% 98%;
        --ring: 240 4.9% 83.9%;
      }
    }
  `;

  return themeSupport + shadowStyles;
}

async function mountWidget(config: WidgetConfig) {
  const host = document.createElement("div");
  host.id = "tryon-ai-widget-host";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  // Create enhanced styles for shadow DOM with proper theme support
  const enhancedStyles = createShadowDomStyles(styles, config.theme);

  const styleEl = document.createElement("style");
  styleEl.textContent = enhancedStyles;
  shadow.appendChild(styleEl);

  const container = document.createElement("div");
  container.id = "tryon-ai-widget";

  // Determine initial theme class
  let themeClass = "light";
  if (config.theme === "dark") {
    themeClass = "dark";
  } else if (config.theme === "default") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    themeClass = prefersDark ? "dark" : "light";
  }

  container.className = `tryon-widget-container ${themeClass}`;
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
