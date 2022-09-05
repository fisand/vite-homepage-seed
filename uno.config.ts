import { defineConfig, presetIcons, presetUno, presetWind, transformerDirectives, UserConfig } from 'unocss'

const config = {
  presets: [presetUno(), presetWind(), presetIcons()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {
    colors: {},
    borderRadius: {},
  },
  transformers: [transformerDirectives()],
}

export default defineConfig(config) as unknown as UserConfig<typeof config['theme']>
