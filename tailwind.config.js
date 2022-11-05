/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // fontFamily: {
    //   permark: ['Permanent Marker'],
    //   lbtk: ['Loved by the King'],
    //   josan: ['Josefin Sans'],
    //   amatic: ['Amatic SC'],
    // },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        mizzle: '#bfc5b8',
        offwhite: '#f0ece3',
        teal: '#4da4a4',
        richblack: '#13100d',
        brightyellow: '#FFEE00',
      }
    },
  },
  plugins: [],
}
