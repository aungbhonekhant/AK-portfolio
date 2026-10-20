import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Keep the CRA-era REACT_APP_* names so .env and Netlify settings stay valid.
  envPrefix: "REACT_APP_",
  server: {
    // Sanity CORS allows http://localhost:3000.
    port: 3000,
    strictPort: true,
  },
  build: {
    // Netlify publishes client/build.
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    passWithNoTests: true,
  },
});
