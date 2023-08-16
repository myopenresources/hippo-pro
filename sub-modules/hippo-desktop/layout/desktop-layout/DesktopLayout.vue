<template>
  <div class="desktop-layout" :style="desktopLayoutStyle">
    <div class="desktop-layout-inner">
      <DesktopToolbar />
      <DesktopMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopToolbar from '../components/DesktopToolbar.vue'
import DesktopMain from '../components/DesktopMain.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { UserApi } from '../../api'
import type { RequestResultData } from 'hippo-module-core/types'
import type { UserDesktopBg } from '../../types'
import bgImg from '../../assets/img/desktop-layout/light-bg.jpg'
import { useEventBusOn, useEventBusRemove } from 'hippo-module-core/hooks'
import ThemeUtil from '../../utils/theme-util'

const desktopLayoutStyle = ref({
  backgroundImage: `url(${bgImg})`
})


const updateDesktopBg = (bgUrl: string) => {
  desktopLayoutStyle.value.backgroundImage = `url(${bgUrl})`
}

const initDesktopBg = () => {
  const themeScheme = ThemeUtil.getThemeSchemeObj()
  if (themeScheme) {
    desktopLayoutStyle.value.backgroundImage = `url(${themeScheme.bg})`
    return
  }

  UserApi.getUserDesktopBg().then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      desktopLayoutStyle.value.backgroundImage = `url(${res.data.bgUrl})`
    }
  })
}



useEventBusOn('updateDesktopBg', updateDesktopBg)

onMounted(() => {
  initDesktopBg()
})

onUnmounted(() => {
  useEventBusRemove('updateDesktopBg', updateDesktopBg)
})
</script>

<style scoped lang="scss">
@import './DesktopLayout.scss';
</style>
