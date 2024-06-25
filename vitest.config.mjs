/// <reference types="vitest" />
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

const isCI = process.env.CI === "true";

export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: { format: { comments: 'all' } },
    },
    test: {
        setupFiles: ['./tests/setup.ts'],
        reporters: ['verbose'],
        coverage: {
            provider: 'istanbul',
            reporter: isCI ? ['json-summary'] : ['json-summary', "html"],
            thresholds: {
                branches: 100,
                functions: 100,
                lines: 100,
                statements: 100
            },
            include: [
                'src',
                'generated'
            ],
        },

    }
})
