/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors based on the design's aesthetic
        primaryDark: '#0A0A0A', // Very dark background
        secondaryDark: '#1A1A1A', // Slightly lighter dark for cards/sections
        textLight: '#E0E0E0',   // Light grey for main text
        white: '#FFFFFF',       // Pure white for prominent text
        accentPurple: '#7B42F2', // Start of gradient
        accentPink: '#FF007F',   // End of gradient
      },
      fontFamily: {
        // Suggesting 'Inter' for a modern sans-serif look
        // You'd import this from Google Fonts or similar
        sans: ['Inter', 'sans-serif'],
        // You can add a serif font if you prefer (e.g., 'Merriweather')
        // serif: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}