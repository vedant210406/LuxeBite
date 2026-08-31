/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A165',
          light: '#E5C387',
          dark: '#A37F46',
          hover: '#D4AF37',
          glow: 'rgba(200, 161, 101, 0.25)'
        },
        dark: {
          DEFAULT: '#0D0D0D',
          bg: '#0A0A0A',
          card: '#161616',
          elevated: '#1F1F1F',
          border: '#282828'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(200, 161, 101, 0.2)',
        'gold-glow-lg': '0 0 40px rgba(200, 161, 101, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.8)'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C387 0%, #C8A165 50%, #A37F46 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(22, 22, 22, 0.8) 0%, rgba(13, 13, 13, 0.95) 100%)'
      }
    },
  },
  plugins: [],
}
