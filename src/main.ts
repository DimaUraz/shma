import { createApp } from 'vue'

import App from './app/App.vue'
import { router } from './app/route/router.ts'
import './style.scss'

createApp(App).use(router).mount('#app')
