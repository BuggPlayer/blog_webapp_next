import type { Config } from "tailwindcss";




// Color Code:
// #20727F
// #0E353F
// #767676

// #20727F
// #0E353F
// #767676

/* 
 color combination 1
Primary Color: Dark Blue (#001F3F) --> navabr and footer // behind the text bg
Secondary Color: Light Gray (#D3D3D3)  -> overall background of the blog // text body
Accent Color: Electric Blue (#0074D9) --> heading and sub-heading // call to action BUTTONs // highlight important information, such as quotes, key points, or links
Highlight Color: Green (#2ECC40) -->pply the highlight color to secondary elements like icons, dividers, or decorative elements to add visual interest.


color combination 2
Primary Color: Slate Blue (#6A5ACD) 
Secondary Color: Light Gray (#EAEAEA)
Accent Color: Orange (#FFA500)
Highlight Color: Teal (#008080)

*/

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
