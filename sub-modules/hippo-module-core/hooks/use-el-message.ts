export const useElMessage = (options: any) => {
  //@ts-ignore
  return ElMessage(options)
}

export const useElSuccessMessage = (msg: string) => {
  //@ts-ignore
  return ElMessage.success(msg)
}



export const useElWarningMessage = (msg: string) => {
  //@ts-ignore
  return ElMessage.warning(msg)
}


export const useElErrorMessage = (msg: string) => {
  //@ts-ignore
  return ElMessage.error(msg)
}
