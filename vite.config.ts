/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', {}]]
      }
    }),
    tsconfigPaths(),
    tailwindcss(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src --max-warnings=0',
        useFlatConfig: true
      },
      overlay: {
        initialIsOpen: false
      }
    }),
    inspect() // Visit http://localhost:5173/__inspect/
  ]
})
