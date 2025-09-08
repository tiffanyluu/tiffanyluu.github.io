import type { Config } from "tailwindcss";

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(30px, -20px) scale(1.05)" },
          "50%": { transform: "translate(-20px, 10px) scale(0.95)" },
          "75%": { transform: "translate(10px, 20px) scale(1.05)" },
        },
      },
      animation: {
        blob: "blob 15s infinite ease-in-out",
      },
    },
  }
} satisfies Config;
