<template>
  <MainContent :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
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
                <el-button link type="primary" @click="addItem(item, index)">
                  <DynamicIcon :icon="'Plus'" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-popover>

      <grid-layout v-model:layout="layout" :col-num="12" :row-height="30">
        <template #default="{ gridItemProps }">
          <grid-item v-for="(item, index) in layout" :key="item.i" v-bind="gridItemProps" :min-w="1" :max-w="12"
            :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :is-draggable="isEidt" :is-resizable="isEidt"
            @resize="resize" @move="move" @moved="moved">
            <div class="home-card">
              <div class="home-card-close" v-show="isEidt" @click="removeItem(item, index)">
                <DynamicIcon icon="CircleClose" />
              </div>
              <template v-if="item.module && item.module && item.module.component">
                <Component :is="item.module.component" :data="item.module.data" />
              </template>
            </div>
          </grid-item>
        </template>
      </grid-layout>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue'
import { GridLayout, GridItem } from 'vue3-drr-grid-layout'
import 'vue3-drr-grid-layout/dist/style.css'
import type { HomeModule, HomeLayout } from '../../types/home-types'
import TextContent from './components/TextContent.vue'

const isEidt = ref(false)

const modules = shallowRef<HomeModule[]>([
  {
    id: 'module1',
    icon: 'SvgIconHome',
    label: '模块1',
    component: markRaw(TextContent),
    data: {
      text: '模块1'
    }
  },
  {
    id: 'module2',
    icon: 'SvgIconHome',
    label: '模块2',
    component: markRaw(TextContent),
    data: {
      text: '模块1'
    }
  }
])

//https://www.itxst.com/vue3-drr-grid-layout/tutorial.html
const layout = ref<HomeLayout[]>([
  {
    x: 0,
    y: 0,
    w: 5,
    h: 6,
    i: 0,
    module: {
      id: '1',
      icon: 'SvgIconHome',
      label: '模块1',
      component: markRaw(TextContent),
      data: {
        text: '模块1'
      }
    }
  },
  {
    x: 2,
    y: 6,
    w: 3,
    h: 12,
    i: 3,
    module: {
      id: '2',
      icon: 'SvgIconHome',
      label: '模块2',
      component: markRaw(TextContent),
      data: {
        text: '模块2'
      }
    }
  },
  {
    x: 0,
    y: 12,
    w: 2,
    h: 6,
    i: 4,
    module: {
      id: '3',
      icon: 'SvgIconHome',
      label: '模块3',
      component: markRaw(TextContent),
      data: {
        text: '模块3'
      }
    }
  },
  {
    x: 0,
    y: 6,
    w: 2,
    h: 6,
    i: 5,
    module: {
      id: '4',
      icon: 'SvgIconHome',
      label: '模块4',
      component: markRaw(TextContent),
      data: {
        text: '模块4'
      }
    }
  },
  {
    x: 5,
    y: 0,
    w: 3,
    h: 6,
    i: 6,
    module: {
      id: '5',
      icon: 'SvgIconHome',
      label: '模块5',
      component: markRaw(TextContent),
      data: {
        text: '模块5'
      }
    }
  },
  {
    x: 5,
    y: 6,
    w: 3,
    h: 12,
    i: 7,
    module: {
      id: '6',
      icon: 'SvgIconHome',
      label: '模块6',
      component: markRaw(TextContent),
      data: {
        text: '模块6'
      }
    }
  },
  {
    x: 8,
    y: 0,
    w: 4,
    h: 9,
    i: 8,
    module: {
      id: '7',
      icon: 'SvgIconHome',
      label: '模块7',
      component: markRaw(TextContent),
      data: {
        text: '模块7'
      }
    }
  },
  {
    x: 8,
    y: 9,
    w: 4,
    h: 9,
    i: 9,
    module: {
      id: '8',
      icon: 'SvgIconHome',
      label: '模块8',
      component: markRaw(TextContent),
      data: {
        text: '模块8'
      }
    }
  }
])

//缩放事件
const resize = (i: number, newH: number, newW: number, newHPx: number, newWPx: number) => { }
//单元格移动中的事件
const move = (i: number, newX: number, newY: number) => { }
//单元格移动后的事件
const moved = (i: number, newX: number, newY: number) => { }

//添加组件
const addItem = (module: HomeModule, index: number) => {
  let maxItem = null
  if (layout.value.length == 0) {
    maxItem = {
      x: 0,
      y: 0,
      w: 0,
      h: 10,
      i: 0,
      module: { id: '', icon: '', label: '', component: undefined }
    }
  } else {
    maxItem = layout.value[layout.value.length - 1]
  }

  layout.value.push({ x: 0, y: maxItem.y + 1, w: 12, h: 10, i: maxItem.i + 1, module })
}

//移除组件
const removeItem = (module: HomeLayout, index: number) => {
  layout.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
@import './Home.scss';
</style>
