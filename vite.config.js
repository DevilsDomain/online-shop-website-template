import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the directory where Vite will look for your source files
  root: './',

  // Specify the directory where Vite will output the built files
  build: {
    outDir: './dist',
  },

  // Configure the development server
  server: {
    // Configure the port for the development server
    port: 3000,
  },
});
