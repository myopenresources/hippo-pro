import type { ElMessageBoxOptions } from 'element-plus'

export const useElAlertMessageBox = (
  msg: string,
  title: string = '提示',
  options?: ElMessageBoxOptions | undefined
) => {
  //@ts-ignore
  return ElMessageBox.alert(msg, title, options)
}

export const useElConfirmMessageBox = (
  msg: string,
  title: string = '提示',
  options?: ElMessageBoxOptions | undefined
) => {
  //@ts-ignore
  return ElMessageBox.confirm(msg, title, options)
}
