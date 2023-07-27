<template>
  <div class="select-tag">
    <div
      v-for="(opt, index) in list"
      :key="index"
      class="select-tag-option"
      :class="{
        'select-tag-option-small': props.size === SelectTagSizeEnum.small,
        'select-tag-option-large': props.size === SelectTagSizeEnum.large,
        'select-tag-option-round': props.round,
        'select-tag-option-select': props.value === opt.value,
        'select-tag-option-select-success':
          props.value === opt.value && props.type === SelectTagTypeEnum.success,
        'select-tag-option-select-warning':
          props.value === opt.value && props.type === SelectTagTypeEnum.warning,
        'select-tag-option-select-info':
          props.value === opt.value && props.type === SelectTagTypeEnum.info,
        'select-tag-option-select-danger':
          props.value === opt.value && props.type === SelectTagTypeEnum.danger
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
import { SelectTagProps } from '../../props'
import type { SelectTagOption } from '../../types'
import { SelectTagTypeEnum, SelectTagSizeEnum } from '../../enums'

const props = defineProps(SelectTagProps)
const emit = defineEmits(['update:value', 'change'])

const selectOpt = (opt: SelectTagOption) => {
  emit('update:value', opt.value)
  emit('change', opt.value, opt)
}
</script>

<style lang="scss" scoped>
@import './SelectTag.scss';
</style>
