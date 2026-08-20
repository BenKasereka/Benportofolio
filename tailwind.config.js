/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Light Executive Design System ---
        night: {
          DEFAULT: '#F8FAFC', // fond principal — blanc cassé
          soft: '#EFF6FF',    // fond secondaire — bleu très clair
          card: '#FFFFFF',    // cartes blanches
          border: '#CBD5E1',  // bordures légères (slate-300)
        },
        gold: {
          DEFAULT: '#D97706', // amber-600 — lisible sur fond clair
          light: '#F59E0B',
          dark: '#92400E',
        },
        emerald: {
          DEFAULT: '#059669', // emerald-600 — lisible sur fond clair
          light: '#10B981',
          dark: '#047857',
        },
        offwhite: '#0F172A',  // texte principal — navy foncé
        muted: '#64748B',     // texte secondaire — slate-500
        rouge: {
          DEFAULT: '#DC2626',
          dark: '#991B1B',
          bordeaux: '#7F1D1D',
          light: '#FCA5A5',
        },
        teal: {
          DEFAULT: '#0D9488',
          dark: '#0F766E',
          light: '#5EEAD4',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(217,119,6,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(5,150,105,0.07), transparent 35%)',
        'gold-emerald': 'linear-gradient(120deg, #D97706 0%, #059669 100%)',
        'gold-rouge': 'linear-gradient(120deg, #D97706 0%, #DC2626 100%)',
        'teal-emerald': 'linear-gradient(120deg, #0D9488 0%, #059669 100%)',
        'rouge-bordeaux': 'linear-gradient(120deg, #DC2626 0%, #7F1D1D 100%)',
        'blue-teal': 'linear-gradient(120deg, #3B82F6 0%, #0D9488 100%)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0,0,0,0.09), 0 2px 8px -2px rgba(0,0,0,0.05)',
        'gold-glow': '0 0 32px -8px rgba(217,119,6,0.30)',
        'emerald-glow': '0 0 32px -8px rgba(5,150,105,0.30)',
        'rouge-glow': '0 0 32px -8px rgba(220,38,38,0.30)',
        'teal-glow': '0 0 32px -8px rgba(13,148,136,0.30)',
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
