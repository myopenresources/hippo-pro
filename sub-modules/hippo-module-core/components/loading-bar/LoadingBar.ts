import { createApp, type App, watch } from 'vue'
import LoadingBarComp from './LoadingBar.vue'

const showLoadingBar = (app: App, resolve, reject) => {
  const dFrag = document.createDocumentFragment()
  const vm: any = app.mount(dFrag)
  vm.setVisible(true)
  document.body.appendChild(dFrag)

  watch(vm.visible, (val) => {
    if (val) {
      resolve()
    } else {
      reject()
      hideMessage(app)
    }
  })
}

const de

const LoadingBarBox = (config: any) => {
  const messageApp = createApp(LoadingBarComp, config)

  return new Promise<void>((resolve, reject) => {
    showLoadingBar(messageApp, resolve, reject)
  })
}
