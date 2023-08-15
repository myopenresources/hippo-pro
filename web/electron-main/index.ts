import { app, BrowserWindow } from 'electron'
import path from 'path'
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1300,
    height: 880,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, '../dist-electron/preload.js')
    }
  })
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  } else {
    const url = `http://localhost:5173/`
    win.loadURL(url)
  }
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
