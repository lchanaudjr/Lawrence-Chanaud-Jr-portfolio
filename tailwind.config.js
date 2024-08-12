/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      //prettier-ignore
      colors: {
        bodyColor: "#00071b",
        lightText: "#ffffff",
        designColor: "#fedb69",
        gradientStart: "#000f36",
        gradientEnd: "#554a00", 
      },
    },
  },
  plugins: [],
};
