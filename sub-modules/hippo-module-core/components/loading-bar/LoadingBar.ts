import { createApp, type App, watch, type ComponentPublicInstance } from 'vue'
import LoadingBarComp from './LoadingBarComp'
import { type LoadingBar } from '../../types'

let loadingBarInstance: any = undefined

const defaultProps = {
  width: '300px',
  height: '10px',
  displayWidth: '50%',
  displaySpeed: '1.5s',
  destroyOnClose: true,
  label: '',
  content: undefined,
  modal: true,
  zIndex: 999,
  barStyle: {},
  barLabelStyle: {},
  beforeClose: () => {},
  beforeOpen: () => {}
}

const showLoadingBar = (app: App, config: LoadingBar) => {
  if (loadingBarInstance) {
    if (!config.destroyOnClose) {
      config && config.beforeOpen && config.beforeOpen()
      loadingBarInstance.open()
    }
    return loadingBarInstance
  }

  const dFrag = document.createDocumentFragment()
  loadingBarInstance = app.mount(dFrag)
  const optionPromise = new Promise<void>((resolve, reject) => {
    loadingBarInstance.setOptions(config, resolve)
  })

  optionPromise.then(() => {
    config && config.beforeOpen && config.beforeOpen()
    document.body.appendChild(dFrag)

    watch(
      () => loadingBarInstance.visible,
      (val) => {
        if (!val) {
          config && config.beforeClose && config.beforeClose()
        }
        if (!val && config.destroyOnClose) {
          app.unmount()
          loadingBarInstance = undefined
        }
      }
    )
  })

  return loadingBarInstance
}

const LoadingBarBox = (config: LoadingBar = {}) => {
  const messageApp = createApp(LoadingBarComp)

  const distConfig = Object.assign(
    {
      ...defaultProps
    },
    config
  )
  return showLoadingBar(messageApp, distConfig)
}

export default LoadingBarBox
