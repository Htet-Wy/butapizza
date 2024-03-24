/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        "primary-red": "#ed000c",
        "primary-yellow": "#eda200",
      },
    },
  },
  plugins: [],
};
