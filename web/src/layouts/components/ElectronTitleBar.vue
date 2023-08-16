<template>
  <div class="electron-title-bar">
    <div class="electron-title-bar-left">
      <img :src="sysConfig.logo"/>
      {{ sysConfig.title }}
    </div>
    <div class="electron-title-bar-right"></div>
  </div>
</template>

<script setup lang="ts">
import { useSysConfig } from 'hippo-desktop'

const sysConfig = useSysConfig()
</script>

<style lang="scss" scoped>
@import './ElectronTitleBar.scss';
</style>
