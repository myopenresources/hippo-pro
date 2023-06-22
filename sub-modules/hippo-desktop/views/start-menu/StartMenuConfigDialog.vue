<template>
  <el-dialog v-model="dialogVisible" :width="'800px'" :title="'功能配置'" :draggable="true">
    <template #default>
      <div class="start-menu-config-dialog" v-loading="loading">
        <div class="start-menu-config-dialog-left">
          <div class="start-menu-config-dialog-header">
            所有功能
          </div>
          <div class="start-menu-config-dialog-body">
            <div class="start-menu-config-dialog-body-item" v-for="(menu, index) in menus" :key="index">
              <div class="start-menu-config-dialog-body-item-flex">
                <div class="start-menu-config-dialog-body-item-icon">
                  <DynamicIcon :icon="menu.icon" />
                </div>
                <div class="start-menu-config-dialog-body-item-label">{{ menu.label }}</div>
              </div>
              <div class="start-menu-config-dialog-body-item-btns">
                <el-button link type="primary" @click="addCommonMenus(menu, index)">
                  <DynamicIcon :icon="'Plus'" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="start-menu-config-dialog-right">
          <div class="start-menu-config-dialog-header">
            常用功能
          </div>
          <div class="start-menu-config-dialog-body">
            <div class="start-menu-config-dialog-body-item" v-for="(menu, index) in commonMenus" :key="index">
              <div class="start-menu-config-dialog-body-item-flex">
                <div class="start-menu-config-dialog-body-item-icon">
                  <DynamicIcon :icon="menu.icon" />
                </div>
                <div class="start-menu-config-dialog-body-item-label">{{ menu.label }}</div>
              </div>
              <div class="start-menu-config-dialog-body-item-btns">
                <el-button link type="danger" @click="deleteCommonMenus(menu, index)">
                  <DynamicIcon :icon="'Minus'" />
                </el-button>
                <el-button link type="success" @click="upCommonMenus(menu, index)">
                  <DynamicIcon :icon="'Top'" />
                </el-button>
                <el-button link type="primary" @click="downCommonMenus(menu, index)">
                  <DynamicIcon :icon="'Bottom'" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <el-button @click="hideDialog">取消</el-button>
      <el-button type="primary" @click="confirm"> 确定 </el-button>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UserStoreUtil } from '../../utils';
import { DynamicIcon } from 'hippo-module-core/components';
import type { MenuInfo, RequestResultData } from '../../types';
import { MenuApi } from '../../api';


const emit = defineEmits(['confirm'])

const dialogVisible = ref(false)

const commonMenus = ref(UserStoreUtil.getCommonMenu())

const menus = ref(UserStoreUtil.getMenus())

const loading = ref(false)


const showDialog = () => {
  dialogVisible.value = true
  commonMenus.value = UserStoreUtil.getCommonMenu()
}

const hideDialog = () => {
  dialogVisible.value = false
}

const confirm = () => {
  loading.value = true
  MenuApi.updateCommonMenus(commonMenus.value).then((res: RequestResultData<Object>) => {
    UserStoreUtil.setCommonMenu(commonMenus.value)
    emit('confirm')
    loading.value = false
    hideDialog()
  }, () => {
    loading.value = false
  })
}

const deleteCommonMenus = (menu: MenuInfo, index: number) => {
  commonMenus.value.splice(index, 1)
}

const upCommonMenus = (menu: MenuInfo, index: number) => {
  if (index == 0) {
    return
  }
  const currentMenu = commonMenus.value[index]
  const preMenu = commonMenus.value[index - 1]
  commonMenus.value[index - 1] = currentMenu;
  commonMenus.value[index] = preMenu;
}

const downCommonMenus = (menu: MenuInfo, index: number) => {
  if (index >= commonMenus.value.length - 1) {
    return
  }
  const currentMenu = commonMenus.value[index]
  const nextMenu = commonMenus.value[index + 1]
  commonMenus.value[index + 1] = currentMenu;
  commonMenus.value[index] = nextMenu;
}

const addCommonMenus = (menu: MenuInfo, index: number) => {
  const find = commonMenus.value.find(item => {
    return item.id === menu.id
  })

  if (!find) {
    commonMenus.value.push(menu)
  }
}


defineExpose({
  showDialog,
  hideDialog
})
</script>
  
<style scoped lang="scss">
@import './StartMenuConfigDialog.scss';
</style>
  