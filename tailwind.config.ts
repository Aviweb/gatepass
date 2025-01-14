import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkOrange: "#ffbc00",
      },
      padding: {
        customPadding: "100px", // Custom padding value (5.5 represents 1.375rem)
      },
    },
  },
  plugins: [],
} satisfies Config;
