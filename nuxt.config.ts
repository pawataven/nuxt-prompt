import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],
   css: ['~/assets/css/main.css'],
  //ปิด Sourcemap
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
});