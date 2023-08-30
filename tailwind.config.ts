import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        grayish: "#666",
        darkGrayish: "#A7A7A7",
        headingClr: "#42446E",
        darkHeadingClr: "#D9D9D9",
        darkClr: "#191919",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
