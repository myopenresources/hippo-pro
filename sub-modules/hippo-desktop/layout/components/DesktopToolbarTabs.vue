<template>
  <div class="desktop-toolbar-tabs">
    <HorizontalScrollPane class="desktop-toolbar-tabs-wrapper" ref="scrollPaneRef">
      <router-link :ref="setTagViewsRef" class="desktop-toolbar-tabs-item" :to="tag" v-for="tag in visitedViews"
        :key="tag.path">
        <span>{{ tag.title }}</span>
        <span @click.prevent.stop="closeSelectedTag(tag)">
          <DynamicIcon icon="CircleClose" />
        </span>
      </router-link>
    </HorizontalScrollPane>

    <div class="desktop-toolbar-tabs-btns">
      <div class="desktop-toolbar-tabs-move-to" @click="moveToLeft">
        <DynamicIcon icon="ArrowLeft" />
      </div>

      <div class="desktop-toolbar-tabs-move-to" @click="moveToRight">
        <DynamicIcon icon="ArrowRight" />
      </div>

      <div class="desktop-toolbar-tabs-more">
        <el-dropdown :teleported="false" @command="tabDropdownCommand">
          <div class="desktop-toolbar-tabs-more-btn">
            <DynamicIcon icon="Menu" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="closeSelectedTag">关闭当前</el-dropdown-item>
              <el-dropdown-item command="closeOthersTags">关闭其他</el-dropdown-item>
              <el-dropdown-item command="closeAllTags">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DynamicIcon, Environments, HorizontalScrollPane } from 'hippo-module-core'
import { computed, nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import {
  useRoute,
  onBeforeRouteUpdate,
  useRouter,
  type RouteLocationNormalizedLoaded,
  type RouteLocationNormalized
} from 'vue-router'
import { useDesktopLayoutStore } from '../../stores'

const useDesktopLayout = useDesktopLayoutStore()
const route = useRoute()
const router = useRouter()

const selectedTag = reactive<any>({})

const tagViewsRef: any[] = []
const scrollPaneRef = ref<any>(null)

/**
 * 列表
 */
const visitedViews: any = computed(() => {
  return useDesktopLayout.getVisitedViews
})

const setTagViewsRef = (el: any) => {
  tagViewsRef.push(el)
}

/**
 * 是否激活
 */
const isActive = (view: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  return view.path === selectedTag.value.path
}

/**
 * 添加
 */
const addViewTag = (currentRoute: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  if (currentRoute && currentRoute.name) {
    selectedTag.value = currentRoute
    useDesktopLayout.addVisitedView(currentRoute)
    moveToCurrentTag()
  }
}

/**
 * 移动
 */
const moveToCurrentTag = () => {
  const tags = tagViewsRef
  nextTick(() => {
    for (const item of tags) {
      if (item && item.to.path === selectedTag.value.path) {
        scrollPaneRef.value.moveToTarget(item.$el)
        break
      }
    }
  })
}

/**
 * 关闭选择
 */
const closeSelectedTag = (view: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  if (visitedViews.value.length == 1 && view.path === Environments.getEvnProp('VITE_HOME_ROUTER')) {
    return
  }

  useDesktopLayout.delVisitedView().then((views: any) => {
    if (isActive(view)) {
      const latestView = views.slice(-1)[0]
      if (latestView) {
        router.push(latestView)
      } else {
        router.push(Environments.getEvnProp('VITE_HOME_ROUTER'))
      }
    }
    scrollPaneRef.value.resize()
  })
}

/**
 * 关闭其它
 */
const closeOthersTags = () => {
  router.push(selectedTag.value)
  useDesktopLayout.delOthersViews().then(() => {
    moveToCurrentTag()
  })
}

/**
 * 关闭所有
 */
const closeAllTags = () => {
  // 如果当前路由是首页，直接关闭其它，保留首页
  if (selectedTag.value.path === Environments.getEvnProp('VITE_HOME_ROUTER')) {
    closeOthersTags()
  } else {
    //如查当前路由不是首页，直接关闭所有，并添加首页
    useDesktopLayout.delAllViews()
    router.push(Environments.getEvnProp('VITE_HOME_ROUTER'))
    moveToCurrentTag()
  }
}

/**
 * 左移
 */
const moveToLeft = () => {
  scrollPaneRef.value.moveToLeft()
}

/**
 * 右移
 */
const moveToRight = () => {
  scrollPaneRef.value.moveToRight()
}

const tabDropdownCommand = (command: string) => {
  const commands: any = {
    closeSelectedTag: () => {
      closeSelectedTag(selectedTag.value)
    },
    closeOthersTags: closeOthersTags,
    closeAllTags: closeAllTags
  }
  commands[command]()
}

  /**
   * 初始化
   */
  ; (() => {
    addViewTag(route)
    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      nextTick(() => {
        addViewTag(to)
      })
    })
  })()

onMounted(() => {
  addViewTag(route)
})

onUnmounted(() => {
  useDesktopLayout.delAllViews()
})
</script>

<style scoped lang="scss" src="./DesktopToolbarTabs.scss" />
