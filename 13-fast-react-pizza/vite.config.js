import { defineConfig } from "vite";
// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
