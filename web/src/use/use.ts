import type { App } from 'vue'
import 'virtual:svg-icons-register'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from '@/router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { MainContent } from 'hippo-desktop'
import { DynamicIcon } from 'hippo-module-core'
import {createDynamicRouterGuard} from '../guards/dynamic-router-guard'
import { authGuard } from '@/guards/auth-guard'

const useConfig = {
  //第三方组件
  thirdPartyComponents: [],
  //自定义组件
  customComponents: [
    {
      name: 'MainContent',
      component: MainContent
    },
    {
      name: 'DynamicIcon',
      component: DynamicIcon
    }
  ],
  //自定义指令
  customDirectives: [
    /*{
      name: 'error-src',
      directive: errorSrc
    }*/
  ],
  // 路由守卫
  routerGuards: () => {
    createDynamicRouterGuard(router);
    authGuard(router)
  }
}

/**
 * 使用第三方组件
 * @param app
 */
function useThirdPartyComponents(app: App) {
  useConfig.thirdPartyComponents.forEach((componnet) => {
    app.use(componnet)
  })
}

/**
 *  使用自定义组件
 * @param app  应用根
 */
function useCustomComponent(app: App) {
  useConfig.customComponents.forEach((customComponent: any) => {
    app.component(customComponent.name, customComponent.component)
  })
}

/**
 *  使用自定义指令
 * @param app  应用根
 */
function useCustomDirectives(app: App) {
  useConfig.customDirectives.forEach((customDirective: any) => {
    app.directive(customDirective.name, customDirective.directive)
  })
}

/**
 *  使用图标
 * @param app  应用根
 */
function useIconComponent(app: App) {
  // @ts-ignore
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

/**
 * 使用路由
 * @param app
 */
function useRouter(app: App) {
  app.use(router)
  useConfig.routerGuards()
}

/**
 * 使用store
 * @param app
 */
function useStore(app: App) {
  const pinia = createPinia().use(piniaPluginPersist)
  app.use(pinia)
}

export function useAll(app: App) {
  useRouter(app)
  useStore(app)
  useThirdPartyComponents(app)
  useCustomComponent(app)
  useCustomDirectives(app)
  useIconComponent(app)
}
