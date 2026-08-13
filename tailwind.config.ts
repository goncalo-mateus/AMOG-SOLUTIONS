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
        brand: {
          bg: "#F8FAFC",
          dark: "#0F172A",
          coral: "#FF6B4A",
          mint: "#A8D6BB",
          burgundy: "#A62D26",
        },
      },
    },
  },
  plugins: [],
};
export default config;