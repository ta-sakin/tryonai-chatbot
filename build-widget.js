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

    // Add basic CSS styles inline (simplified for now)
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
      
      /* Essential utility classes */
      .fixed { position: fixed !important; }
      .bottom-6 { bottom: 1.5rem !important; }
      .right-6 { right: 1.5rem !important; }
      .left-6 { left: 1.5rem !important; }
      .top-6 { top: 1.5rem !important; }
      .z-50 { z-index: 50 !important; }
      .max-w-96 { max-width: 24rem !important; }
      .min-w-80 { min-width: 20rem !important; }
      .bg-white { background-color: #ffffff !important; }
      .bg-primary { background-color: #3b82f6 !important; }
      .text-white { color: #ffffff !important; }
      .border { border-width: 1px !important; }
      .border-gray-200 { border-color: #e5e7eb !important; }
      .rounded-lg { border-radius: 0.5rem !important; }
      .rounded-t-lg { border-top-left-radius: 0.5rem !important; border-top-right-radius: 0.5rem !important; }
      .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important; }
      .p-4 { padding: 1rem !important; }
      .flex { display: flex !important; }
      .items-center { align-items: center !important; }
      .justify-between { justify-content: space-between !important; }
      .space-x-2 > * + * { margin-left: 0.5rem !important; }
      .w-8 { width: 2rem !important; }
      .h-8 { height: 2rem !important; }
      .w-12 { width: 3rem !important; }
      .h-12 { height: 3rem !important; }
      .rounded-full { border-radius: 9999px !important; }
      .bg-opacity-20 { background-color: rgba(255, 255, 255, 0.2) !important; }
      .text-lg { font-size: 1.125rem !important; }
      .font-semibold { font-weight: 600 !important; }
      .hover\\:bg-primary\\/90:hover { background-color: rgba(59, 130, 246, 0.9) !important; }
      .transition-all { transition: all 0.15s ease !important; }
      .cursor-pointer { cursor: pointer !important; }
      .w-full { width: 100% !important; }
      .space-y-4 > * + * { margin-top: 1rem !important; }
      .text-sm { font-size: 0.875rem !important; }
      .font-medium { font-weight: 500 !important; }
      .mb-2 { margin-bottom: 0.5rem !important; }
      .mt-2 { margin-top: 0.5rem !important; }
      .border-2 { border-width: 2px !important; }
      .border-dashed { border-style: dashed !important; }
      .text-center { text-align: center !important; }
      .mx-auto { margin-left: auto !important; margin-right: auto !important; }
      .text-primary { color: #3b82f6 !important; }
      .text-gray-500 { color: #6b7280 !important; }
      .text-xs { font-size: 0.75rem !important; }
      .overflow-y-auto { overflow-y: auto !important; }
      .max-h-\\[70vh\\] { max-height: 70vh !important; }
      .min-h-\\[460px\\] { min-height: 460px !important; }
      .grid { display: grid !important; }
      .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .mb-4 { margin-bottom: 1rem !important; }
      .disabled\\:bg-gray-400:disabled { background-color: #9ca3af !important; }
      .py-3 { padding-top: 0.75rem !important; padding-bottom: 0.75rem !important; }
      .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
      .justify-center { justify-content: center !important; }
      .animate-spin { animation: spin 1s linear infinite !important; }
      .h-4 { height: 1rem !important; }
      .w-4 { width: 1rem !important; }
      .border-b-2 { border-bottom-width: 2px !important; }
      .border-white { border-color: #ffffff !important; }
      .rounded { border-radius: 0.25rem !important; }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
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
