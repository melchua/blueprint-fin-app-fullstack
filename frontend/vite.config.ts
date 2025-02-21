import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://backend:8000",
        changeOrigin: true,
        secure: false,
        ws: true, // Enable WebSocket proxy
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove /api prefix when forwarding to backend
      },
    },
    host: true, // Add this to allow connections from outside the container
  },
  plugins: [react(), tailwindcss()],
});
