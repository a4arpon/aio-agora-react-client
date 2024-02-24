/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      light: "#ffffff",
      dark: "#0c0b15",
      blue: "#47B6FF",
      transparent:'#fff0'
    },
  },
  plugins: [],
}
