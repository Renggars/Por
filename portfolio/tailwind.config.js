/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'green-main' : '#00DC82',
        'background' : '#020420'
      }
    },
  },
  plugins: [],
}