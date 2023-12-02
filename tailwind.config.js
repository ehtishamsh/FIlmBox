/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxm: "570px",
        xxsm: "400px",
      },
      fontFamily: {
        custom: ["Poppins"],
      },
    },
  },
  plugins: [],
};
