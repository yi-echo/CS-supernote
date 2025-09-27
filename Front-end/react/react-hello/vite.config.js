import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    open:true,
    proxy:{
      '/api':{
        target:'http://localhost:9091',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})
