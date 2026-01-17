/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", 
        surface: "#18181b",    
        primary: "#ea580c",    
        muted: "#71717a",      
      }
    },
  },
  plugins: [],
}