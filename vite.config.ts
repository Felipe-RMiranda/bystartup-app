import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "ByStartup Clientes",
        short_name: "ByStartup",
        description:
          "Aplicativo de clientes ByStartup. Gerencie e acesse serviços de forma rápida e segura.",
        lang: "pt-BR",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#34372e",
        theme_color: "#34372e",
        icons: [],
      },
      workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,json,webmanifest,ts,tsx}"],
          navigateFallback: "/index.html",
        },
        devOptions: {
          enabled: true
        },
        includeAssets: ["favicon.ico", "robots.txt", "icons/*"],
        strategies: "generateSW",
        srcDir: "src",
        filename: "sw.js",
        injectRegister: "auto",
    }),
  ],
});
