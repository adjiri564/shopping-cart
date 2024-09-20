import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {  
    globals: true,  
    environment: 'jsdom', // required for React Testing Library  
    setupFiles: './tests/setupTests.js' // adjust the path if necessary  
  }, 
})
