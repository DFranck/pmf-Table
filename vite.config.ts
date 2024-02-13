import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/Table.tsx",
      formats: ["es"],
      fileName: "pmf-table",
    },
    rollupOptions: {
      input: {
        main: "src/Table.tsx",
      },
    },
  },
});
