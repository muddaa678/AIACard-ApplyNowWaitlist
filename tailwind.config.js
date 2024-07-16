/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "#181819",
        goldenrod: "#efb900",
        darkgoldenrod: "#bd8500",
        white: "#fff",
        darkslategray: "#303030",
        darkgray: "#a8a8a8",
        dimgray: {
          "100": "#636363",
          "200": "rgba(99, 99, 99, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
