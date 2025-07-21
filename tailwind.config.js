/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // Custom breakpoints optimized for mobile devices
    screens: {
      'xs': '375px',      // Small phones
      'sm': '640px',      // Larger phones
      'md': '768px',      // Tablets
      'lg': '1024px',     // Small laptops
      'xl': '1280px',     // Desktop
      '2xl': '1536px',    // Large screens
    },
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#1F2937'
        },
        background: {
          light: '#F3F4F6',
          dark: '#111827'
        },
        text: {
          light: '#111827',
          dark: '#F9FAFB'
        },
        accent: '#3B82F6',
        card: {
          light: '#FFFFFF',
          dark: '#374151'
        },
        border: {
          light: '#E5E7EB',
          dark: '#4B5563'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Mobile-friendly spacing
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      // Responsive font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Fluid typography for better mobile scaling
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 6vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 7vw, 4rem)',
      },
      // Touch-friendly minimum sizes
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [
    // Custom plugin for mobile utilities
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
      })
    },
  ],
} 