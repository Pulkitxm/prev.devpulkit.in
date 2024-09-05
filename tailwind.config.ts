import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "jump-top": "jump-top .3s forwards",
      },
      keyframes: {
        "jump-top": {
          "0%": {
            top: "-500px",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
