const theme = {
  colors: {
    bg: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#f1f3f4',
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
      tertiary: '#9aa0a6',
    },
    glass: {
      bg: 'rgba(255,255,255,0.7)',
      border: 'rgba(0,0,0,0.08)',
      bgHover: 'rgba(0,0,0,0.04)',
    },
    accent: {
      blue: '#4285F4',
      red: '#EA4335',
      yellow: '#FBBC05',
      green: '#34A853',
      gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
    },
  },
  typography: {
    display: 'clamp(3.5rem, 8vw, 6rem)',
    h1: 'clamp(2.5rem, 5vw, 4rem)',
    h2: 'clamp(1.5rem, 3vw, 2rem)',
    body: '1.125rem',
  },
  animation: {
    ease: [0.22, 1, 0.36, 1],
    spring: { stiffness: 100, damping: 20 },
    duration: { fast: 0.3, normal: 0.6, slow: 1.0 },
  },
  blur: {
    glass: '20px',
    heavy: '40px',
  },
};

export default theme;
