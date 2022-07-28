import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App, { routes })
