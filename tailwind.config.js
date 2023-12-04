/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 0 0 19px 28px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle 450px,var(--tw-gradient-stops))",
      },
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
