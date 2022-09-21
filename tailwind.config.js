/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Kanit', 'mono']
    },
    colors: {
      netflixRed: "#E50914",
      netflixDarkRed: "#B81D24",
      netflixBlack: "#221F1F",
      netflixWhite: "#F5F5F1",
    },
  },
  plugins: [],
}