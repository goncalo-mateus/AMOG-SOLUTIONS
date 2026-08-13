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
          bg: "#F8FAFC",       // Pergaminho claro
          dark: "#0F172A",     // Slate profundo
          coral: "#FF6B4A",    // Laranja Coral
          mint: "#A8D6BB",     // Verde Menta
          burgundy: "#A62D26", // Vermelho Profundo
        },
      },
    },
  },
  plugins: [],
};
export default config;