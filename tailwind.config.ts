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
        // Deep Space Intelligence palette
        space: {
          950: "#0A0F1E",
          900: "#0D1224",
          800: "#111827",
          700: "#1A2235",
          600: "#1E293B",
          500: "#263347",
          400: "#334155",
          300: "#475569",
          200: "#64748B",
          100: "#94A3B8",
        },
        cyan: {
          DEFAULT: "#00D4FF",
          dim: "#00A8CC",
          glow: "rgba(0,212,255,0.15)",
          faint: "rgba(0,212,255,0.05)",
        },
        violet: {
          DEFAULT: "#7C3AED",
          dim: "#6D28D9",
          glow: "rgba(124,58,237,0.15)",
          faint: "rgba(124,58,237,0.05)",
        },
        emerald: {
          DEFAULT: "#10B981",
          dim: "#059669",
          glow: "rgba(16,185,129,0.15)",
          faint: "rgba(16,185,129,0.05)",
        },
        gold: {
          DEFAULT: "#F59E0B",
          dim: "#D97706",
          glow: "rgba(245,158,11,0.15)",
          faint: "rgba(245,158,11,0.05)",
        },
        // Text
        "text-primary": "#F9FAFB",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
        "border-subtle": "#1F2937",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.15), transparent)",
        "card-gradient": "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(17,24,39,0.9) 100%)",
        "noise": "url('/assets/noise.png')",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)",
        "glow-violet": "0 0 20px rgba(124,58,237,0.3), 0 0 40px rgba(124,58,237,0.1)",
        "glow-emerald": "0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.1)",
        "glow-gold": "0 0 20px rgba(245,158,11,0.3), 0 0 40px rgba(245,158,11,0.1)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse_glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
