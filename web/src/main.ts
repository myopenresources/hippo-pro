import { createApp } from 'vue'
import { useAll } from './use/use'
import App from './App.vue'

import './assets/css/index.scss'


const app = createApp(App)
useAll(app)
app.mount('#app')
