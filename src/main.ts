import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router/router.ts'
import LenisVue from 'lenis/vue'

import '@/assets/index.css'

const app = createApp(App)

app.use(router)
app.use(LenisVue)

app.mount('#app')