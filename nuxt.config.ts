import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],

  // รวม CSS ไว้ที่นี่ที่เดียวครับ
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

  // แนะนำให้เพิ่มส่วนนี้เพื่อให้ Nuxt จัดการเรื่องการ Render FontAwesome ได้ดีขึ้น
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  }
})