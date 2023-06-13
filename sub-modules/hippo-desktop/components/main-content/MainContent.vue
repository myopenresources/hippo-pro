<template>
  <div class="main-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { MainContentProps } from '../../props/main-content-props';

defineProps(MainContentProps)
</script>

<style scoped lang="scss">
@import './MainContent.scss';
</style>
