<template>
  <MainContent :title="'首页'" :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
    <div class="home">
      <el-popover placement="right" :width="400" trigger="click" :teleported="false">
        <template #reference>
          <div class="home-config">
            <DynamicIcon icon="Setting" />
          </div>
        </template>
        <div>
          编辑桌面：<el-switch v-model="isEidt" inline-prompt active-text="是" inactive-text="否" />
          <div class="home-config-list">
            <div class="home-config-list-item" v-for="(item, index) in modules" :key="index">
              <div class="home-config-list-item-flex">
                <div class="home-config-list-item-icon">
                  <DynamicIcon :icon="item.icon" />
                </div>
                <div class="home-config-list-item-label">{{ item.label }}</div>
              </div>
              <div class="home-config-list-item-btns" v-if="isEidt">
                <el-button link type="primary" @click="add(item, index)">
                  <DynamicIcon :icon="'Plus'" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-popover>

      <grid-layout v-model:layout="layout" :col-num="12" :row-height="30" style="width: 100%">
        <template #default="{ gridItemProps }">
          <grid-item
            v-for="item in layout"
            :key="item.i"
            v-bind="gridItemProps"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :is-draggable="isEidt"
            :is-resizable="isEidt"
            @resize="resize"
            @move="move"
            @moved="moved"
          >
            <template v-if="item.module && item.module && item.module.component">
              <Component :is="item.module.component" />
            </template>
          </grid-item>
        </template>
      </grid-layout>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
interface HomeModule {
  id: string
  icon: string
  label: string
  component: Component | undefined
}

interface HomeLayoutType {
  x: number
  y: number
  w: number
  h: number
  i: number
  module: HomeModule
}

import { UserStoreUtil } from 'hippo-desktop'
import { ref, type Component } from 'vue'
import { GridLayout, GridItem } from 'vue3-drr-grid-layout'
import 'vue3-drr-grid-layout/dist/style.css'

const isEidt = ref(false)

const modules = ref<HomeModule[]>([
  { id: 'module1', icon: 'SvgIconHome', label: '模块1', component: undefined },
  { id: 'module2', icon: 'SvgIconHome', label: '模块2', component: undefined }
])

//https://www.itxst.com/vue3-drr-grid-layout/tutorial.html
const layout = ref<HomeLayoutType[]>([
  { x: 0, y: 0, w: 3, h: 10, i: 0, module: { id: '', icon: '', label: '', component: undefined } },
  { x: 3, y: 0, w: 3, h: 10, i: 1, module: { id: '', icon: '', label: '', component: undefined } },
  { x: 6, y: 0, w: 3, h: 10, i: 2, module: { id: '', icon: '', label: '', component: undefined } },
  { x: 9, y: 0, w: 3, h: 10, i: 3, module: { id: '', icon: '', label: '', component: undefined } },
])

//缩放事件
const resize = (i: number, newH: number, newW: number, newHPx: number, newWPx: number) => {}
//单元格移动中的事件
const move = (i: number, newX: number, newY: number) => {}
//单元格移动后的事件
const moved = (i: number, newX: number, newY: number) => {
  console.info(JSON.stringify(layout.value))
}

//添加组件
const add = (module: HomeModule, index: number) => {
  const maxItem = layout.value[layout.value.length - 1]
  layout.value.push({ x: 0, y: maxItem.y + 1, w: 12, h: 10, i: maxItem.i + 1, module })
}
</script>

<style scoped lang="scss">
@import './Home.scss';
</style>
