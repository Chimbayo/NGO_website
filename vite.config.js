import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true, // Enable source maps for debugging
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs in production
        drop_debugger: false,
      },
    },
  },
})
