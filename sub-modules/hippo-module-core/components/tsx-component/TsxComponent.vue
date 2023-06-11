<template>
  <component :is="componentName" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { TsxComponentProps } from '../../props/tsx-component-props'

defineProps(TsxComponentProps)
</script>
