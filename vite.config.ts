import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~types': path.resolve(__dirname, './src/types'),
      '~components': path.resolve(__dirname, './src/components'),
      '~features': path.resolve(__dirname, './src/features'),
    },
  },
  server: {
    host: true, // Allow external connections (needed for localtunnel)
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Use HTTPS port for localtunnel
      protocol: 'wss', // WebSocket Secure for tunnels
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  publicDir: 'public',
  assetsInclude: ['images/**/*'],
})
