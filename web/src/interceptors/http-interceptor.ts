import { AxiosUtil, doneProgress,progressConfigure, startProgress } from 'hippo-module-core'
import type { Router } from 'vue-router'

progressConfigure({
  showSpinner: false
})

const registerHttpInterceptor = (router: Router) => {
  //HTTPrequest拦截
  AxiosUtil.interceptors.request.use(
    (config: any) => {
      startProgress()
      return config
    },
    (error) => {
      doneProgress()
      return Promise.reject(error)
    }
  )

  //HTTPresponse拦截
  AxiosUtil.interceptors.response.use(
    (res) => {
      doneProgress()
      return res
    },
    (error) => {
      doneProgress()
      return Promise.reject(new Error(error))
    }
  )
}

export default registerHttpInterceptor
