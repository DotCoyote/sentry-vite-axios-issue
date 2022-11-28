import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import * as Sentry from '@sentry/vue';

const app = createApp(App);

Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',
    debug: import.meta.env.VITE_SENTRY_DEBUG === 'true',
    environment: import.meta.env.VITE_SENTRY_ENV || 'no-env',
    tracesSampleRate: 1.0,
    release: import.meta.env.VITE_SENTRY_RELEASE
});
app.mount('#app');
