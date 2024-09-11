/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        'arial-black': ['Arial Black', 'sans-serif'],
        'arial-bold': ['Arial Bold', 'sans-serif'],
        'arial-bold-italic': ['Arial Bold Italic', 'sans-serif'],
        'arial-italic': ['Arial Italic', 'sans-serif'],
        'arial-narrow': ['Arial Narrow', 'sans-serif'],
        'arial-narrow-bold': ['Arial Narrow Bold', 'sans-serif'],
        'arial-narrow-bold-italic': ['Arial Narrow Bold Italic', 'sans-serif'],
        'arial-narrow-italic': ['Arial Narrow Italic', 'sans-serif'],
        'arial-rounded': ['Arial Rounded MT Bold', 'sans-serif'],
        'arial-rounded-bold': ['Arial Rounded MT Bold', 'sans-serif'],
        'arial-unicode': ['Arial Unicode MS', 'sans-serif'],
        'avenir': ['Avenir', 'sans-serif'],

      },
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

