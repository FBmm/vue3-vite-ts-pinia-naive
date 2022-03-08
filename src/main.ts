import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

import naive from '@/plugins/naive-ui'
import { router } from '@/router'
import { store } from '@/store'

import '../mock'

createApp(App).use(router).use(store).use(naive).mount('#app')
