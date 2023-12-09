/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "light-purple": "#AD2DF6",
        "very-light-purple": "rgb(140, 105, 145)",
      },
      boxShadow: {
        "custom": "0 1.875rem 3.75rem #0000001a",
      },
      fontSize: {
        "summary": "1.12rem",
        "content": "1.02rem",
      },
      padding: {
        "summary": "1.4rem",
      },
      margin: {
        "content": "1.45rem",
      },
    },
  },
  plugins: [],
};
