import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    mode: 'development',
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
      },
  plugins: [
    react(),
    createHtmlPlugin({
        minify: true,
        entry: '../src/index.js',
        template: 'public/index.html',
    })],
})