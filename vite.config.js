import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  base: '/',  // Not '/hosung-kim11.github.io/' since this is a user/org site
})
