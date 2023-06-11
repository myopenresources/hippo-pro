import { createRouter, createWebHistory } from 'vue-router'
import desktopLayout from './desktop-layout'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/Home',
      meta: {
        title: 'root'
      }
    },
    ...desktopLayout
  ]
})

export default router
