
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import sentryVitePlugin from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};

    return defineConfig({
        build: {
            sourcemap: true, // Source map generation must be turned on
        },
        plugins: [
            vue(),
            sentryVitePlugin({
                include: './dist',
                ignore: ['node_modules', 'vite.config.ts'],
                org: process.env.VITE_SENTRY_ORG,
                project: process.env.VITE_SENTRY_PROJECT,
                authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
            }),
        ],
    })
};
