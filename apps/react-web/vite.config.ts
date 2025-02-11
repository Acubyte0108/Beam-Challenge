import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild", // Fast minification
    rollupOptions: {
      treeshake: true, // Removes unused code
    },
  },
  esbuild: {
    treeShaking: true,
    drop: ["console", "debugger"], // Remove console logs & debuggers in production
  },
  server: {
    port: 3001,
  },
})
