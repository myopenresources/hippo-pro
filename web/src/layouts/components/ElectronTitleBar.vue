<template>
  <div class="electron-title-bar">
    <div class="electron-title-bar-left">
      <img class="logo" :src="sysConfig.logo" />
      {{ sysConfig.title }}
    </div>
    <div class="electron-title-bar-right">
      <div class="btn" @click="about">
        <DynamicIcon icon="SvgIconAbout" />
      </div>
      <!--      
        <div class="btn btn-maximize" @click="maximize">
          <DynamicIcon :icon="isMaximized ? 'SvgIconFullScreenExit' : 'FullScreen'" />
        </div>
      -->
      <div class="btn" @click="minimize">
        <DynamicIcon icon="Minus" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSysConfig } from 'hippo-desktop'
import { useElAlertMessageBox } from 'hippo-module-core'
import { DynamicIcon } from 'hippo-module-core'
import { ref } from 'vue'

const sysConfig = useSysConfig()

const isMaximized = ref(false)

const maximize = () => {
  window.electronAPI.maximize()
  isMaximized.value = !isMaximized.value
}

const minimize = () => {
  window.electronAPI.minimize()
}

const about = () => {
  useElAlertMessageBox(
    '河码桌面是一个基于vue3 + vite + element pro + electron + pnpm 创建的monorepo项目！',
    '关于'
  )
}
</script>

<style lang="scss" scoped>
@import './ElectronTitleBar.scss';
</style>
