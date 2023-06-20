
import type { Router } from "vue-router";
import { UserStoreUtil } from "../utils";
const whlteList = ['/Login', '/notFound', '/StartMenu']
let isLoadDynamicRouter = false;
// @ts-ignore
const modules = import.meta.glob('../views/*/*.vue')

const isWhlteList = (path: string) => {
    return whlteList.find(item => {
        return item === path
    })
}


const addChildrenRoute = (router: Router, routers: any[], parent: string) => {
    for (let item of routers) {
        router.addRoute(parent, {
            ...item,
            component: () => import(`../views/${item.component}`)
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
            router.addRoute("root", {
                ...item,
                component: () => modules[`../views/${item.component}`]
            })
        }
    }
}

export function createDynamicRouterGuard(router: Router) {
    const routers = UserStoreUtil.getRouters()
    router.beforeEach((to, from, next) => {
        console.info(isLoadDynamicRouter)
        if (isWhlteList(to.path) || isLoadDynamicRouter) {
            console.info('=====')
            next()
        } else {
            console.info('====2=')
            if (routers && routers.length) {
                console.info('===')
                addRoute(router, routers)
                isLoadDynamicRouter = true;
                console.info(routers)
                next({ ...to, replace: true })
            } else {
                //跳到 404，但要判断是里面的404还是layout的404
                next('/notFound')
            }
        }
    })
}


