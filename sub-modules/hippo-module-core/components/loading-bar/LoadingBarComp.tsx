import { defineComponent, ref, h, computed } from 'vue'
import './LoadingBar.scss'
import type { LoadingBar } from '../../types'
export default defineComponent({
  setup(props, context) {
    const visible = ref(true)
    const options = ref()

    const barStyle = computed(() => {
      let customBarStyle = {}
      if (options.value && options.value.barStyle) {
        customBarStyle = options.value.barStyle
      }
      return {
        '--loading-bar-width': options.value && options.value.width ? options.value.width : '300px',
        '--loading-bar-height': options.value && options.value.height ? options.value.height : '10px',
        '--loading-bar-display-width':
          options.value && options.value.displayWidth ? options.value.displayWidth : '50%',
        '--loading-bar-display-speed':
          options.value && options.value.displaySpeed ? options.value.displaySpeed : '1.5s',
        ...customBarStyle
      }
    })

    const barLabelStyle = computed(() => {
      let customBarLabelStyle = {}
      if (options.value && options.value.barLabelStyle) {
        customBarLabelStyle = options.value.barLabelStyle
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
      loadingBarOptions: LoadingBar,
      resolve: (value: void | PromiseLike<void>) => void
    ) => {
      options.value = loadingBarOptions
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
        {options.value && options.value.modal && (
          <div
            class={'loading-bar-mask'}
            v-show={visible.value}
            style={{
              zIndex: options.value && options.value.zIndex ? options.value.zIndex : 999
            }}
          ></div>
        )}
        <div
          class={'loading-bar-container'}
          v-show={visible.value}
          style={{
            zIndex: options.value && options.value.zIndex ? options.value.zIndex + 1 : 1000
          }}
        >
          {!(options.value && options.value.content) && (
            <div>
              <div class="loading-bar" style={barStyle.value}></div>
              {options.value && options.value.label && (
                <div class="loading-bar-label" style={barLabelStyle.value}>
                  {options.value.label}
                </div>
              )}
            </div>
          )}
          {options.value && options.value.content && <div>{options.value.content(options.value)}</div>}
        </div>
      </>
    )
  }
})
