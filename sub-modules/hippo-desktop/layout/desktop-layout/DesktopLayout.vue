<template>
    <div class="desktop-layout">
        <div class="desktop-layout-inner">
            <DesktopMain />
            <DesktopToolbar />
        </div>
    </div>
</template>

<script setup lang="ts">
import DesktopToolbar from '../components/DesktopToolbar.vue'
import DesktopMain from '../components/DesktopMain.vue'
</script>

<style scoped lang="scss">
@import './DesktopLayout.scss';
</style>