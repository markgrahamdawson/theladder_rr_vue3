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
  safelist: [
    {
      pattern: /border-(teal|orange)/, // You can display all the colors that you need
    }
  ],
  theme: {
    extend: {typography: ({theme}) => ({
      DEFAULT: {
        css: {
          maxWidth: '2000px',
          minHeight: '10px',
        },
      },
    }),
      scale: {
        '-100': '-1',
      }
    },
    // fontFamily: {
    //   permark: ['Permanent Marker'],
    //   lbtk: ['Loved by the King'],
    //   josan: ['Josefin Sans'],
    //   amatic: ['Amatic SC'],
    // },
    fontFamily: {
      // change default tailwind font (sans) to poppins as is by far the most common font family
      // sans: ['Amatic', 'Arial', 'sans-serif'],
      // inter: ['Inter', 'sans-serif']
      "amatic": "amatic",
      "permark": "permark",
      "josan": "josan",
      "permark": "permark",
      "lbtk": "lbtk",
      "josefin": "josefin"
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        mizzle: '#bfc5b8',
        offwhite: '#f0ece3',
        teal: '#00a7a5',
        orange: '#f15a22',
        richblack: '#13100d',
        brightyellow: '#FFEE00',
        warmred: '#E94F35'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
  ,
}
