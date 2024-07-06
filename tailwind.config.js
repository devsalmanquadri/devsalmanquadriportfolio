// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
      colors: {
        crimson: {
          DEFAULT: "#DC143C",
          dark: "#B0173B",
        },
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
