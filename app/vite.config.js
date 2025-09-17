import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// Nombre del repo para GitHub Pages. Ajusta si cambias el nombre
const repoName = 'portfolio'

export default defineConfig(({ mode }) => {
  return {
    // Para GitHub Pages: https://<usuario>.github.io/<repo>/
    // En desarrollo local base será '/'
    base: mode === 'production' ? `/${repoName}/` : '/',
    plugins: [vue(), vueJsx(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
