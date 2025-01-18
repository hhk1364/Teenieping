import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import {fileURLToPath}  from 'url';

// https://vite.dev/config/

// __dirname 대체 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
})
