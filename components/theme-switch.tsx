"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Prevents layout shift
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-surface hover:shadow-md transition-all duration-300 group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Sun icon */}
      <svg
        className={`absolute w-4 h-4 text-primary transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 opacity-0 scale-50"
            : "rotate-0 opacity-100 scale-100"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" x2="12" y1="1" y2="3" />
        <line x1="12" x2="12" y1="21" y2="23" />
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
        <line x1="1" x2="3" y1="12" y2="12" />
        <line x1="21" x2="23" y1="12" y2="12" />
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
      </svg>

      {/* Moon icon */}
      <svg
        className={`absolute w-4 h-4 text-primary transition-all duration-300 ${
          theme === "light"
            ? "rotate-90 opacity-0 scale-50"
            : "rotate-0 opacity-100 scale-100"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Background effect */}
      <span className="absolute inset-0 scale-0 rounded-full bg-secondary/20 dark:bg-dark-accent/20 transition-transform duration-300 group-hover:scale-100" />
    </button>
  );
}
