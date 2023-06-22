/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "bk-primary": "#ed7801",
        "bk-secondary": "#fbe6d6",
        "bk-dark": "#8b542f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
