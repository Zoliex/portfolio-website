import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router/router.ts'
import LenisVue from 'lenis/vue'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

import '@/assets/index.css'

const app = createApp(App)

app.use(router)
app.use(LenisVue)
app.use(VueViewer)

app.mount('#app')