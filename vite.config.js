import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'ui-icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  server: {
    proxy: {
      // API requests → Express (DO NOT rewrite)
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },

      // Uploaded files → Express static folder
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
