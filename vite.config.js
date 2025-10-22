import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "",
  },
  server: {
    open: true,
    port: 5173,
  },
});