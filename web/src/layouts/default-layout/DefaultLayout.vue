<template>
  <div class="default-layout">
    <ElectronTitleBar/>
    <RouterView class="default-layout-router" style="height: calc(100% - 26px);"/>
  </div>
</template>

<script setup lang="ts">
import ElectronTitleBar from '../components/ElectronTitleBar.vue'
</script>

<style lang="scss" scoped>
@import './DefaultLayout.scss';
</style>
