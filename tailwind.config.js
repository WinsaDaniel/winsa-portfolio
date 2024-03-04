/** @type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Playfair Display", "serif"],
      lato: ["Lato", "sans-serif"],
    },

    fontSize: {
      sm: "24px",
      md: "33px",
      lg: "64px",
    },
  },
  plugins: [],
};
