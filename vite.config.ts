import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE env var to configure base for GitHub project pages.
// For user pages (username.github.io): use './' or '/'
// For project pages (username.github.io/repo-name): use '/repo-name/'
export default defineConfig({
  base: process.env.VITE_BASE || '/portfolio/',
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
