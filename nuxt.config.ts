import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  devtools: { enabled: true },

  devServer: {
    port: 3000,
  },

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
    server: {
      strictPort: true,
    },
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
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3001"
    }
  },
  
})
