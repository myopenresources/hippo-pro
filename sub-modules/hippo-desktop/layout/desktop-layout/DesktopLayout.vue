<template>
  <div class="desktop-layout" :style="desktopLayoutStyle">
    <div class="desktop-layout-inner">
      <DesktopToolbar @update-desktop-bg="updateDesktopBg" />
      <DesktopMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopToolbar from '../components/DesktopToolbar.vue'
import DesktopMain from '../components/DesktopMain.vue'
import { onMounted, ref } from 'vue'
import { UserApi } from '../../api'
import type { RequestResultData } from 'hippo-module-core/types'
import type { UserDesktopBg } from '../../types'
import bgImg from '../../assets/img/desktop-layout/bg.jpg'

const desktopLayoutStyle = ref({
  backgroundImage: `url(${bgImg})`
})

const updateDesktopBg = (bgUrl: string) => {
  desktopLayoutStyle.value.backgroundImage = `url(${bgUrl})`
}

onMounted(() => {
  UserApi.getUserDesktopBg().then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      desktopLayoutStyle.value.backgroundImage = `url(${res.data.bgUrl})`
    }
  })
})
</script>

<style scoped lang="scss">
@import './DesktopLayout.scss';
</style>
