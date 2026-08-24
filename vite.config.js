import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo is a "username.github.io" user site, so it is served from
// the domain root — base stays '/'. If you ever rename this to a
// project repo (e.g. github.com/you/portfolio), change base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
