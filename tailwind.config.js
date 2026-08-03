import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        lime: {
          DEFAULT: "#A8E600",
          foreground: "#111111",
        },
        muted: "var(--muted)",
        line: "var(--line)",
        primary: {
          50: "#f7ffe5",
          100: "#ecffc2",
          200: "#d9ff8a",
          300: "#c2f54d",
          400: "#A8E600",
          500: "#A8E600",
          600: "#8bc400",
          700: "#6a9600",
          800: "#55770a",
          900: "#48640f",
          DEFAULT: "#A8E600",
          foreground: "#111111",
        },
        secondary: {
          50: "#F4F5F7",
          100: "#E8EAEE",
          200: "#D8DBE0",
          300: "#B8BDC7",
          400: "#8B929E",
          500: "#5C6370",
          600: "#454B56",
          700: "#333840",
          800: "#1F2329",
          900: "#111111",
          DEFAULT: "#5C6370",
          foreground: "#ffffff",
        },
        terminal: {
          bg: "#F4F5F7",
          text: "#111111",
          dim: "#5C6370",
          accent: "#A8E600",
          alert: "#C23B22",
          line: "#D8DBE0",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#F4F5F7",
            foreground: "#111111",
            primary: {
              DEFAULT: "#A8E600",
              foreground: "#111111",
            },
            focus: "#A8E600",
          },
        },
        dark: {
          colors: {
            background: "#111111",
            foreground: "#F4F5F7",
            primary: {
              DEFAULT: "#A8E600",
              foreground: "#111111",
            },
            focus: "#A8E600",
          },
        },
      },
    }),
  ],
};

module.exports = config;
