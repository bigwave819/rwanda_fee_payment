/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['AveriaLibre_400Regular'],
        serif: ['AveriaLibre_400Regular'],
        mono: ['AveriaLibre_400Regular'],
      },
    },
  },
  plugins: [],
}