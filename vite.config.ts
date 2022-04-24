import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import legacy from '@vitejs/plugin-legacy'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    Icons({
      customCollections: {
        'test-icons': FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      },
    }),
  ],
})