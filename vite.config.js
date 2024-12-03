import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/issafulldev.github.io/ReactKasa/',
  server: {
    host: '0.0.0.0', // Permet d'accepter des connexions depuis n'importe quelle adresse IP
    port: 3000 // Le port que tu souhaites utiliser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Créer un alias '@' pour le dossier 'src'
    },
  },
})
