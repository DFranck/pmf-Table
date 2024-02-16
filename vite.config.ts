import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/Table.tsx",
      name: "pmf-table",
      fileName: (format) => `pmf-table.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist",
    // Il est conseillé de ne pas fractionner le code CSS pour les bibliothèques.
    cssCodeSplit: false,
    assetsDir: "./",
    target: "esnext",
  },
});
