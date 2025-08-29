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
          formats: ["iife"], // self-executing
        },
        rollupOptions: {
          output: {
            inlineDynamicImports: true, // ensure single file
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

    // Rename output
    const builtWidgetPath = path.join(__dirname, "public/widget.iife.js");
    const outputPath = path.join(__dirname, "public/widget.js");

    if (fs.existsSync(builtWidgetPath)) {
      fs.renameSync(builtWidgetPath, outputPath);
    }

    console.log("✅ Widget built successfully at public/widget.js");
  } catch (error) {
    console.error("❌ Error building widget:", error);
    process.exit(1);
  }
}

buildWidget();
