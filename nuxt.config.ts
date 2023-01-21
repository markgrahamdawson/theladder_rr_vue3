// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: [
    // Simple usage
    // '@nuxtjs/google-fonts',
  ],
  publicRuntimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
  },
  privateRuntimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
  modules: [['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }]],
  plugins: [{ src: '~/plugins/firebaseAuth', ssr: false, mode: 'client' }],
  // googleFonts: {
  //   families: {
  //     'Permanent Marker': true,
  // 'Loved by the King': true,
  // 'Josefin Sans': {
  //   wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  //   ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  // },
  // 'Amatic SC': true
  // // or:
  // // Lato: [100, 300],
  // // Raleway: {
  // //   wght: [100, 400],
  // //   ital: [100]
  // // },
  //   },
  // },
})
