export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    'assets/index.css',
  ],
  app: {
    head: {
      title: 'asasinmode nuxt',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.webp' }],
    },
  },
  experimental: {
    reactivityTransform: true,
  },
})
