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
        'custom-gray': '#616161',
        'custom-bg': '#F3F3F3',
      },
      width: {
        'custom-button': '312px',
        'custom-img': '60px',
        'custom-estrelas': '122px'
      },
      height: {
        'custom-estrelas': '19.2px'
      },
    },
  },
  plugins: [],
}

