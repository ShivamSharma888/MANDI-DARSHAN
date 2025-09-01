/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 important (we will toggle dark class manually)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        soria: ['Soria', 'serif'],
        body: ['Roboto', 'sans-serif'], /* example default */
      },
    },
  },
  plugins: [],
};
