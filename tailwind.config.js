/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // --- Executive Luxury Design System ---
        night: {
          DEFAULT: '#0B0F17', // fond principal
          soft: '#0F1420',
          card: '#1E293B', // cartes bleu nuit
          border: '#28344A',
        },
        gold: {
          DEFAULT: '#F59E0B', // accent finance / trading
          light: '#FBBF24',
          dark: '#B45309',
        },
        emerald: {
          DEFAULT: '#10B981', // accent impact humanitaire
          light: '#34D399',
          dark: '#047857',
        },
        offwhite: '#F8FAFC', // texte principal
        muted: '#94A3B8', // texte secondaire
        rouge: {
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
          bordeaux: '#7F1D1D',
          light: '#FCA5A5',
        },
        teal: {
          DEFAULT: '#14B8A6',
          dark: '#0D9488',
          light: '#5EEAD4',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(245,158,11,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(16,185,129,0.10), transparent 35%)',
        'gold-emerald': 'linear-gradient(120deg, #F59E0B 0%, #10B981 100%)',
        'gold-rouge': 'linear-gradient(120deg, #F59E0B 0%, #EF4444 100%)',
        'teal-emerald': 'linear-gradient(120deg, #14B8A6 0%, #10B981 100%)',
        'rouge-bordeaux': 'linear-gradient(120deg, #EF4444 0%, #7F1D1D 100%)',
      },
      boxShadow: {
        card: '0 8px 30px -10px rgba(0,0,0,0.5)',
        'gold-glow': '0 0 40px -8px rgba(245,158,11,0.45)',
        'emerald-glow': '0 0 40px -8px rgba(16,185,129,0.45)',
        'rouge-glow': '0 0 40px -8px rgba(239,68,68,0.45)',
        'teal-glow': '0 0 40px -8px rgba(20,184,166,0.45)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
}
