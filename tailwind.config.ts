import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGold: "var(--text-dark-gold)",
        darkGray: "var(--text-dark-gray)",
        lightGray: "var(--text-light-gray)",
        darkBlue: "var(--background-dark-blue)",
        lightBlue: "var(--background-light-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
