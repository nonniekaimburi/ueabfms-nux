// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta:{
        title: "ueab files"
    },
    runtimeConfig: {
      // The private keys which are only available within server-side
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN:process.env.AUTH_DOMAIN,
      PROJECT_ID:process.env.PROJECT_ID,
      STORAGE_BUCKET:process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
      APP_ID:process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      // Keys within public, will be also exposed to the client-side
      public: {
        API_KEY: process.env.API_KEY,
      AUTH_DOMAIN:process.env.AUTH_DOMAIN,
      PROJECT_ID:process.env.PROJECT_ID,
      STORAGE_BUCKET:process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
      APP_ID:process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID
      }
    },
    css: [
      "~/assets/css/styles.css",
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
      
      transpile:[
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons'
      ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
