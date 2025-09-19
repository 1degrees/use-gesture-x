import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/airesearch': {
        target: 'http://172.31.243.56:3391',
        changeOrigin: true
      },
      '/websurvey-app': {
        target: 'http://172.30.12.46:28640',
        changeOrigin: true
      },
      '/permission': {
        target: 'http://172.30.12.46:28640',
        changeOrigin: true
      },
      '/portal': {
        target: 'http://172.30.12.46:28640',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@sandboxes': path.resolve(__dirname, 'sandboxes'),
    }
  },
  plugins: [vue(), vueJsx()],
  define: {
    'process.env': { ...process.env }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  },
  build: {
    minify: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    cssCodeSplit: false
  },
  base: './'
})
