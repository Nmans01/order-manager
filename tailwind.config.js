/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "./src/*.jsx",
    "./index.html",
    "./*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss")],
}
