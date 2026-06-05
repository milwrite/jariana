import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // served from https://milwrite.github.io/jariana-gallery/ in production
  base: command === 'build' ? '/jariana-gallery/' : '/',
  plugins: [react()],
  server: { port: 5173, open: true },
}))
