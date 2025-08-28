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
    // Import the existing Tailwind config
    const tailwindConfig = await import("./tailwind.config.ts");

    // First, generate Tailwind CSS for the widget
    const tailwindCSS = `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      /* CSS Variables for the widget */
      .tryon-widget {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;
        --primary: 221.2 83.2% 53.3%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96%;
        --secondary-foreground: 222.2 84% 4.9%;
        --muted: 210 40% 96%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96%;
        --accent-foreground: 222.2 84% 4.9%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 221.2 83.2% 53.3%;
        --radius: 0.5rem;
        
        /* Widget-specific base styles */
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .tryon-widget * {
        box-sizing: border-box;
      }
    `;

    // Process CSS with Tailwind using the existing config
    const result = await postcss([
      tailwindcss({
        ...tailwindConfig.default,
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
