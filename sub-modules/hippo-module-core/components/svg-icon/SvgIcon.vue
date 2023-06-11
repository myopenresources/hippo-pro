<template>
  <svg aria-hidden="true" :class="className" :style="style">
    <use :href="'#' + svgIconToLowerCase(name + '')" :fill="fill" />
  </svg>
</template>

<script lang="ts" setup>
import { SvgIconProps } from '../../props/svg-icon-props'
import CommonUtil from '../../utils/common-util'

defineProps(SvgIconProps)

const svgIconToLowerCase = (name: string) => {
  return CommonUtil.svgIconToLowerCase(name)
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
}
</style>
