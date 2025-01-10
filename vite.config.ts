import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 自动导入插件
import AutoImport from "unplugin-auto-import/vite";
// 自动导入组件
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      uni(),
      //自动导入配置
      AutoImport({
        imports: ["vue", "uni-app"],
      }),
      Components({})
  ],
});
