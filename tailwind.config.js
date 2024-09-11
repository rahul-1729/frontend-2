/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        instagramYellow: 'rgb(255, 214, 0)',
        instagramOrange: 'rgb(255, 122, 0)',
        instagramPurple: 'rgb(211, 0, 197)',
      },
    },
  },
  plugins: [],
}