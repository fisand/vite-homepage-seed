/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '~icons/*' {
  import type { DefineComponent } from 'vue'

  const icon: DefineComponent<{}, {}, any>
  export default icon
}

declare module '~icons/test-icons/*' {
  import type { DefineComponent } from 'vue'

  const icon: DefineComponent<{}, {}, any>
  export default icon
}
