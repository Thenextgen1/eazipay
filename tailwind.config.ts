import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        madeMellow: ["var(--font-madeMellow)"],
      },
      colors: {
        eaziDark: "#515251",
        eaziGreen: "#11453B",
        eaziMint: "#D9EBCD",
      },
      boxShadow: {
        button: "0px 8px 16px 0px rgba(17, 69, 59, 0.20)",
        container: "0px 20px 48px 0px rgba(170, 170, 170, 0.29)",
        navBar: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
        sideBar: "4px 0px 25px 0px rgba(170, 170, 170, 0.08)",
        mint: "0px 6px 12px 0px rgba(0, 0, 0, 0.20)",
        card: "0px 6px 12px 0px rgba(170, 170, 170, 0.11)",
        chart: "0px 9px 18px 0px rgba(170, 170, 170, 0.15)",
      },
      screens: {
        "3xl": "1840px",
      },
    },
  },
  plugins: [],
};
export default config;
