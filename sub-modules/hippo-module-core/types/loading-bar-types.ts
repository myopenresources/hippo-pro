import type { CSSProperties, Component } from 'vue'

interface LoadingBar {
  width?: String
  height?: String
  displayWidth?: String
  displaySpeed?: String
  destroyOnClose?: boolean
  content?: Function | undefined
  label?: String
  modal?: Boolean
  zIndex?: Number
  beforeClose?: Function
  beforeOpen?: Function
  barStyle?: CSSProperties
  barLabelStyle?: CSSProperties
}

export type { LoadingBar }
