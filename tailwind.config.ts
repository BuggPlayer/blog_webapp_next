import type { Config } from "tailwindcss";




// Color Code:
// #20727F
// #0E353F
// #767676


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "567px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      screens: {
        xs: { min: "320px", max: "567px" },
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        primary: "#53BD95",
        "primary-dark": "#2c785c",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
