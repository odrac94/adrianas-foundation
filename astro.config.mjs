import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({ configFile: './tailwind.config.mjs' })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
})
