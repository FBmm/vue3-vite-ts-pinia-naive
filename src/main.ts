import { createApp } from 'vue'
import naive from 'naive-ui'

import App from './App.vue'

import { router } from '@/router'
import { store } from '@/store'

import '@/styles/index.scss'

import '../mock'

createApp(App).use(router).use(store).use(naive).mount('#app')
