import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import WindiCSS from "vite-plugin-windicss";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    plugins: [
      vue(),
      WindiCSS(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver(), // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],
        dts: path.resolve(path.resolve(__dirname, "src"), "auto-imports.d.ts"),
      }),
      Components({
        resolvers: [
          ElementPlusResolver(), // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
        ],
        dts: path.resolve(path.resolve(__dirname, "src"), "components.d.ts"),
      }),
      Icons({
        autoInstall: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/global.scss";',
          // additionalData: '@import "@/style.scss";',
        },
      },
    },
    server: {
      host: "localhost",
      port: 6719,
      proxy: {
        "/api": {
          // target: env.VITE_BASE_URL,
          target: "http://127.0.0.1:4523/m1/1902803-0-default",
          // 是否跨域
          changeOrigin: true,
          // 路径重写
          // rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
  };
});
