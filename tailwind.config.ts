import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0a09",
        surface: "#131210",
        elevated: "#1a1816",
        foreground: "#ede9e3",
        muted: "#8f8a82",
        subtle: "#5c5852",
        line: "rgba(237, 233, 227, 0.09)",
        "line-strong": "rgba(237, 233, 227, 0.18)",
        accent: "#e5844f",
        "accent-soft": "#f2b48c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%": { boxShadow: "0 0 0 0 rgba(229, 132, 79, 0.55)" },
          "70%": { boxShadow: "0 0 0 8px rgba(229, 132, 79, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(229, 132, 79, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
