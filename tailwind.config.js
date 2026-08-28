/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Light Executive Design System ---
        // Une couleur de marque (or), un accent de preuve (émeraude), des neutres.
        // Le rouge est réservé aux alertes, erreurs et urgences — jamais décoratif.
        night: {
          DEFAULT: '#FFFFFF', // fond principal — blanc pur
          soft: '#F8FAFC',    // fond secondaire — très léger
          card: '#FFFFFF',    // cartes blanches
          border: '#E2E8F0',  // bordures légères (slate-200)
          deep: '#0F172A',    // fond des surfaces sombres (navbar, footer)
        },
        gold: {
          DEFAULT: '#B45309', // amber-700 — 5.0:1 sur blanc, 4.5:1 avec texte blanc
          light: '#D97706',   // amber-600 — usage décoratif / grandes tailles
          dark: '#78350F',    // amber-900 — texte sur fonds teintés clairs
        },
        emerald: {
          DEFAULT: '#047857', // emerald-700 — 5.5:1 avec texte blanc
          light: '#059669',
          dark: '#065F46',
        },
        offwhite: '#0F172A',  // texte principal — navy foncé
        muted: '#475569',     // texte secondaire — slate-600 (7.0:1 sur blanc)
        'muted-invert': '#CBD5E1', // texte secondaire sur fond sombre (slate-300)
        rouge: {
          DEFAULT: '#B91C1C', // red-700 — alertes uniquement
          dark: '#991B1B',
          bordeaux: '#7F1D1D',
          light: '#FCA5A5',
        },
        teal: {
          DEFAULT: '#0F766E', // teal-700 — 5.3:1 avec texte blanc
          dark: '#115E59',
          light: '#5EEAD4',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(180,83,9,0.06), transparent 40%), radial-gradient(circle at 80% 0%, rgba(4,120,87,0.05), transparent 35%)',
        // Dégradés CTA — validés WCAG AA avec du texte blanc (5.0:1 à 5.5:1)
        'gold-emerald': 'linear-gradient(120deg, #B45309 0%, #047857 100%)',
        'gold-rouge': 'linear-gradient(120deg, #B45309 0%, #B91C1C 100%)',
        'teal-emerald': 'linear-gradient(120deg, #0F766E 0%, #047857 100%)',
        'rouge-bordeaux': 'linear-gradient(120deg, #B91C1C 0%, #7F1D1D 100%)',
        'blue-teal': 'linear-gradient(120deg, #1D4ED8 0%, #0F766E 100%)',
        // Dégradé décoratif clair — réservé aux titres de grande taille (>= 24px)
        'gold-emerald-bright': 'linear-gradient(120deg, #D97706 0%, #059669 100%)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(0,0,0,0.09), 0 2px 8px -2px rgba(0,0,0,0.05)',
        'gold-glow': '0 0 32px -8px rgba(180,83,9,0.30)',
        'emerald-glow': '0 0 32px -8px rgba(4,120,87,0.30)',
        'rouge-glow': '0 0 32px -8px rgba(185,28,28,0.30)',
        'teal-glow': '0 0 32px -8px rgba(15,118,110,0.30)',
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
      minHeight: {
        tap: '44px', // cible tactile minimale (WCAG 2.5.5)
      },
      minWidth: {
        tap: '44px',
      },
    },
  },
  plugins: [],
}
