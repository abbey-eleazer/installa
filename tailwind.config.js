/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  theme: {
    extend: {},
    colors: {
      'darkgray': '#263238',
      'gray': '#455A64',
      'redTransparent': '#E8505B',
      'red': '#FE4E5A',
      'lightRed': '#F38086',
      'lighterRed': '#F8CBCE',
    }
  },
  plugins: [],
}

