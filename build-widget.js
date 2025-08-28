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
  console.log("Building widget with Tailwind CSS processing...");

  try {
    // Process Tailwind CSS with proper configuration
    const tailwindCSS = `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    `;

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
        corePlugins: {
          preflight: false, // Disable base styles that might conflict
        },
        important: "#tryon-ai-widget", // Make all utilities important and scoped
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: "hsl(221.2 83.2% 53.3%)",
                foreground: "hsl(210 40% 98%)",
              },
              secondary: {
                DEFAULT: "hsl(210 40% 96%)",
                foreground: "hsl(222.2 84% 4.9%)",
              },
            },
          },
        },
      }),
      autoprefixer,
    ]).process(tailwindCSS, { from: undefined });

    // Build the widget
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

    // Create scoped CSS with high specificity
    const scopedCSS = result.css.replace(
      /(\.[a-zA-Z][a-zA-Z0-9_-]*)/g,
      "#tryon-ai-widget $1"
    );

    // Style injection with scoping
    const styleInjection = `
      (function() {
        if (!document.getElementById('tryon-ai-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-styles';
          style.textContent = \`
            /* TryOn AI Widget Scoped Styles */
            #tryon-ai-widget {
              all: initial;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 14px;
              line-height: 1.5;
              color: #111827;
              box-sizing: border-box;
            }
            #tryon-ai-widget *, 
            #tryon-ai-widget *::before, 
            #tryon-ai-widget *::after {
              box-sizing: border-box;
            }
            ${scopedCSS.replace(/`/g, "\\`")}
          \`;
          document.head.appendChild(style);
        }
      })();
    `;

    // Combine everything
    const finalWidget = styleInjection + "\n" + widgetContent;

    // Write files
    const outputPath = path.join(__dirname, "public/widget-tailwind.js");
    fs.writeFileSync(outputPath, finalWidget);

    // Clean up
    if (fs.existsSync(builtWidgetPath)) {
      fs.unlinkSync(builtWidgetPath);
    }

    console.log(
      "Widget with Tailwind built successfully at public/widget-tailwind.js"
    );
  } catch (error) {
    console.error("Error building widget:", error);
    process.exit(1);
  }
}

buildWidget();
