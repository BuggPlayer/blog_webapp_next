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
Primary_Color: Slate Blue (#6A5ACD) mainly important section -nav footer email  
Secondary_Color: Light Gray (#EAEAEA) // background color or text body
Accent_Color: Orange (#FFA500) // heading / sub heading  / buttons /
Highlight_Color: Teal (#008080)

# meduim 
Background: White or a very light gray (#FFFFFF or #F5F5F5)
Text: Dark gray or black (#333333 or #000000)
Accent Color: A calm and inviting color like a muted blue(#007BFF) 
            or a soothing green (#00A859) can work well for highlighting links,
               buttons, and interactive elements.


1. important section -nav footer email 
2. background color  / main body text
3. heading /sub heading
4. buttons / highlight important information, such as quotes, key points, or links
5. icons, dividers, or decorative elements to add visual interest


body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}




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
        backgroundColor: "#F5F5F5",
        headingTextColor: "#000000",
        subHeadingTextColor: "#666666",
        accentColor: "#FFA500", // button bg // link //
        hyperlinkColor: "#007BFF", //
      },
      fontFamily: {
        // sans for body
        // Montserrat
        sans: ["sans-serif"],
        // displayHead: ["Montserrat", "sans-serif"],
        displayHead: ["sans-serif"],
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
