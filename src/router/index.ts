import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/Table.vue'),
      },
    ],
  },
  { path: '/login', component: () => import('@/views/login/index.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
