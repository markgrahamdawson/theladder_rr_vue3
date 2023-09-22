// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "The Ladder Redruth",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "title", name: "title", content: "The Ladder Redruth" },
        {
          hid: "description",
          name: "description",
          content:
            "A creative space for Redruth and Cornwall including studios, co-working and community events.",
        },
        {
          hid: "image",
          name: "image",
          content: "/images/josh.png",
        },
        {
          hid: "url",
          name: "url",
          content: process.env.NUXT_PUBLIC_BROWSER_BASE_URL,
        },
        { hid: "og:title", property: "title", content: "The Ladder Redruth" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "The Ladder Redruth",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: process.env.BROWSER_BASE_URL,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Order your sturdy boxes online, pack them up, and we’ll collect them from your door.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/josh.png",
        },
        // { hid: "og:image:width", property: "og:image:width", content: "2500" },
        // {
        //   hid: "og:image:height",
        //   property: "og:image:height",
        //   content: "1748",
        // },
        { hid: "og:type", property: "og:type", content: "website" },
        // { name: "twitter:card", content: "summary_large_image" },
      ],
      // link: [
      //   {
      //     rel: "icon",
      //     type: "image/png",
      //     href: "/Favicon.png",
      //     media: "(prefers-color-scheme: light)",
      //   },
      //   {
      //     rel: "icon",
      //     type: "image/png",
      //     href: "/Favicon_Darkmode.png",
      //     media: "(prefers-color-scheme: dark)",
      //   },
      // ],
    },
  },
  ssr: false,
  css: ["@/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
  privateRuntimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY }],
      "@nuxt/image-edge",
  ],
  image: {
    provider: 'storyblok', 
    storyblok:{
      baseURL:'https://a.storyblok.com/'
    }  
  },
  plugins: [{ src: "~/plugins/firebaseAuth", ssr: false, mode: "client" }],
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
});
