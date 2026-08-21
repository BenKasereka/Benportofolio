import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Benportofolio/',
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
