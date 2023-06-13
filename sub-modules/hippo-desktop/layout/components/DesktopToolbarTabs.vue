<template>
  <div class="desktop-toolbar-tabs">
    <div class="desktop-toolbar-tabs-btns">
      <div class="desktop-toolbar-tabs-move-to" @click="moveToLeft">
        <DynamicIcon icon="ArrowLeft" />
      </div>
    </div>
    <HorizontalScrollPane class="desktop-toolbar-tabs-wrapper" ref="scrollPaneRef">
      <router-link
        :ref="setTabViewsRef"
        class="desktop-toolbar-tabs-item"
        :to="tab"
        v-for="tab in visitedViews"
        :key="tab.path"
      >
        <span>{{ tab.title }}</span>
        <span
          @click.prevent.stop="closeSelectedTab(tab)"
          v-show="!(tab.path === homePath && visitedViews.length === 1)"
        >
          <DynamicIcon icon="CircleClose" />
        </span>
      </router-link>
    </HorizontalScrollPane>

    <div class="desktop-toolbar-tabs-btns">
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
              <el-dropdown-item command="closeSelectedTab">关闭当前</el-dropdown-item>
              <el-dropdown-item command="closeOthersTabs">关闭其他</el-dropdown-item>
              <el-dropdown-item command="closeAllTabs">关闭所有</el-dropdown-item>
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

const selectedTab = reactive<any>({})

const tabViewsRef: any[] = []
const scrollPaneRef = ref<any>(null)
const homePath = Environments.getEvnProp('VITE_HOME_ROUTER')

/**
 * 列表
 */
const visitedViews: any = computed(() => {
  return useDesktopLayout.getVisitedViews
})

const setTabViewsRef = (el: any) => {
  tabViewsRef.push(el)
}

/**
 * 是否激活
 */
const isActive = (view: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  return view.path === selectedTab.value.path
}

/**
 * 添加
 */
const addViewTab = (currentRoute: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  if (currentRoute && currentRoute.name) {
    selectedTab.value = currentRoute
    useDesktopLayout.addVisitedView(currentRoute)
    moveToCurrentTab()
  }
}

/**
 * 移动
 */
const moveToCurrentTab = () => {
  const tabs = tabViewsRef
  nextTick(() => {
    for (const item of tabs) {
      if (item && item.to.path === selectedTab.value.path) {
        scrollPaneRef.value.moveToTarget(item.$el)
        break
      }
    }
  })
}

/**
 * 关闭选择
 */
const closeSelectedTab = (view: RouteLocationNormalizedLoaded | RouteLocationNormalized) => {
  if (visitedViews.value.length == 1 && view.path === homePath) {
    return
  }

  useDesktopLayout.delVisitedView(view).then((views: any) => {
    if (isActive(view)) {
      const latestView = views.slice(-1)[0]
      if (latestView) {
        router.push(latestView)
      } else {
        router.push(homePath)
      }
    }
    scrollPaneRef.value.resize()
  })
}

/**
 * 关闭其它
 */
const closeOthersTabs = () => {
  router.push(selectedTab.value)
  useDesktopLayout.delOthersViews(selectedTab.value).then(() => {
    moveToCurrentTab()
  })
}

/**
 * 关闭所有
 */
const closeAllTabs = () => {
  // 如果当前路由是首页，直接关闭其它，保留首页
  if (selectedTab.value.path === homePath) {
    closeOthersTabs()
  } else {
    //如查当前路由不是首页，直接关闭所有，并添加首页
    useDesktopLayout.delAllViews()
    router.push(homePath)
    moveToCurrentTab()
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
    closeSelectedTab: () => {
      closeSelectedTab(selectedTab.value)
    },
    closeOthersTabs: closeOthersTabs,
    closeAllTabs: closeAllTabs
  }
  commands[command]()
}

/**
 * 初始化
 */
;(() => {
  addViewTab(route)
  onBeforeRouteUpdate((to: RouteLocationNormalized) => {
    nextTick(() => {
      addViewTab(to)
    })
  })
})()

onMounted(() => {
  addViewTab(route)
})

onUnmounted(() => {
  useDesktopLayout.delAllViews()
})
</script>

<style scoped lang="scss" src="./DesktopToolbarTabs.scss" />
