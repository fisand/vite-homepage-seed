import { defineConfig } from 'vite'
import { promises as fs } from 'fs'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import legacy from '@vitejs/plugin-legacy'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'fix-import',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper.css') return 'fix-swiper.css'
        if (id === 'swiper/css/pagination.css') return 'fix-pagination.css'
      },
      async load(id) {
        if (id === 'fix-swiper.css') {
          return await fs.readFile('./node_modules/swiper/swiper.min.css', 'utf-8')
        }
        if (id === 'fix-pagination.css') {
          return await fs.readFile('./node_modules/swiper/modules/pagination/pagination.min.css', 'utf-8')
        }
      },
    },
    vue(),
    Pages(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    Icons({
      customCollections: {
        'test-icons': FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
    }),
  ],
})
