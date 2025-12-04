// Source - https://stackoverflow.com/a
// Posted by MOHD OWAIS ANSARI
// Retrieved 2025-12-04, License - CC BY-SA 4.0

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist"
  }
});
