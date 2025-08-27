import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildWidget() {
  console.log("Building widget from React component...");

  try {
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

    // Add CSS styles inline
    const styles = `
      /* TryOn AI Widget Styles */
      .tryon-widget * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .tryon-widget {
        position: fixed;
        z-index: 10000;
        font-size: 14px;
        line-height: 1.5;
      }
    `;

    // Inject styles into the widget
    const styleInjection = `
      (function() {
        if (!document.getElementById('tryon-ai-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-styles';
          style.textContent = \`${styles.replace(/`/g, "\\`")}\`;
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
