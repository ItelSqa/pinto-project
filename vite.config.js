import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      "/wp-json": {
        target: "https://wordpress-1273862-4929101.cloudwaysapps.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});


