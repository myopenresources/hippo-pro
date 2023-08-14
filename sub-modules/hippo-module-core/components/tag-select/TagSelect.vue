<template>
  <div class="tag-select">
    <div
      v-for="(opt, index) in list"
      :key="index"
      class="tag-select-option"
      :class="{
        'tag-select-option-small': props.size === TagSelectSizeEnum.small,
        'tag-select-option-large': props.size === TagSelectSizeEnum.large,
        'tag-select-option-round': props.round,
        'tag-select-option-select': props.value === opt.value,
        'tag-select-option-select-success':
          props.value === opt.value && props.type === TagSelectTypeEnum.success,
        'tag-select-option-select-warning':
          props.value === opt.value && props.type === TagSelectTypeEnum.warning,
        'tag-select-option-select-info':
          props.value === opt.value && props.type === TagSelectTypeEnum.info,
        'tag-select-option-select-danger':
          props.value === opt.value && props.type === TagSelectTypeEnum.danger
      }"
      @click="selectOpt(opt)"
    >
      <slot name="opt" :data="opt">
        <DynamicIcon :icon="opt.icon" v-if="opt.icon && opt.icon.length" />
        {{ opt.label }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TagSelectProps } from '../../props'
import type { TagSelectOption } from '../../types'
import { TagSelectSizeEnum, TagSelectTypeEnum } from '../../enums'

const props = defineProps(TagSelectProps)
const emit = defineEmits(['update:value', 'change'])

const selectOpt = (opt: TagSelectOption) => {
  emit('update:value', opt.value)
  emit('change', opt.value, opt)
}
</script>

<style lang="scss" scoped>
@import './TagSelect.scss';
</style>
