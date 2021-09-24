import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

app.config.unwrapInjectedRef = true;

app.mount('#app')
