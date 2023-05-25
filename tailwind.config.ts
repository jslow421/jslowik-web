/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        secondary: "var(--secondary, #FFFFFF)",
        primary: "var(--primary, #242424)",
        "color-1": "var(--color-1, #FE4365)",
        "color-2": "var(--color-2, #FF7F6A)",
        "color-3": "var(--color-3, #B4C8C2)",
        "color-4": "var(--color-4, #ECF1F0)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
