import { createApp, type App, watch, type ComponentPublicInstance } from 'vue'
import LoadingBarComp from './LoadingBar.vue'
import { type LoadingBar } from '../../types'

let loadingBarInstance: any = undefined;

const showLoadingBar = (app: App, config: LoadingBar) => {
  if (loadingBarInstance) {
    if(!config.destroyOnClose){
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
    loadingBarInstance.open()
    document.body.appendChild(dFrag)

    watch(() => loadingBarInstance.visible, (val) => {
      if (!val && config.destroyOnClose) {
        app.unmount()
        loadingBarInstance = undefined
      }
    })
  })



  return loadingBarInstance
}

const LoadingBarBox = (config: LoadingBar) => {
  const messageApp = createApp(LoadingBarComp, {})

  return showLoadingBar(messageApp, config)
}

export default LoadingBarBox
