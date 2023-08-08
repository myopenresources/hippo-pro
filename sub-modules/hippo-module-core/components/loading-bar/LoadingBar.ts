import { createApp, type App } from 'vue'
import LoadingBarComp from './LoadingBar.vue'

const showLoadingBar = (app: App) => {
  const dFrag = document.createDocumentFragment()
  const vm: any = app.mount(dFrag)
  vm.setVisible(true)
  document.body.appendChild(dFrag)
  return vm
}

const LoadingBarBox = (config: any) => {
  const messageApp = createApp(LoadingBarComp, config)
  return showLoadingBar(messageApp)
}
