/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient-blue":
          "radial-gradient(282.76% 179.3% at -11.35% 2.83%, #0A6EBD 0%, #053357 58%)",
        "radial-gradient-white":
          "linear-gradient(174deg, rgba(10, 110, 189, 0.24) -167.32%, rgba(179, 208, 255, 0.32) 114.25%)",
        "linear-gradient-blue":
          "linear-gradient(119deg, #053357 -12.97%, #0A6CBA 236.96%);",
        "title-card-gradient-blue":
          "linear-gradient(100deg, #0081C9 -39.41%, #F5F5F7 330.39%)",
        "linear-gradient-blue-text":
          "linear-gradient(90deg, #0A6EBD -24.79%, #F5F5F7 133.38%)",
      },
    },
  },
  plugins: [],
};
