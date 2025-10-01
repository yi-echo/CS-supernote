import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// function pathResolve(dir: string) {
//   return resolve(process.cwd(), ".", dir);
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 使用 @ 代表 src
    },
  },
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
      },
    },
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/variables.scss";`,
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
});
