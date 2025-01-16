/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        encode: ["Encode Sans Expanded", ...fontFamily.sans],
      },
      colors: {
        birdy: {
          100: '#f4f2ff',
          200: '#b2a8ff',
          300: '#695ccd',
          500: '#1f1283',
          900: '#1c1930'
        }
      }
    },
  },
  plugins: [],
}

