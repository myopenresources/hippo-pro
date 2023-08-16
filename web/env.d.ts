/// <reference types="vite/client" />
declare module '*.vue'
declare module 'pinia-plugin-persist'

export interface IElectronAPI {
  platform: string,
  minimize:Function,
  maximize:Function,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
