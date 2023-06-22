<template>
  <MainContent :title="'开始菜单'" :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
    <div class="start-menu">
      <el-input class="start-menu-search-box" v-model="keywork" :prefix-icon="Search" clearable placeholder="搜索" />

      <div class="start-menu-menus">
        <div class="start-menu-menus-category">常用功能</div>
        <div class="start-menu-menus-inner">
          <div class="start-menu-menus-item" v-for="(menu, index) in commonMenus" :key="index" @click="toPage(menu)">
            <div class="start-menu-menus-item-icon">
              <DynamicIcon :icon="menu.icon" />
            </div>
            <div class="start-menu-menus-item-label">
              {{ menu.label }}
            </div>
          </div>
        </div>
        <div class="start-menu-menus-category" style="margin-top: 1.5rem">所有功能</div>
        <div class="start-menu-menus-inner">
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
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { UserStoreUtil } from '../../utils';
const router = useRouter()

const keywork = ref('')

const commonMenus = UserStoreUtil.getCommonMenu()

const menus = UserStoreUtil.getMenus()

const toPage = (menu: any) => {
  router.push(menu.path)
}
</script>

<style scoped lang="scss">
@import './StartMenu.scss';
</style>
