/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5733',
          dark: '#E63900',
        },
        secondary: {
          DEFAULT: '#33BFFF',
          dark: '#0099CC',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Rubik', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
