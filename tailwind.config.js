const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_layouts/**/*.{html,js}',
    './_includes/**/*.{html,js}',
  ],
  purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'leme': ['LemeFrom', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        leme: '#479EFD',
        primary: '#001328',
        accent: '#F2F2F2',
        slate: '#1A1A1A'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
