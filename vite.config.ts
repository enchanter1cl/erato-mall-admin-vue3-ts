import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
  plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver({
            importStyle: "sass"
        })]
      })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src") // 相对路径别名配置，使用 @ 代替 src
    }
  },
    css: {
        preprocessorOptions: {
            // 用自己的文件覆盖掉element-plus包中的主题variables文件
            scss: {
                additionalData: `@use "@/styles/index.scss" as *;`,
            },
        },
    }
}})
