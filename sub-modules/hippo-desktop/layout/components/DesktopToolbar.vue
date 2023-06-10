<template>
    <div class="desktop-toolbar">
        <div class="desktop-toolbar-inner">
            <div class="desktop-toolbar-inner-start-menu">
                <DynamicIcon icon="SvgIconStartMenu" />
            </div>
            <el-input v-model="keywork" :prefix-icon="Search" clearable class="desktop-toolbar-inner-search-box"
                placeholder="搜索" />
            <div class="desktop-toolbar-inner-center">
                <div class="desktop-toolbar-inner-center-divider"></div>
                <div class="desktop-toolbar-inner-center-tabs"></div>
                <div class="desktop-toolbar-inner-center-divider"></div>
            </div>
            <div class="desktop-toolbar-inner-right">
                 <div class="desktop-toolbar-inner-right-item">
                    <DynamicIcon icon="FullScreen" />
                 </div>
                <div class="desktop-toolbar-inner-right-item">
                    <DynamicIcon icon="Setting" />
                </div>
                <div class="desktop-toolbar-inner-right-item">
                    <DynamicIcon icon="Bell" />
                </div>
                <div class="desktop-toolbar-inner-right-time">
                    <div class="time">11:26:59</div>
                    <div class="date">2023-06-10</div>
                </div>
                <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DynamicIcon } from 'hippo-module-core';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
const keywork = ref('')
</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>