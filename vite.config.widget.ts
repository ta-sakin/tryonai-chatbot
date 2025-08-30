// vite.config.widget.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  define: {
    // This is the key change to define the global 'process' variable
    "process.env": {},
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
      },
    },
    outDir: path.resolve(__dirname, "public"),
    emptyOutDir: false,
    minify: true,
    cssCodeSplit: false,
  },
});
