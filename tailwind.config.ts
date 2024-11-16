import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
