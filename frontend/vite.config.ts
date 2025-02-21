import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://backend:8000",
        changeOrigin: true,
        secure: false,
        ws: true, // Enable WebSocket proxy
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove /api prefix when forwarding to backend
      },
    },
    host: true, // Add this to allow connections from outside the container
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
