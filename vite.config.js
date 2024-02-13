import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    symfonyPlugin({
      sriAlgorithm: "sha256",
    }),
  ],
//   base: "http://cdn.your-cdn-provider.com",
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.js",
      },
    },
  },
});
