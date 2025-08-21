import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/useClipboard.js'),
      name: 'VueUseClipboard',
      fileName: (format) => `vue-copy-2-clipboard.${format}.js`
    },
    rollupOptions: {
      // make sure to exclude vue from the bundle
      external: ['vue'],
      output: {
        // Provide global variables for external modules
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})