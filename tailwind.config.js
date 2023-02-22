/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html, js}",
    "./public/**/*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": ['Ubuntu Mono', "monospace"],
        "roboto": ['Roboto Condensed', "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
