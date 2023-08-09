import { defineComponent, ref, h, computed } from 'vue'
import './LoadingBar.scss'
import type { LoadingBar } from '../../types'
export default defineComponent({
  setup(props, context) {
    const visible = ref(true)
    const config = ref()

    const barStyle = computed(() => {
      let customBarStyle = {}
      if (config.value && config.value.barStyle) {
        customBarStyle = config.value.barStyle
      }
      return {
        '--loading-bar-width': config.value && config.value.width ? config.value.width : '300px',
        '--loading-bar-height': config.value && config.value.height ? config.value.height : '10px',
        '--loading-bar-display-width':
          config.value && config.value.displayWidth ? config.value.displayWidth : '50%',
        '--loading-bar-display-speed':
          config.value && config.value.displaySpeed ? config.value.displaySpeed : '1.5s',
        ...customBarStyle
      }
    })

    const barLabelStyle = computed(() => {
      let customBarLabelStyle = {}
      if (config.value && config.value.barLabelStyle) {
        customBarLabelStyle = config.value.barLabelStyle
      }

      return customBarLabelStyle
    })

    const setVisible = (value: boolean) => {
      visible.value = value
    }

    const open = () => {
      setVisible(true)
    }

    const setOptions = (
      loadingBarConfig: LoadingBar,
      resolve: (value: void | PromiseLike<void>) => void
    ) => {
      config.value = loadingBarConfig
      resolve()
    }

    const close = () => {
      setVisible(false)
    }

    context.expose({
      setOptions,
      open,
      close,
      visible
    })

    return () => (
      <>
        {config.value && config.value.modal && (
          <div
            class={'loading-bar-mask'}
            v-show={visible.value}
            style={{
              zIndex: config.value && config.value.zIndex ? config.value.zIndex : 999
            }}
          ></div>
        )}
        <div
          class={'loading-bar-container'}
          v-show={visible.value}
          style={{
            zIndex: config.value && config.value.zIndex ? config.value.zIndex + 1 : 1000
          }}
        >
          {!(config.value && config.value.content) && (
            <div>
              <div class="loading-bar" style={barStyle.value}></div>
              {config.value && config.value.label && (
                <div class="loading-bar-label" style={barLabelStyle.value}>
                  {config.value.label}
                </div>
              )}
            </div>
          )}
          {config.value && config.value.content && <div>{config.value.content(config.value)}</div>}
        </div>
      </>
    )
  }
})
