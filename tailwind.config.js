/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C6AC4",
        primaryBg: "#E7E9F6",
        greyBg: "#84919C",
        secondary: "#3674D9",
        secondaryBg: "#E1EAF9",
        error: "red",
        errorBg: "#FADEDD",
      },
    },
  },
  plugins: [],
};
