import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Système de couleurs corporate strict ---
        // Cinq jetons de marque, seule source de vérité pour tout le site :
        //   ink            texte principal (#0F172A = slate-900)
        //   surface        fond de page (#F8FAFC = slate-50)
        //   surface-white  fond des cartes (#FFFFFF)
        //   accent         couleur de marque unique — liens, CTA, icônes,
        //                  bordures actives, soulignés (#047857 = emerald-700)
        //   accent-badge   USAGE EXCLUSIF : icône des badges de certification
        //                  (#B45309 = amber-700) — nulle part ailleurs
        // Les teintes voisines (accent.dark, accent.light, accent.50…) restent
        // la même couleur à une autre luminosité — pas une couleur différente.
        //
        // Les gris neutres (muted, border) ne sont pas des "couleurs" au sens
        // de cette charte : ils n'ont aucune saturation et servent uniquement
        // à la hiérarchie de texte et aux séparateurs.
        ink: colors.slate[900],
        surface: colors.slate[50],
        'surface-white': '#FFFFFF',
        accent: {
          50: colors.emerald[50],
          100: colors.emerald[100],
          200: colors.emerald[200],
          400: colors.emerald[400], // texte accent lisible sur fonds sombres (surface-dark)
          light: colors.emerald[600],
          DEFAULT: colors.emerald[700],
          dark: colors.emerald[800],
          darker: colors.emerald[900],
        },
        'accent-badge': colors.amber[700],
        muted: colors.slate[600],
        'muted-invert': colors.slate[300],
        border: colors.slate[200],
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // Halo décoratif discret — une seule teinte (accent), deux positions.
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(4,120,87,0.06), transparent 40%), radial-gradient(circle at 80% 0%, rgba(4,120,87,0.05), transparent 35%)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(15,23,42,0.09), 0 2px 8px -2px rgba(15,23,42,0.05)',
        'accent-glow': '0 0 32px -8px rgba(4,120,87,0.30)',
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
