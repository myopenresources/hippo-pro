import os from 'os'
import { contextBridge, ipcRenderer } from 'electron'
contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => {
    ipcRenderer.send("window-min");
  },
  maximize: () => {
    ipcRenderer.send("window-max");
  },
  platform: os.platform()
})
