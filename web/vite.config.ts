import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import { gzipCompressionPlugin, svgIconsPlugin } from '../sub-modules/hippo-module-core/plugins'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      extensions: ['vue', 'tsx', 'jsx', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx/, /\.jsx/],
      resolvers: [ElementPlusResolver()]
    }),
    gzipCompressionPlugin(),
    svgIconsPlugin({
      iconDirs: [
        //path.resolve(process.cwd(), 'src/assets/icon/app')
        path.resolve(process.cwd(), '../sub-modules/hippo-desktop/assets/icon/desktop-boolbar'),
        path.resolve(process.cwd(), '../sub-modules/hippo-desktop/assets/icon/menu'),
        path.resolve(process.cwd(), '../sub-modules/hippo-desktop/assets/icon/app'),
        path.resolve(process.cwd(), '../sub-modules/hippo-bpmn/assets/icon/app')
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '' //引入scss文件
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          '@vueuse/core': ['@vueuse/core'],
          'vue-echarts': ['vue-echarts'],
          'echarts': ['echarts']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, '')
        }
      }
    }
  }
})
