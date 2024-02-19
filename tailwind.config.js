/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#7857FF",
          200: "#1D1928",
        },
        secondary: {
          100: "#FF0073",
          200: "#571032"
        },
        textColor: {
          100: "#FFFFFF",
          200: "#808080",
          300: "#626067",
          400: "#121212",
          500: "#34303E",
        }
      }
    },
  },
  plugins: [],
};
