import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // Esta línea es clave para despliegues en Vercel
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          radix: ['@radix-ui/react-toast', '@radix-ui/react-dialog', '@radix-ui/react-checkbox'],
          vendor: ['framer-motion', 'clsx', 'lucide-react']
        }
      }
    }
  }
});
