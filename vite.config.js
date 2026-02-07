import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'lsutigerracing.github.io',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  }
})
