import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildWidget() {
  console.log("Building widget from React component...");

  try {
    // Create a separate CSve CSS that includes all the styles the widget needs
    const widgetCSS = `
      /* Reset and base styles for the widget */
      .tryon-widget {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
        --tw-border-opacity: 1;
        --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: rgb(17 24 39);
      }
      
      .tryon-widget *,
      .tryon-widget *::before,
      .tryon-widget *::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: rgb(229 231 235);
      }
      
      /* Utility classes */
      .tryon-widget .fixed { position: fixed; }
      .tryon-widget .bottom-6 { bottom: 1.5rem; }
      .tryon-widget .right-6 { right: 1.5rem; }
      .tryon-widget .left-6 { left: 1.5rem; }
      .tryon-widget .top-6 { top: 1.5rem; }
      .tryon-widget .z-50 { z-index: 50; }
      .tryon-widget .z-\\[10000\\] { z-index: 10000; }
      .tryon-widget .z-\\[10001\\] { z-index: 10001; }
      
      .tryon-widget .flex { display: flex; }
      .tryon-widget .grid { display: grid; }
      .tryon-widget .hidden { display: none; }
      .tryon-widget .block { display: block; }
      
      .tryon-widget .h-4 { height: 1rem; }
      .tryon-widget .h-6 { height: 1.5rem; }
      .tryon-widget .h-8 { height: 2rem; }
      .tryon-widget .h-12 { height: 3rem; }
      .tryon-widget .h-16 { height: 4rem; }
      .tryon-widget .h-20 { height: 5rem; }
      .tryon-widget .h-80 { height: 20rem; }
      .tryon-widget .h-auto { height: auto; }
      .tryon-widget .h-full { height: 100%; }
      .tryon-widget .max-h-96 { max-height: 24rem; }
      .tryon-widget .max-h-\\[90vh\\] { max-height: 90vh; }
      .tryon-widget .min-h-\\[460px\\] { min-height: 460px; }
      .tryon-widget .max-h-80 { max-height: 20rem; }
      
      .tryon-widget .w-4 { width: 1rem; }
      .tryon-widget .w-6 { width: 1.5rem; }
      .tryon-widget .w-8 { width: 2rem; }
      .tryon-widget .w-12 { width: 3rem; }
      .tryon-widget .w-16 { width: 4rem; }
      .tryon-widget .w-80 { width: 20rem; }
      .tryon-widget .w-full { width: 100%; }
      .tryon-widget .max-w-96 { max-width: 24rem; }
      .tryon-widget .min-w-80 { min-width: 20rem; }
      .tryon-widget .max-w-4xl { max-width: 56rem; }
      
      .tryon-widget .cursor-pointer { cursor: pointer; }
      
      .tryon-widget .items-center { align-items: center; }
      .tryon-widget .items-start { align-items: flex-start; }
      .tryon-widget .justify-center { justify-content: center; }
      .tryon-widget .justify-between { justify-content: space-between; }
      
      .tryon-widget .space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
      .tryon-widget .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
      .tryon-widget .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
      .tryon-widget .space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem; }
      
      .tryon-widget .rounded { border-radius: 0.25rem; }
      .tryon-widget .rounded-lg { border-radius: 0.5rem; }
      .tryon-widget .rounded-full { border-radius: 9999px; }
      .tryon-widget .rounded-t-lg { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
      
      .tryon-widget .border { border-width: 1px; }
      .tryon-widget .border-2 { border-width: 2px; }
      .tryon-widget .border-dashed { border-style: dashed; }
      .tryon-widget .border-gray-200 { border-color: rgb(229 231 235); }
      .tryon-widget .border-gray-300 { border-color: rgb(209 213 219); }
      .tryon-widget .border-blue-300 { border-color: rgb(147 197 253); }
      .tryon-widget .border-green-300 { border-color: rgb(134 239 172); }
      .tryon-widget .border-red-200 { border-color: rgb(254 202 202); }
      
      .tryon-widget .bg-white { background-color: rgb(255 255 255); }
      .tryon-widget .bg-blue-50 { background-color: rgb(239 246 255); }
      .tryon-widget .bg-blue-600 { background-color: rgb(37 99 235); }
      .tryon-widget .bg-blue-700 { background-color: rgb(29 78 216); }
      .tryon-widget .bg-gray-50 { background-color: rgb(249 250 251); }
      .tryon-widget .bg-gray-400 { background-color: rgb(156 163 175); }
      .tryon-widget .bg-green-50 { background-color: rgb(240 253 244); }
      .tryon-widget .bg-green-100 { background-color: rgb(220 252 231); }
      .tryon-widget .bg-red-50 { background-color: rgb(254 242 242); }
      .tryon-widget .bg-black { background-color: rgb(0 0 0); }
      .tryon-widget .bg-opacity-20 { --tw-bg-opacity: 0.2; }
      .tryon-widget .bg-opacity-50 { --tw-bg-opacity: 0.5; }
      
      .tryon-widget .p-1 { padding: 0.25rem; }
      .tryon-widget .p-3 { padding: 0.75rem; }
      .tryon-widget .p-4 { padding: 1rem; }
      .tryon-widget .p-6 { padding: 1.5rem; }
      .tryon-widget .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .tryon-widget .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .tryon-widget .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .tryon-widget .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
      .tryon-widget .pt-0 { padding-top: 0; }
      
      .tryon-widget .mb-1 { margin-bottom: 0.25rem; }
      .tryon-widget .mb-2 { margin-bottom: 0.5rem; }
      .tryon-widget .mb-3 { margin-bottom: 0.75rem; }
      .tryon-widget .mb-4 { margin-bottom: 1rem; }
      .tryon-widget .mb-6 { margin-bottom: 1.5rem; }
      .tryon-widget .mt-2 { margin-top: 0.5rem; }
      .tryon-widget .mt-4 { margin-top: 1rem; }
      .tryon-widget .mx-auto { margin-left: auto; margin-right: auto; }
      
      .tryon-widget .text-xs { font-size: 0.75rem; line-height: 1rem; }
      .tryon-widget .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .tryon-widget .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .tryon-widget .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      
      .tryon-widget .font-medium { font-weight: 500; }
      .tryon-widget .font-semibold { font-weight: 600; }
      
      .tryon-widget .text-white { color: rgb(255 255 255); }
      .tryon-widget .text-blue-600 { color: rgb(37 99 235); }
      .tryon-widget .text-blue-700 { color: rgb(29 78 216); }
      .tryon-widget .text-blue-800 { color: rgb(30 64 175); }
      .tryon-widget .text-gray-500 { color: rgb(107 114 128); }
      .tryon-widget .text-gray-600 { color: rgb(75 85 99); }
      .tryon-widget .text-gray-700 { color: rgb(55 65 81); }
      .tryon-widget .text-green-600 { color: rgb(22 163 74); }
      .tryon-widget .text-green-700 { color: rgb(21 128 61); }
      .tryon-widget .text-red-700 { color: rgb(185 28 28); }
      
      .tryon-widget .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
      .tryon-widget .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
      .tryon-widget .shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
      
      .tryon-widget .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .tryon-widget .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      
      .tryon-widget .hover\\:bg-blue-100:hover { background-color: rgb(219 234 254); }
      .tryon-widget .hover\\:bg-blue-700:hover { background-color: rgb(29 78 216); }
      .tryon-widget .hover\\:bg-white\\/20:hover { background-color: rgb(255 255 255 / 0.2); }
      .tryon-widget .hover\\:scale-110:hover { transform: scale(1.1); }
      .tryon-widget .hover\\:underline:hover { text-decoration-line: underline; }
      
      .tryon-widget .disabled\\:bg-gray-400:disabled { background-color: rgb(156 163 175); }
      
      .tryon-widget .object-cover { object-fit: cover; }
      .tryon-widget .overflow-hidden { overflow: hidden; }
      .tryon-widget .overflow-y-auto { overflow-y: auto; }
      
      .tryon-widget .inset-0 { inset: 0; }
      .tryon-widget .absolute { position: absolute; }
      .tryon-widget .relative { position: relative; }
      
      .tryon-widget .flex-shrink-0 { flex-shrink: 0; }
      .tryon-widget .flex-col { flex-direction: column; }
      
      .tryon-widget .gap-6 { gap: 1.5rem; }
      .tryon-widget .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      
      .tryon-widget .animate-spin {
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      /* Tab styles */
      .tryon-widget .grid.w-full.grid-cols-2 { display: grid; width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .tryon-widget [role="tablist"] { display: inline-flex; height: 2.5rem; align-items: center; justify-content: center; border-radius: 0.375rem; background-color: rgb(241 245 249); padding: 0.25rem; color: rgb(71 85 105); }
      .tryon-widget [role="tab"] { display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; border-radius: 0.25rem; padding: 0.375rem 0.75rem; font-size: 0.875rem; font-weight: 500; ring-offset-color: rgb(255 255 255); transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .tryon-widget [role="tab"][data-state="active"] { background-color: rgb(255 255 255); color: rgb(15 23 42); box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
      
      /* Button styles */
      .tryon-widget button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        border: none;
        cursor: pointer;
      }
      
      .tryon-widget button:disabled {
        pointer-events: none;
        opacity: 0.5;
      }
      
      /* Input styles */
      .tryon-widget input[type="file"] { display: none; }
      .tryon-widget input[type="url"] {
        display: flex;
        height: 2.5rem;
        width: 100%;
        border-radius: 0.375rem;
        border: 1px solid rgb(226 232 240);
        background-color: rgb(255 255 255);
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      
      .tryon-widget input[type="url"]:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        ring-width: 2px;
        ring-color: rgb(148 163 184);
      }
      
      /* Label styles */
      .tryon-widget label {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
      }
      
      /* Media queries for responsive design */
      @media (min-width: 768px) {
        .tryon-widget .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
    `;

    // Use the comprehensive CSS instead of processing with Tailwind
    const processedCSS = widgetCSS;

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

    // Inject styles into the widget with proper scoping
    const styleInjection = `
      (function() {
        if (!document.getElementById('tryon-ai-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-styles';
          style.textContent = \`${processedCSS.replace(/`/g, "\\`")}\`;
          document.head.appendChild(style);
        }
        
        // Add the tryon-widget class to the widget container
        setTimeout(() => {
          const widgetContainer = document.getElementById('tryon-ai-widget');
          if (widgetContainer) {
            widgetContainer.classList.add('tryon-widget');
          }
        }, 100);
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
