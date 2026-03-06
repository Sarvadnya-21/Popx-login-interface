/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6d28d9",
        accent: "#f472b6",
        "background-light": "#fafafa",
        "background-dark": "#0a0a0a",
      },
      fontFamily: {
        display: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: { DEFAULT: "0.5rem", lg: "1rem", xl: "1.5rem", full: "9999px" },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};