<template>
  <el-popover :trigger="'click'" :width="390" ref="iconSelectPopoverRef">
    <template #reference>
      <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
    </template>
    <template #default>
      <el-tabs v-model="activeName">
        <el-tab-pane label="默认" name="default">
          <div class="icon-list">
            <div class="icon-list-item" v-for="iconName in defaultIconList" :key="iconName">
              <DynamicIcon :icon="iconName" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扩展" name="extend">
          <div class="icon-list">
            <div class="icon-list-item" v-for="iconName in extendIconList" :key="iconName">
              <DynamicIcon :icon="iconName" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CommonUtil from '../../utils/common-util'
import { DynamicIconEnum } from '../../enums'
import { useIconSelectConfig } from '../../hooks'

const iconSelectPopoverRef = ref()
const activeName = ref('default')

const defaultIconList = ref<string[]>([])
const extendIconList = ref<string[]>([])

const iconSelectConfig = useIconSelectConfig()

const initIcon = () => {
  for (const [key] of Object.entries(ElementPlusIconsVue)) {
    defaultIconList.value.push(key)
  }

  console.info(iconSelectConfig.value)

  iconSelectConfig.value.svgPath.forEach((menule) => {
    for (const [key] of Object.entries(menule)) {
      const keyList: string[] = key.split('/')
      if (keyList.length) {
        const svgName = keyList.pop()
        if (svgName) {
          const iconName = svgName.trim().replace('.svg', '')
          extendIconList.value.push(DynamicIconEnum.SvgIcon + CommonUtil.replaceStrCase(iconName))
        }
      }
    }
  })
}

onMounted(() => {
  initIcon()
})
</script>

<style scoped lang="scss">
@import './IconSelect.scss';
</style>
