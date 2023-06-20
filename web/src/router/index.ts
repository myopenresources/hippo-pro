import { createRouter, createWebHistory } from 'vue-router'
import {
  loginRouter
} from "hippo-desktop";
import desktopLayout from './desktop-layout'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/StartMenu',
      meta: {
        title: 'root'
      }
    },
    ...loginRouter,
    ...desktopLayout
  ]
})

export default router
