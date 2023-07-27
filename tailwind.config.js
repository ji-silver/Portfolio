/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "NotoSans",
      secondary: "Fira Code, monospace",
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
    plugins: [
      require("postcss-import"),
      require("tailwindcss/nesting")(require("postcss-nesting")),
      require("autoprefixer"),
      require("tailwindcss"),
    ],
  },
};
