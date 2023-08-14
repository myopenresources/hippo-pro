<template>
  <el-popover :trigger="popoverTrigger" :disabled="disabled" :popper-clsss="popperClass" :popper-style="popperStyle"
    :placement="popoverPlacement" :width="popoverWidth" ref="iconSelectPopoverRef" :teleported="false">
    <template #reference>
      <slot>
        <div class="icon-select">
          <div class="icon-view" v-if="value && value.length">
            <DynamicIcon :icon="value" />
          </div>
          <el-button type="primary" link>{{ value && value.length ? '更换' : '选择图标' }}</el-button>
        </div>
      </slot>
    </template>
    <template #default>
      <el-tabs v-model="activeName">
        <el-tab-pane label="默认图标" name="default">
          <div class="icon-list" :style="{
            maxHeight: popoverMaxHeight
          }">
            <div class="icon-list-item" v-for="iconName in defaultIconList" :key="iconName"
              @click="select(iconName, 'default')">
              <DynamicIcon :icon="iconName" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扩展图标" name="extend">
          <div class="icon-list" :style="{
            maxHeight: popoverMaxHeight
          }">
            <div class="icon-list-item" v-for="iconName in extendIconList" :key="iconName"
              @click="select(iconName, 'extend')">
              <DynamicIcon :icon="iconName" />
            </div>
            <div class="icon-list-item" v-for="(iconName, index) in (extendIcons as string[])"
              :key="iconName + index + ''" @click="select(iconName, 'extend')">
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
import { IconSelectProps } from '../../props'

const props = defineProps(IconSelectProps)
const emit = defineEmits(['change', 'update:value'])

const iconSelectPopoverRef = ref()
const activeName = ref('default')

const defaultIconList = ref<string[]>([])
const extendIconList = ref<string[]>([])

const iconSelectConfig = useIconSelectConfig()

const select = (iconName: string, category: string) => {
  emit('change', iconName, category)
  emit('update:value', iconName)
  if (iconSelectPopoverRef.value) {
    iconSelectPopoverRef.value.hide()
  }
}

const initIcons = () => {
  for (const [key] of Object.entries(ElementPlusIconsVue)) {
    defaultIconList.value.push(key)
  }

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
  initIcons()
})
</script>

<style scoped lang="scss">
@import './IconSelect.scss';
</style>
