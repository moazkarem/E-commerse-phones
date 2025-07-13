import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom", 
    coverage: {
      provider: 'v8', 
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html'],
      include: ['src/Components/**/*.{js,jsx}'], 
    },
  },
});
