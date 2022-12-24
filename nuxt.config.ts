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
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
})
