
<template>
   <el-config-provider :locale="locale">
      <DesktopConfigProvider :sysConfig="sysConfig">
         <RouterView />
      </DesktopConfigProvider>
   </el-config-provider>
</template>

<script setup lang="ts">
import { DesktopConfigProvider, type SysConfig } from 'hippo-desktop'
import defaultAvatar from '@/assets/img/default-avatar.png'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue';
const locale = ref(zhCn)

const sysConfig: SysConfig = {
  defaultStyleTheme: 'light',
  defaultTheme: 'lightBlue',
  logo: "",
  title: '桌面',
  loginPath: '/Login',
  homePath: '/Home',
  defaultAvatar: defaultAvatar
}

</script>
     

<style scoped lang="scss"></style>