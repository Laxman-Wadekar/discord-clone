import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
    base:"/discord-clone/",
    css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    
  }
})