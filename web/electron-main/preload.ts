import os from 'os'
import { contextBridge } from 'electron'
contextBridge.exposeInMainWorld('electronAPI', {
  //这里可以添加配置
  platform: os.platform()
})
