import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/position': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
      '/move': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
});