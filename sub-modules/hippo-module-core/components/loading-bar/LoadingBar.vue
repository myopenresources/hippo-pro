<template>
  <div class="loading-bar-mask" v-show="visible">
    <div class="loading-bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LoadingBar } from '../../types';

const visible = ref(false)

const setVisible = (value: boolean) => {
  visible.value = value
}

const open = () => {
  setVisible(true)
}

const setOptions = (config: LoadingBar, resolve: (value: void | PromiseLike<void>) => void) => {
  resolve()
}


const close = () => {
  setVisible(false)
}


defineExpose({
  setOptions,
  open,
  close,
  visible
})

</script>

<style scoped lang="scss">
@import './LoadingBar.scss';
</style>
