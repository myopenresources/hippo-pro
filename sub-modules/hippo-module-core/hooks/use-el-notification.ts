export const useElNotification = (options: any) => {
  //@ts-ignore
  return ElNotification(options)
}

export const useElSuccessNotification = (options: any) => {
  //@ts-ignore
  return ElNotification({
    title: '提示',
    type: 'success',
    ...options
  })
}

export const useElWarningNotification = (options: any) => {
  //@ts-ignore
  return ElNotification({
    title: '提示',
    type: 'warning',
    ...options
  })
}

export const useElInfoNotification = (options: any) => {
  //@ts-ignore
  return ElNotification({
    title: '提示',
    type: 'info',
    ...options
  })
}

export const useElErrorNotification = (options: any) => {
  //@ts-ignore
  return ElNotification({
    title: '提示',
    type: 'error',
    ...options
  })
}
