/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        surface: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          DEFAULT: '#4285F4',
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3.5rem, 8vw, 6rem)',
        'h1': 'clamp(2.5rem, 5vw, 4rem)',
        'h2': 'clamp(1.5rem, 3vw, 2rem)',
        'body': '1.125rem',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
        'gradient-accent-reverse': 'linear-gradient(135deg, #34A853 0%, #4285F4 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 80%, rgba(66,133,244,0.1) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(52,168,83,0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(66,133,244,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(52,168,83,0.3)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.glass': {
          'background': 'rgba(255,255,255,0.7)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(0,0,0,0.08)',
        },
        '.glass-strong': {
          'background': 'rgba(255,255,255,0.85)',
          'backdrop-filter': 'blur(40px)',
          '-webkit-backdrop-filter': 'blur(40px)',
          'border': '1px solid rgba(0,0,0,0.1)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.border-gradient': {
          'border-image': 'linear-gradient(135deg, #4285F4, #34A853) 1',
        },
      })
    },
  ],
}
