import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron'
import path from 'path'
let win: BrowserWindow
const logo = path.join(__dirname, '../public/logo.png')
const createWindow = () => {
  win = new BrowserWindow({
    width: 1300,
    height: 800,
    minWidth:960,
    minHeight:600,
    icon: logo,
    frame: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, '../dist-electron/preload.js')
    }
  })

  if (app.isPackaged) {
    Menu.setApplicationMenu(null)
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  } else {
    win.setAutoHideMenuBar(true)
    const url = `http://localhost:5173/`
    win.loadURL(url)
  }

  const tray = new Tray(logo)
  tray.setToolTip('河码桌面')

  const menu = Menu.buildFromTemplate([
    {
      label: '  显示程序  ',
      click: () => {
        win.show()
      }
    },
    {
      label: '  退出程序  ',
      click: () => {
        app.quit()
      }
    }
  ])

  tray.setContextMenu(menu)

  tray.on('click', () => {
    win.show()
  })
  tray.on('double-click', () => {
    win.show()
  })

  win.on('close', (event: any) => {
    if (!win.isFocused()) {
      win.destroy()
    } else {
      event.preventDefault()
      win.hide()
    }
  })
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('window-min', function (event) {
    const win = BrowserWindow.fromId(event.sender.id)
    if (win) {
      win.minimize()
    }
  })

  ipcMain.on('window-max', function (event) {
    const win = BrowserWindow.fromId(event.sender.id)
    if (win) {
      const isMaximized = win.isMaximized()
      if (isMaximized) {
        win.unmaximize()
      } else {
        win.maximize()
      }
    }
  })
})
