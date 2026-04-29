import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind({ configFile: './tailwind.config.mjs' })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    server: {
      allowedHosts: ['vitrifiable-bryan-utterly.ngrok-free.dev']
    }
  }
})
