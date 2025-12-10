import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    viteReact(),
  ],
  // Uncommenting this fixes the issue
  // resolve: {
  //   alias: [
  //     {
  //       find: "use-sync-external-store/shim/index.js",
  //       replacement: "react",
  //     },
  //     {
  //       find: "cookie",
  //       replacement: "cookie-es",
  //     },
  //   ]
  // }
})
