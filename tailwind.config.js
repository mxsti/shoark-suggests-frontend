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
      "blue": "#33FFCC",
      "grey": "#F8F8F8",
      "emoji-yellow": "#ffde34",
    },
  },
  plugins: [],
}