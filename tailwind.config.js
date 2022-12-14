/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FDFDFD",
        base2: "#E7F6F8",
        base3: "#A9A9A9",
        base4: "#222222",
        base5: "#3D3D3D",
        base6: "#898989",
        prim: "#296676",
        prim1: "#52A1A4",
        prim2: "#488892",
        prim3: "#7DC8C4",
        warn: "#FDE384",
        warn2: "#D2A608",
        // suc: "#BEE3A0",
        suc: "#22BB33",
        suc2: "#68A636",
        suc3: "#7DC741",
        suc4: "#BEE3A0",
        inf: "#B0C0F9",
        inf2: "#516CCB",
        inf3: "#4285F4",
        inf4: "#8035E1",
        dang: "#FF704C",
        dang2: "#D44521",
        dang3: "#FF704C",
        dang4: "#DD5533",
        dang5: "#FF5328",
        dang6: "#FFA993",
        border: "#4DB4EE",
        border2: "#E9FCFA",
        border3: "#F2F4F3",
        border4: "#DDDDDD",
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
          "base-200": "#F2F4F3",
          "base-300": "#D3D3D3",
        },
      },
      "cupcake",
    ],
  },
};
