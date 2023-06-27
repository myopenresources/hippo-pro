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
          <div>
            
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
            {{ item.i }}
          </grid-item>
        </template>
      </grid-layout>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GridLayout, GridItem } from 'vue3-drr-grid-layout'
import 'vue3-drr-grid-layout/dist/style.css'

const isEidt = ref(false)

//https://www.itxst.com/vue3-drr-grid-layout/tutorial.html
const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: 0 },
  { x: 2, y: 0, w: 2, h: 2, i: 1 },
  { x: 4, y: 0, w: 2, h: 2, i: 2 },
  { x: 0, y: 1, w: 6, h: 2, i: 3 }
])

const message = ref('')
//缩放事件
const resize = (i: number, newH: number, newW: number, newHPx: number, newWPx: number) => {
  message.value = '缩放中 i=' + i + ', X=' + newHPx + ', Y=' + newWPx
}
//单元格移动中的事件
const move = (i: number, newX: number, newY: number) => {
  message.value = '移动中 i=' + i + ', X=' + newX + ', Y=' + newY
}
//单元格移动后的事件
const moved = (i: number, newX: number, newY: number) => {
  message.value = '移动中 i=' + i + ', X=' + newX + ', Y=' + newY
}
</script>

<style scoped lang="scss">
@import './Home.scss';
</style>
