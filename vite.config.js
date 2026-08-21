import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Only prefix the GitHub Pages subpath when building for that target
  // (set via the GITHUB_PAGES env var in .github/workflows/deploy-pages.yml).
  // Vercel and local dev serve the app at the domain root, so base stays '/'.
  base: process.env.GITHUB_PAGES === 'true' ? '/Benportofolio/' : '/',
  plugins: [react()],
  cacheDir: 'node_modules/.vite_bk',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  server: {
    port: 5173,
    open: true,
  },
})
