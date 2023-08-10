<template>
  <div class="desktop-layout" :style="desktopLayoutStyle">
    <div class="desktop-layout-inner" :style="desktopLayoutInnerStyle">
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
import { ThemeStoreUtil } from '../../utils'
import { useEventBusOn, useEventBusRemove } from 'hippo-module-core/hooks'

const desktopLayoutStyle = ref({
  backgroundImage: `url(${bgImg})`
})

const desktopLayoutInnerStyle = ref({
  backdropFilter: `blur(${ThemeStoreUtil.getThemeBgBlur()}px)`
})

const updateDesktopBg = (bgUrl: string) => {
  desktopLayoutStyle.value.backgroundImage = `url(${bgUrl})`
}

const updateDesktopBlur = (bgBlur: number) => {
  desktopLayoutInnerStyle.value.backdropFilter = `blur(${bgBlur}px)`
}

useEventBusOn('updateDesktopBg', updateDesktopBg)
useEventBusOn('updateDesktopBlur', updateDesktopBlur)

onMounted(() => {
  UserApi.getUserDesktopBg().then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      desktopLayoutStyle.value.backgroundImage = `url(${res.data.bgUrl})`
    }
  })
})

onUnmounted(() => {
  useEventBusRemove('updateDesktopBg', updateDesktopBg)
  useEventBusRemove('updateDesktopBlur', updateDesktopBlur)
})
</script>

<style scoped lang="scss">
@import './DesktopLayout.scss';
</style>
