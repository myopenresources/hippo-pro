import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'
import type { WindowResizeParams } from '../types/window-resize-types'
import type { Dimensions } from '../types/dimensions-types'

export function useWindowResize(
  params: WindowResizeParams = {
    initExe: false,
    useMounted: false,
    handle: (dimensions: Dimensions) => {}
  }
) {
  const onResize = () => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    params.handle && params.handle(dimensions)
  }

  if (params.useMounted) {
    onMounted(() => {
      window.addEventListener('resize', onResize)
      params.initExe && onResize()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })
  } else {
    onActivated(() => {
      window.addEventListener('resize', onResize)
      params.initExe && onResize()
    })

    onDeactivated(() => {
      window.removeEventListener('resize', onResize)
    })
  }
}
