/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir Next Bold", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        lora: ["Lora", "serif"],
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
