import type { Router } from 'vue-router'
import { UserStoreUtil } from 'hippo-desktop/utils'
import { dynamicRouterList, whlteList } from '@/config/app-config'

let isLoadDynamicRouter = false
const modules: any = {}
let moduleKeys: string[] = []

const initModule = () => {
  dynamicRouterList.forEach((menule) => {
    Object.assign(modules, menule)
  })
  moduleKeys = Object.keys(modules)
}

const isWhlteList = (path: string) => {
  return whlteList.find((item) => {
    return item === path
  })
}

const getModule = (path: string) => {
  let routerPath = null
  for (let i = 0; i < moduleKeys.length; i++) {
    const routerPathStr = moduleKeys[i].split('views/')
    if (routerPathStr[1] === path) {
      routerPath = modules[moduleKeys[i]]
      break
    }
  }
  return routerPath
}

const addChildrenRoute = (router: Router, routers: any[], parent: string) => {
  for (let item of routers) {
    router.addRoute(parent, {
      ...item,
      component: getModule(item.component)
    })

    if (item.children && item.children.length > 0) {
      addChildrenRoute(router, item.children, item.name)
    }
  }
}

const addRoute = (router: Router, routers: any[]) => {
  for (let item of routers) {
    if (item.isLayout) {
      addChildrenRoute(router, item.children, item.name)
    } else {
      router.addRoute('root', {
        ...item,
        component: getModule(item.component)
      })
    }
  }
}

export function createDynamicRouterGuard(router: Router) {
  initModule()
  const routers = UserStoreUtil.getRouters()
  router.beforeEach((to, from, next) => {
    if (isWhlteList(to.path) || isLoadDynamicRouter) {
      next()
    } else {
      if (routers && routers.length) {
        addRoute(router, routers)
        isLoadDynamicRouter = true
        next({ ...to, replace: true })
      } else {
        //跳到 404，但要判断是里面的404还是layout的404
        next('/notFound')
      }
    }
  })
}
