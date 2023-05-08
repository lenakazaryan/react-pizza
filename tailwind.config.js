// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "14px",
        s: "16px",
        m: "20px",
        l: "22px",
        xl: "24px",
        "2xl": "32px",
      },
      container: {
        center: true,
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1360px",
        },
      },

      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        headerFontWeight: "var(--headerFontWeight)",
        bodyFontWeight: "var(--bodyFontWeight)",
      },
      colors: {
        primary: "#FFDF8C",
        lightGray: "#F9F9F9",
        gray: "#777777",
        orange: "#FE5F1E",
        lightOrange: "#EB5A1E",
        activeClass: "#282828",
        pizzaTypeColor: "#F3F3F3",
        line: "rgba(255, 255, 255, 0.25)",
        borderGray: "#D3D3D3",
        buttonBg: "#282828",
      },
    },
  },
  plugins: [],
};
