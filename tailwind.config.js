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
        "very-light-purple": "#8B6990",
      },
      boxShadow: {
        "custom": "0rem 2rem 3.5rem 0rem rgba(80, 0, 118, 0.10)",
      },
      fontSize: {
        "title": "clamp(2rem, 1.5714rem + 2.1429vw, 3.5rem)",
        "summary": "1.125rem",
        "content": "1rem",
      },
      padding: {
        "body": "clamp(0.5rem, 0.0714rem + 2.1429vw, 2rem)",
      },
      lineHeight: {
        "title": "normal",
      }
    },
  },
  plugins: [],
};
