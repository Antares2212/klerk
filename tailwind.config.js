/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xl: "1440px",
      lg: "1024px",
      md: "640px",
      sm: "375px",
    },
    colors: {
      "bg-fade": "#F5F5F8",
      "bg-lihgt": "#FFFFFF",
      "disabled": "#999999",
      "text-primary": "#000000",
      "text-fade": "#666666",
      "primary": "#316FEE",
      "stroke": "#DCDCDC"
    },
    extend: {},
  },
  plugins: [],
};
