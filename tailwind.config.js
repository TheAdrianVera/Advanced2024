/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        advancedNavyBlue: '#003d68',
        advancedLightBlue: '#5fa3d9',
        advancedDarkBlue: '#002947',
        advancedGrey: '#c9cacc',
        advancedBlue: '#4f97e8',
        advancedDarkGrey: '#6b6b6b',
        advancedMutedWhite: '#dee5f2',
      }
    },
  },
  plugins: [],
}

