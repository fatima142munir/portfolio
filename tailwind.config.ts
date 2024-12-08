import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#381951",
        dark: "#F0C1E1",
        light: "#FDDBBB",
        lighest: "#FFF9BF"
      },
    },
  },
  plugins: [],
} satisfies Config;
