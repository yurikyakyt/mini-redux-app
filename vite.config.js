import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: "./",
    publicDir: "public",
    server: {
        watch: {
            usePolling: true,
        },
        open: true,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@core': path.resolve(__dirname, './src/core'),
            '@router': path.resolve(__dirname, './src/router'),
            '@store': path.resolve(__dirname, './src/store'),
            '@controller': path.resolve(__dirname, './src/controller'),
            '@model': path.resolve(__dirname, './src/model'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
});
