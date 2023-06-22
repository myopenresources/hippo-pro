import { UserStoreUtil } from 'hippo-desktop'
import { useElErrorMessage } from 'hippo-module-core'
import type { Router } from 'vue-router'

export function authGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    if ((undefined != to.meta.auth && to.meta.auth === false) || UserStoreUtil.getToken()) {
      next()
    } else {
      useElErrorMessage('用户登录过期或者未登录，请重新登录！')
      next({
        replace: true,
        path: '/Login'
      })
    }
  })
}
