/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))", 
        // card_bg: "rgba(var(--card-bg))",
        card_shadow: "rgba(var(--card-shadow))",
        header: "rgba(var(--header))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} 