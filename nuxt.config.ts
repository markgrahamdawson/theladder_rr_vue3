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
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
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
