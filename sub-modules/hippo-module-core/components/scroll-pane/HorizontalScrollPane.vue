<template>
  <div class="horizontal-scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div
      class="horizontal-scroll-wrapper"
      ref="scrollWrapper"
      :style="{ transform: `translateX(${left}px)`, transitionDuration: duration }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { HorizontalScrollPaneProps } from '../../props'

export default defineComponent({
  name: 'HorizontalScrollPane',
  props: HorizontalScrollPaneProps,
  setup(props, { emit }) {
    const left = ref(0)
    const scrollContainer = ref<any>(null)
    const scrollWrapper = ref<any>(null)
    const moveTargetRef = ref(null)

    const handleScroll = (e: any) => {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const containerWidth = scrollContainer.value.offsetWidth
      const wrapperWidth = scrollWrapper.value.offsetWidth

      if (eventDelta > 0) {
        left.value = Math.min(0, left.value + eventDelta)
      } else {
        if (containerWidth - props.padding < wrapperWidth) {
          if (left.value < -(wrapperWidth - containerWidth + props.padding)) {
            left.value = left.value
          } else {
            left.value = Math.max(
              left.value + eventDelta,
              containerWidth - wrapperWidth - props.padding
            )
          }
        } else {
          left.value = 0
        }
      }
    }

    const moveToTarget = (target: any) => {
      moveTargetRef.value = target

      const containerWidth = scrollContainer.value.offsetWidth
      const targetLeft = target.offsetLeft
      const targetWidth = target.offsetWidth

      if (targetLeft <= -left.value) {
        left.value = -targetLeft + props.padding
      } else if (
        targetLeft + props.padding > -left.value &&
        targetLeft + targetWidth < -left.value + containerWidth - props.padding
      ) {
 
      } else {
        left.value = -(targetLeft - (containerWidth - targetWidth) + props.padding)
    
      }
    }

    const moveToRight = () => {
      if (left.value >= 0) {
        left.value = 0
        return
      }

      left.value += props.step

      if (left.value >= 0) {
        left.value = 0
        return
      }
    }

    const moveToLeft = (includePadding = true) => {
      const containerWidth = scrollContainer.value.offsetWidth
      const wrapperWidth = scrollWrapper.value.offsetWidth

      let targetLeft = 0
      if (includePadding) {
        targetLeft = containerWidth - wrapperWidth - props.padding
      } else {
        targetLeft = containerWidth - wrapperWidth
      }

      if (targetLeft > 0) {
        left.value = 0
        return
      }

      left.value -= props.step

      if (left.value <= targetLeft) {
        left.value = targetLeft
      }

      if (targetLeft > 0) {
        left.value = 0
        return
      }
    }

    const resize = () => {
      const containerWidth = scrollContainer.value.offsetWidth
      const wrapperWidth = scrollWrapper.value.offsetWidth

      if (left.value <= 0 || containerWidth - wrapperWidth >= 0) {
        moveToLeft(false)
      }

      if (moveTargetRef.value) {
        moveToTarget(moveTargetRef.value)
      }
    }

    onMounted(() => {
      window.addEventListener('resize', resize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resize)
    })

    return {
      scrollContainer,
      scrollWrapper,
      left,
      handleScroll,
      moveToTarget,
      moveToRight,
      moveToLeft,
      resize
    }
  }
})
</script>

<style lang="scss" scoped src="./HorizontalScrollPane.scss" />
