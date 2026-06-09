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
        background: "#030712",
        surface: "#0a0f1e",
        accent: "#22d3ee",
        "accent-secondary": "#a855f7",
        foreground: "#f8fafc",
        muted: "#94a3b8",
        card: "#0f172a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.25)",
        "glow-lg": "0 0 60px rgba(34, 211, 238, 0.35), 0 0 100px rgba(168, 85, 247, 0.15)",
        "glow-purple": "0 0 40px rgba(168, 85, 247, 0.3)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-shine":
          "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)",
        "gradient-main": "linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #a855f7 100%)",
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "spin-slow": "spin 12s linear infinite",
        "border-flow": "border-flow 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -25px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
