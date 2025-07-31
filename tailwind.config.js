/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /(from|via|to)-(primary|dark|accent|teal|light)(-\d{2})?/,
      variants: ['hover', 'focus'],
    },
    // Para nombres de fondos personalizados
    'bg-cyber-gradient',
    'bg-accent-teal',
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D5182E',
        dark: {
          DEFAULT: '#1E1E1E',
          90: '#1E1E1EE6', // 90% opacity
          80: '#1E1E1ECC',
          50: '#1E1E1E80',
        },
        darkAlt: '#1E1E1D',
        secondary: '#E76B97',
        accent: {
          DEFAULT: '#E7427E',
          90: '#E7427EE6',
        },
        teal: {
          DEFAULT: '#08C4D6',
          neon: '#08C4D6',
          90: '#08C4D6E6',
        },
        light: '#BEB6BE',
        neon: '#08C4D6',
        fuchsia: '#E7427E',
        pink: '#E76B97',
        neonYellow: '#DAFF00',
        graylight: '#BEB6B2',
      },
      fontFamily: {
        'mochiy': ['"Mochiy Pop One"', 'sans-serif'],
        'genos': ['Genos', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #E7427E 0%, #1E1E1D 50%, #08C4D6 100%)',
        'accent-teal': 'linear-gradient(90deg, #E7427E 0%, #08C4D6 100%)',
      },
      opacity: {
        '90': '0.9',
        '80': '0.8',
      },
    },
  },
  plugins: [],
    extend: {
      boxShadow: {
        'glow-neon': '0 0 15px #D5182E, 0 0 30px #08C4D6',
      }
    }
  
}
