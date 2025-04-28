/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-flow": "gradientFlow 10s ease infinite",
      },
      keyframes: {
        gradientFlow: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
      },
      colors: {
        customBlue: "#A9B5DF",
        grad2: "#7886C7",
        grad3: "#7886C7",
        grad4: "#2D336B",
      },
    },
    plugins: [],
  },
};
