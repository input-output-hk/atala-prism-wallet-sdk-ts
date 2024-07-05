/// <reference types="vitest" />
import { defineConfig } from 'vite'
import fs from 'fs'

const isCI = process.env.CI === "true";

function customWasmPlugin() {
    return {
        name: 'custom-wasm-plugin',
        resolveId(source, importer) {
            if (source === "jwe-wasm") {
                debugger;
            }
            if (source.endsWith('.wasm')) {
                return path.resolve(path.dirname(importer), source);
            }
            return null;
        },
        load(id) {
            if (id === "jwe-wasm") {
                debugger;
            }
            if (id.endsWith('.wasm')) {
                const wasmBinary = fs.readFileSync(id);
                const base64 = Buffer.from(wasmBinary).toString('base64');
                return `export default Buffer.from("${base64}", "base64");`;
            }
            return null;
        },
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
        customWasmPlugin(),
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