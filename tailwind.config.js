/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FDFDFD",
        base2: "#E7F6F8",
        base3: "#A9A9A9",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#52A1A4",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          info: "#1A4B5F",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
};
