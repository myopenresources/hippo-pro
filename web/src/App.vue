<template>
  <el-config-provider :locale="locale">
    <DesktopConfigProvider :sysConfig="sysConfig" :iconSelectConfig="iconSelectConfig">
      <RouterView />
    </DesktopConfigProvider>
  </el-config-provider>
</template>

<script setup lang="ts">
import { DesktopConfigProvider, type SysConfig } from 'hippo-desktop'
import defaultAvatar from '@/assets/img/default-avatar.png'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'
import registerHttpInterceptor from './interceptors/http-interceptor'
import router from './router'
import { LogUtil, type IconSelectConfig } from 'hippo-module-core'
const locale = ref(zhCn)

const sysConfig: SysConfig = {
  defaultThemeScheme: 'light-theme-scheme',
  defaultStyleTheme: 'light',
  defaultTheme: '#409eff',
  logo: '',
  title: '桌面',
  loginPath: '/Login',
  homePath: '/Home',
  defaultAvatar: defaultAvatar
}

const iconSelectConfig: IconSelectConfig = {
  svgPath: [
    import.meta.glob('../sub-modules/hippo-desktop/assets/icon/app'),
    import.meta.glob('./sub-modules/hippo-bpmn/assets/icon/app')
  ]
}

registerHttpInterceptor(router)

LogUtil.info({
  moduleName: 'app',
  msg: '欢迎使用Hippo pro，下载：https://gitee.com/jani/hippo-pro'
})
</script>

<style scoped lang="scss"></style>
