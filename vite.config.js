import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Relative assets work on both /Portfolio/ project pages and root Pages deployments.
    build: {
        outDir: 'dist', // Standard Vite output directory
        emptyOutDir: true,
    },
    server: {
        open: true,
    },
})
