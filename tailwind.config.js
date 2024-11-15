const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#007cff",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "neutralWhite": "#FFFFFF",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

