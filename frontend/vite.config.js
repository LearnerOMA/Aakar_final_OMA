import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {

      '@': '/src' // Adjust if your "src" directory is different

    }

  },
  server: {
    host: '127.0.0.1'
  }

})
