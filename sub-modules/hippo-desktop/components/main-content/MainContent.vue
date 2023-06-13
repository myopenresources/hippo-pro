<template>
  <div class="main-content" :style="mainContentStyle">
    <div class="main-content-header" v-if="headerVisible">
      <slot name="headerLeft">
        <div class="main-content-header-title">
          {{ title }}
        </div>
      </slot>
      <slot name="headerCenter">

      </slot>

      <div class="main-content-header-right">
        <slot name="headerRight">
        </slot>

        <div class="main-content-header-right-btn main-content-header-right-btn-close" v-if="closeVisible && !(route.path ===homePath && visitedViews.length==1)" @click="close">
          <DynamicIcon icon="Close" />
        </div>
      </div>

    </div>
    <div class="main-content-body" :style="{
      height: ` calc(100% - ${headerVisible ? 'var(--main-content-header-height)' : '0px'})`,
      ...bodyStyle
    }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Environments, useEventBusEmit } from 'hippo-module-core';
import { MainContentProps } from '../../props/main-content-props';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useDesktopLayoutStore } from '../../stores';

defineProps(MainContentProps)

const homePath = Environments.getEvnProp('VITE_HOME_ROUTER')

const route = useRoute()
const useDesktopLayout = useDesktopLayoutStore()

const visitedViews: any = computed(() => {
  return useDesktopLayout.getVisitedViews
})

const close = ()=>{
  useEventBusEmit('desktopToolbarCloseSelectedTab')
}


</script>

<style scoped lang="scss">
@import './MainContent.scss';
</style>
