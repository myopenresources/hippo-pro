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

const showLoadingBar = (app: App, options: LoadingBar) => {
  if (loadingBarInstance) {
    if (!options.destroyOnClose) {
      options && options.beforeOpen && options.beforeOpen()
      loadingBarInstance.open()
    }
    return loadingBarInstance
  }

  const dFrag = document.createDocumentFragment()
  loadingBarInstance = app.mount(dFrag)
  const optionPromise = new Promise<void>((resolve, reject) => {
    loadingBarInstance.setOptions(options, resolve)
  })

  optionPromise.then(() => {
    options && options.beforeOpen && options.beforeOpen()
    document.body.appendChild(dFrag)

    watch(
      () => loadingBarInstance.visible,
      (val) => {
        if (!val) {
          options && options.beforeClose && options.beforeClose()
        }
        if (!val && options.destroyOnClose) {
          app.unmount()
          loadingBarInstance = undefined
        }
      }
    )
  })

  return loadingBarInstance
}

const LoadingBarBox = (options: LoadingBar = {}) => {
  const loadingBarApp = createApp(LoadingBarComp)

  const distOptions = Object.assign(
    {
      ...defaultProps
    },
    options
  )
  return showLoadingBar(loadingBarApp, distOptions)
}

export default LoadingBarBox
