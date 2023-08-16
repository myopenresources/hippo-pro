<template>
  <div class="default-layout">
    <ElectronTitleBar/>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import ElectronTitleBar from '../components/ElectronTitleBar.vue'
</script>

<style lang="scss" scoped>
@import './DefaultLayout.scss';
</style>
