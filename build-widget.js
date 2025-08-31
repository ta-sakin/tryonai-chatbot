import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildWidget() {
  console.log("Building widget from React component...");

  try {
    await build({
      configFile: false,
      root: path.resolve(__dirname, "client"),
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "client/src"),
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
          output: {
            inlineDynamicImports: true,
            // 👇 Ensure CSS is injected
            assetFileNames: "widget.[ext]",
          },
        },
        outDir: path.resolve(__dirname, "public"),
        emptyOutDir: false,
        minify: true,
        cssCodeSplit: false, // 👈 this forces all CSS into the JS
      },
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      esbuild: {
        jsx: "automatic",
      },
    });

    // Rename output and copy to dist
    const builtWidgetPath = path.join(__dirname, "public/widget.iife.js");
    const publicOutputPath = path.join(__dirname, "public/widget.js");
    const distOutputPath = path.join(__dirname, "dist/widget.js");

    if (fs.existsSync(builtWidgetPath)) {
      fs.renameSync(builtWidgetPath, publicOutputPath);

      // Ensure dist directory exists
      const distDir = path.dirname(distOutputPath);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      // Copy to dist for Vercel deployment
      fs.copyFileSync(publicOutputPath, distOutputPath);
      console.log("✅ Widget built and copied to dist directory");
    }
  } catch (error) {
    console.error("❌ Error building widget:", error);
    process.exit(1);
  }
}

buildWidget();
