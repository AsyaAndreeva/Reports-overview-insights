/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Dark background
        surface: "#18181b",    // Card background
        primary: "#ea580c",    // Orange
        muted: "#71717a",      // Grey text
      }
    },
  },
  plugins: [],
}