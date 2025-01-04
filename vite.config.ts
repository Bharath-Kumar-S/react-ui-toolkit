/// <reference types="vite/client" />
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ReactUiToolkit",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync(["src/components/**/index.tsx", "src/main.ts"]).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          );
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names[0] === "index.css") {
            return "index.css";
          }
          return assetInfo.names[0];
        },
        entryFileNames: "[name].js",
      },
    },
  },
});
