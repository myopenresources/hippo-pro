<template>
  <div class="loading-bar-mask">
    <div class="loading-bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false)

const setVisible = (value: boolean) => {
  visible.value = value
}


defineExpose({
  setVisible,
  visible
})

</script>

<style scoped lang="scss">
@import './LoadingBar.scss';
</style>
