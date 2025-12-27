/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Manrope',
            fontWeight: '400',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('/fonts/manrope-v20-latin-regular.woff2') format('woff2'), url('/fonts/manrope-v20-latin-regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('/fonts/manrope-v20-latin-700.woff2') format('woff2'), url('/fonts/manrope-v20-latin-700.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Sora',
            fontWeight: '400',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('/fonts/sora-v17-latin-regular.woff2') format('woff2'), url('/fonts/sora-v17-latin-regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Sora',
            fontWeight: '700',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('/fonts/sora-v17-latin-700.woff2') format('woff2'), url('/fonts/sora-v17-latin-700.ttf') format('truetype')`,
          }]
      })
    }
  ],
}