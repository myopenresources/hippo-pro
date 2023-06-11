<template>
  <el-popover :visible="isVisible" placement="top" :width="160">
    <p>{{ content }}</p>
    <div class="popover-confirm-btns">
      <el-button size="small" @click="cancel">取消</el-button>
      <el-button size="small" type="primary" @click="confirm">确定</el-button>
    </div>
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useVisible } from '../../hooks'
import { PopoverConfirmProps } from '../../props/popover-confirm-props'

const props = defineProps(PopoverConfirmProps)

const emit = defineEmits(['update:visible', 'cancel', 'confirm'])

const { isVisible, visibleHandle } = useVisible(toRef(props, 'visible'), emit)

const confirm = () => {
  isVisible.value = false
  emit('confirm')
}

const cancel = () => {
  isVisible.value = false
  emit('cancel')
}
</script>

<style lang="scss" scoped>
.popover-confirm {
  &-btns {
    text-align: right;
    margin-top: 16px;
  }
}
</style>
