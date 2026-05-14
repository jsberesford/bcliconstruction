import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F2EC",
        ink: "#0F0F0F",
        accent: {
          DEFAULT: "#F5B800",
          contrast: "#0F0F0F",
        },
        beige: "#E8E2D5",
        rule: "#D9D3C7",
        gray: {
          DEFAULT: "#7A7A7A",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#C7C7C7",
          400: "#9B9B9B",
          500: "#7A7A7A",
          600: "#5C5C5C",
          700: "#3F3F3F",
          800: "#262626",
          900: "#161616",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
        "eyebrow": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        prose: "62ch",
        container: "84rem",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
        gutter: "clamp(1.5rem, 5vw, 4rem)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "in-out-expo": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
