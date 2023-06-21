import { createRouter, createWebHashHistory } from 'vue-router'
import { createDynamicRouterGuard } from '../guards/dynamic-router-guard'

import { loginRouter } from 'hippo-desktop'
import desktopLayout from './desktop-layout'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/Login',
      meta: {
        title: 'root'
      }
    },
    ...loginRouter,
    ...desktopLayout
  ]
})

export default router
