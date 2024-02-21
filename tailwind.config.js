/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#292929',
        'custom-red': '#DA2535',
        'custom-white': '#FBFBFB',
      },
      width: {
        'custom-button': '312px'
      }
    },
  },
  plugins: [],
}

