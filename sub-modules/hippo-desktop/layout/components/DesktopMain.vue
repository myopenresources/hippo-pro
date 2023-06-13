<template>
  <div class="desktop-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDesktopLayoutStore } from '../../stores'

const useDesktopLayout = useDesktopLayoutStore()

const cachedViews = computed(() => {
  return useDesktopLayout.getCachedViews
})
</script>

<style scoped lang="scss">
@import './DesktopMain.scss';
</style>
