/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-scale-white": "#fff",
        gainsboro: {
          "100": "#dedede",
          "200": "#d9d9d9",
        },
        gray: {
          "100": "#fcfcfc",
          "200": "#878680",
          "300": "#1f1e17",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(255, 255, 255, 0.3)",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "rgba(255, 255, 255, 0.7)",
          "800": "rgba(255, 255, 255, 0.2)",
        },
        "grey-scale-grey-4": "#bdbdbd",
        lightgray: "#ccc",
        black: "#000",
        floralwhite: "#f8f7f0",
        "grey-scale-grey-5": "#e0e0e0",
        "grey-scale-grey-1": "#333",
        primary: "#4baf47",
        goldenrod: {
          "100": "#f7c35f",
          "200": "#eec044",
        },
        limegreen: "#46d040",
        mediumseagreen: "#49a760",
        lightyellow: "#e3ffde",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        manrope: "Manrope",
        "covered-by-your-grace": "'Covered By Your Grace'",
        "font-awesome-5-pro": "'Font Awesome 5 Pro'",
        "abhaya-libre-extrabold": "'Abhaya Libre ExtraBold'",
      },
      borderRadius: {
        mini: "15px",
        "mid-2": "17.2px",
        "sm-3": "13.3px",
        "3xs": "10px",
        xl: "20px",
        "6xs-7": "6.7px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "2xs-7": "10.7px",
      "3xs-3": "9.3px",
      base: "16px",
      xs: "12px",
      "14xl-3": "33.3px",
      "2xs-8": "10.8px",
      smi: "13px",
      "3xs-5": "9.5px",
      "13xl": "32px",
      "3xs": "10px",
      "3xs-2": "9.2px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
