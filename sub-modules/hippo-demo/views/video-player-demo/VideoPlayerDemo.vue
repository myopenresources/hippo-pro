<template>
  <MainContent>
    <vue3VideoPlay
      width="100%"
      title="钢铁侠"
      :src="options.src"
      :poster="options.poster"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    />
  </MainContent>
</template>

<script setup lang="ts">
import 'vue3-video-play/dist/style.css'
import vue3VideoPlay from 'vue3-video-play'

import { reactive } from 'vue'

const options = reactive({
  src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4', //视频源
  poster: '' //封面
})

const onPlay = (ev: Event) => {
  console.log('播放')
}
const onPause = (ev: Event) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev: Event) => {
  console.log(ev, '时间更新')
}
const onCanplay = () => {
  console.log('可以播放')
}
</script>

<style scoped lang="scss">
:deep(.d-player-wrap.web-full-screen) {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  border-radius: var(--main-content-radius);
}
</style>
