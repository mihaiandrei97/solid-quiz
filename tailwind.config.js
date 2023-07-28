/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f0effe",
          100: "#e3e1fe",
          200: "#cfcafb",
          300: "#b2a9f8",
          400: "#9d87f2",
          500: "#8d6aea",
          600: "#804edd",
          700: "#5b369d",
          800: "#2C2446",
          900: "#181028",
        },
      },
    },
  },
  plugins: [],
};
