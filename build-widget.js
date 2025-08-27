import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildWidget() {
  console.log("Building widget from React component...");

  try {
    // First, generate Tailwind CSS for the widget
    const tailwindCSS = `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      /* Widget-specific base styles */
      .tryon-widget * {
        box-sizing: border-box;
      }
      .tryon-widget {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.5;
      }
    `;

    // Process CSS with Tailwind
    const result = await postcss([
      tailwindcss({
        content: [
          path.resolve(
            __dirname,
            "client/src/components/widget-standalone.tsx"
          ),
          path.resolve(
            __dirname,
            "client/src/components/virtual-try-on-widget.tsx"
          ),
          path.resolve(
            __dirname,
            "client/src/components/try-on-result-modal.tsx"
          ),
          path.resolve(__dirname, "client/src/components/ui/*.tsx"),
        ],
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: "#3b82f6",
                foreground: "#ffffff",
              },
              secondary: {
                DEFAULT: "#6b7280",
                foreground: "#ffffff",
              },
            },
          },
        },
        plugins: [],
      }),
      autoprefixer,
    ]).process(tailwindCSS, { from: undefined });

    // Build the standalone widget component
    await build({
      configFile: false,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "client", "src"),
        },
      },
      build: {
        lib: {
          entry: path.resolve(
            __dirname,
            "client/src/components/widget-standalone.tsx"
          ),
          name: "TryOnWidget",
          fileName: "widget",
          formats: ["iife"],
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {},
          },
        },
        outDir: path.resolve(__dirname, "public"),
        emptyOutDir: false,
        minify: true,
      },
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      esbuild: {
        jsx: "automatic",
      },
    });

    // Read the built file
    const builtWidgetPath = path.join(__dirname, "public/widget.iife.js");
    let widgetContent = fs.readFileSync(builtWidgetPath, "utf8");

    // Use the generated Tailwind CSS
    const processedCSS = result.css;

    // Inject Tailwind styles into the widget
    const styleInjection = `
      (function() {
        if (!document.getElementById('tryon-ai-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-styles';
          style.textContent = \`${processedCSS.replace(/`/g, "\\`")}\`;
          document.head.appendChild(style);
        }
      })();
    `;

    // Combine style injection with widget code
    const finalWidget = styleInjection + "\n" + widgetContent;

    // Write the final widget file
    const outputPath = path.join(__dirname, "public/widget.js");
    fs.writeFileSync(outputPath, finalWidget);

    // Clean up the temporary file
    if (fs.existsSync(builtWidgetPath)) {
      fs.unlinkSync(builtWidgetPath);
    }

    console.log("Widget built successfully at public/widget.js");
  } catch (error) {
    console.error("Error building widget:", error);
    process.exit(1);
  }
}

buildWidget();
