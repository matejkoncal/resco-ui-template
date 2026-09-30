import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Offline HTML can be deployed under any project subfolder.
  base: './',
});
