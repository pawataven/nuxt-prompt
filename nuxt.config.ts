import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  sourcemap: {
    server: false,
    client: false
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 4096
    }
  },
  
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  }
})
