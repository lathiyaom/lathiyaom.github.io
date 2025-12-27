import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Portfolio/', // Set base to /<repo_name>/ for GitHub Pages project site
    build: {
        outDir: 'dist', // Standard Vite output directory
        emptyOutDir: true,
    },
    server: {
        open: true,
    },
})
