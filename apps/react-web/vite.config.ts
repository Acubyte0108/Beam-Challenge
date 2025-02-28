import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://medium.com/@praizjosh/how-to-import-svg-files-as-react-components-in-vite-97d6e1f2c046
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  build: {
    minify: "esbuild",
    rollupOptions: {
      treeshake: true,
      // https://rollupjs.org/configuration-options/#output-manualchunks
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "modules";
          }
          if (id.includes("src/components")) {
            return "components";
          }
          return "main";
        },
      },
    },
  },
  esbuild: {
    treeShaking: true,
  },
  server: {
    port: 3001,
  },
});
