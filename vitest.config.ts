import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [],
    test: {
        env: "jsdom",
        globals: true,
        setupFiles: ['./src/setupTests.ts'],
    },
});