/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F1020",
        creamy: "#FFE6B7",
        samawi: "#E6F6F6",
        primary: "#F3F3F3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
