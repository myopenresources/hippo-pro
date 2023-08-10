<template>
  <MainContent :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
    <div class="start-menu">
      <el-input class="start-menu-search-box" v-model="keywork" :prefix-icon="Search" clearable placeholder="搜索"
        @input="search" />
      <div class="start-menu-config" @click="openStartMenuConfigDialog">
        <DynamicIcon :icon="'Setting'" />
      </div>
      <div class="start-menu-menus">
        <div class="start-menu-menus-category" v-if="commonMenus && commonMenus.length">常用功能</div>
        <div class="start-menu-menus-inner" v-if="commonMenus && commonMenus.length">
          <div class="start-menu-menus-item" v-for="(menu, index) in commonMenus" :key="index" @click="toPage(menu)">
            <div class="start-menu-menus-item-icon">
              <DynamicIcon :icon="menu.icon" />
            </div>
            <div class="start-menu-menus-item-label">
              {{ menu.label }}
            </div>
          </div>
        </div>
        <div class="start-menu-menus-category" style="margin-top: 1.5rem" v-if="menus && menus.length">所有功能</div>
        <div class="start-menu-menus-inner" v-if="menus && menus.length">
          <div class="start-menu-menus-item" v-for="(menu, index) in menus" :key="index" @click="toPage(menu)">
            <div class="start-menu-menus-item-icon">
              <DynamicIcon :icon="menu.icon" />
            </div>
            <div class="start-menu-menus-item-label">
              {{ menu.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <StartMenuConfigDialog ref="startMenuConfigDialogRef" @confirm="startMenuConfigDialogConfirm" />
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { UserStoreUtil } from '../../utils';
import StartMenuConfigDialog from './StartMenuConfigDialog.vue'
import type { MenuInfo } from '../../types';
import { useDebounceFn } from '@vueuse/core';
const router = useRouter()

const keywork = ref('')

const startMenuConfigDialogRef = ref()

const commonMenus = ref(UserStoreUtil.getCommonMenus())

const menus = ref(UserStoreUtil.getMenus())

const toPage = (menu: any) => {
  router.push(menu.path)
}

const openStartMenuConfigDialog = () => {
  startMenuConfigDialogRef.value.showDialog()
}

const startMenuConfigDialogConfirm = () => {
  commonMenus.value = UserStoreUtil.getCommonMenus()
}

const search = (val: string) => {
  const fn =  useDebounceFn(() => {
    if ('' !== val) {
      const tempCommonData: any = UserStoreUtil.getCommonMenus();
      const tempMenuData: any = UserStoreUtil.getMenus();
      commonMenus.value = tempCommonData.filter((item: MenuInfo) => {
        return item.label.toLowerCase().includes(val.toLowerCase())
      })
      menus.value = tempMenuData.filter((item: MenuInfo) => {
        return item.label.toLowerCase().includes(val.toLowerCase())
      })
    } else {
      commonMenus.value = UserStoreUtil.getCommonMenus();
      menus.value = UserStoreUtil.getMenus();
    }
  }, 333)
  fn()
}
</script>

<style scoped lang="scss">
@import './StartMenu.scss';
</style>
