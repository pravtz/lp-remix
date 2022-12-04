/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-box": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#1a1a1a",
        },
        "backgraund-main": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#212121",
        },
        "radical-red": {
          50: "#fff0f1",
          100: "#ffe2e5",
          200: "#ffcad0",
          300: "#ff9faa",
          400: "#ff697d",
          500: "#ff2b4d",
          600: "#ed113f",
          700: "#c80835",
          800: "#a80933",
          900: "#8f0c33",
        },
      },
      fontFamily:{
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
