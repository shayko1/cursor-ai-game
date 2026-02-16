import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/wix-openai/v1': {
        target: 'https://www.wixapis.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/wix-openai\/v1/, '/openai/v1'),
      },
    },
  },
})
