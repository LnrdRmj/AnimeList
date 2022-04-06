const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
    extend: {
        animation: {
            wiggle: 'wiggle .2s ease-in-out 1',
        },
        keyframes: {
            wiggle : {
                '0%': { transform: 'rotate(-20deg)' },
                '25%': { transform: 'rotate(20deg)' },
                '75%': { transform: 'rotate(-20deg)' },
                '100%' : {transform: 'rotate(20deg)'}
            }
        },
        colors: {
            primary: {
                50: '#eae7ec',
                100: '#d5cfd9',
                200: '#c0b7c7',
                300: '#ab9fb4',
                400: '#9788a1',
                500: '#82708e',
                600: '#6d587b',
                700: '#584069',
                800: '#432856',
                900: '#2e1043',
            },
            secondary: {
                50: '#f8e8ed',
                100: '#f0d1da',
                200: '#e9bac8',
                300: '#e2a3b6',
                400: '#db8ca4',
                500: '#d37591',
                600: '#cc5e7f',
                700: '#c5476d',
                800: '#bd305a',
                900: '#b61948',
            },
            tertiary: '#D8DBE2',
        },
    },
  },
  plugins: [],
}