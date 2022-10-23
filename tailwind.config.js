/** @type {import('tailwindcss').Config} */

const { colors } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...colors,
      colors: {
        darkBlue: "#1f2937",
        greyChrome: "#374151",
        darkGrey: "#363f4b",
        orange70: "#db6e42",
        blueAzur: "#119ca3",
        blueGrey: "#374151",
      },
    },
  },
  plugins: [],
};
