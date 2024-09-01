import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        charcoal: "#333333", // For text, headers, and primary elements.
        blue: "#6AB5FF", // For buttons, links, and highlights.
        gray: "#F0F0F0", // For borders, backgrounds, and subtle elements.
        navy: "#0056A0", // Accent Color for Logo.
      },

      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
