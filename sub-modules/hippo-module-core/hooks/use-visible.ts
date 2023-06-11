import { watch, ref, type Ref } from 'vue'

export function useVisible(
  visible: Ref<boolean>,
  emit: (event: 'update:visible', val: boolean) => void,
  callback?: Function
): {
  isVisible: Ref<boolean>
  visibleHandle: () => void
} {
  const isVisible = ref<boolean>(visible.value)

  const visibleHandle = (e?: MouseEvent): void => {
    emit('update:visible', false)
    callback && callback(e)
  }

  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      if (!newVal) {
        visibleHandle()
      }
    }
  )

  watch(
    (): boolean => visible.value,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  return {
    isVisible,
    visibleHandle
  }
}
