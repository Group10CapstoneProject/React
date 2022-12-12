/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FDFDFD",
        base2: "#E7F6F8",
        base3: "#A9A9A9",
        prim: "#296676",
        prim1: "#52A1A4",
        prim2: "#488892",
        prim3: "#7DC8C4",
        warn: "#FDE384",
        suc: "#BEE3A0",
        suc2: "#68A636",
        inf: "#B0C0F9",
        inf2: "#516CCB",
        dang: "#FF704C",
        dang2: "#D44521",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#52A1A4",
          "primary-focus": "#296676",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          info: "#1A4B5F",
          "info-content": "#FF704C",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
};
