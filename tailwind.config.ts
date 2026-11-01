import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-text": "var(--color-accent-text)",
        "accent-soft": "var(--color-accent-soft)",
        peach: "var(--color-peach)",
        sky: "var(--color-sky)",
        mint: "var(--color-mint)",
        blush: "var(--color-blush)",
        success: "var(--color-success)",
        star: "var(--color-star)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "24px",
        image: "20px",
        panel: "32px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(20, 22, 28, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
