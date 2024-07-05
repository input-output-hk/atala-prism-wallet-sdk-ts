/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { getWasmJSContent } from './esbuild.base.mjs';

const isCI = process.env.CI === "true";

function WasmPlugin() {
    return {
        name: 'wasm-plugin',
        resolveId: (source, importer) =>
            source.endsWith('.wasm') ?
                path.resolve(path.dirname(importer), source) :
                null,
        load: (id) => id.endsWith('.wasm') ?
            getWasmJSContent(id) :
            null,
    };
}

const testConfig = {
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
            'src'
        ],
    },
}

export default defineConfig({
    plugins: [
        WasmPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.wasm'],
        mainFields: ['module', 'main'],
    },
    test: {
        ...testConfig,
        environment: 'jsdom',
        include: ['tests/**/*.test.ts']
    },
})