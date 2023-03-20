/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka One", "sans-serif"],
        monkey: ["Happy Monkey", "sans-serif"],
      },
    },
  },
  plugins: [],
};
