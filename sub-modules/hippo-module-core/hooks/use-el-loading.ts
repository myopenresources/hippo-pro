import type { LoadingOptions } from 'element-plus'
export const useElLoading = (options: LoadingOptions) => {
  //@ts-ignore
  return ElLoading.service(options)
}
