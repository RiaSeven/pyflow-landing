import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    headers: {
      // Cette ligne autorise les fenêtres pop-up à communiquer avec l'app
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
})