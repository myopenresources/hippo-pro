import { createRouter, createWebHistory } from 'vue-router'
import desktopLayout from './desktop-layout'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...desktopLayout
  ]
})

export default router
