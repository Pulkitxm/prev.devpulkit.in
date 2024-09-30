import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      bump: {
        "44%": { transform: "translate(1.33%, 6.75%)" },
        "53%": { transform: "translate(-16.67%, -0.54%)" },
        "61%": { transform: "translate(3.66%, -2.46%)" },
        "69%": { transform: "translate(-0.59%, 15.27%)" },
        "76%": { transform: "translate(-1.92%, -4.68%)" },
        "83%": { transform: "translate(9.38%, 0.96%)" },
        "90%": { transform: "translate(-4.55%, 1.98%)" },
      },
      worm: {
        from: { strokeDashoffset: "10" },
        "25%": { strokeDashoffset: "295" },
        to: { strokeDashoffset: "1165" },
      },
    },
    animation: {
      bump: "bump 3s linear infinite",
      worm: "worm 3s cubic-bezier(0.42, 0.17, 0.75, 0.83) infinite",
    },
  },
  plugins: [],
};
export default config;
