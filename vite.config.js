import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: ['uview-plus'],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    uni(),
  ],
  // 发布时删除console
  build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
})
