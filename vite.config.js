import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ruka.icedriving.pl (custom domain on GitHub Pages) -> base "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { outDir: "dist", assetsInlineLimit: 0 },
});
