import { defineConfig } from 'vite'
import { promises as fs } from 'fs'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import legacy from '@vitejs/plugin-legacy'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // {
    //   name: 'fix-import',
    //   enforce: 'pre',
    //   resolveId(id) {
    //     if (id === 'swiper.css') return 'fix-swiper.css'
    //     if (id === 'swiper/css/pagination.css') return 'fix-pagination.css'
    //   },
    //   async load(id) {
    //     if (id === 'fix-swiper.css') {
    //       return await fs.readFile('./node_modules/swiper/swiper.min.css', 'utf-8')
    //     }
    //     if (id === 'fix-pagination.css') {
    //       return await fs.readFile('./node_modules/swiper/modules/pagination/pagination.min.css', 'utf-8')
    //     }
    //   },
    // },
    vue(),
    Pages(),
    Unocss({
      presets: [
        presetWind(),
        presetIcons({
          /* options */
        }),
      ],
    }),
    AutoImport({
      imports: ['vue'],
      dts: './src/auto-imports.d.ts',
    }),
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
