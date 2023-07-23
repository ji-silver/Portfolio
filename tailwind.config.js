/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  plugins: [],
};
