import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        table: "src/main.tsx",
      },
      output: {
        entryFileNames: "pmf-table.js",
      },
    },
    outDir: "dist",
    cssCodeSplit: false,
    assetsDir: "./",
  },
});
