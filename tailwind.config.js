const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'xs' : '425px',
      ...defaultTheme.screens 
    },
    extend: {},
  },
  plugins: [],
}