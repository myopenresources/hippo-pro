import { logStyleConst } from '../consts/log-const'
import type { LogLevel, LogParam } from '../types'

/**
 * 日志工具
 */
export default class LogUtil {
  /**
   * 公共日志实现
   * @param params
   */
  static print(params: LogParam, level: LogLevel) {
    const defaultParams = {
      moduleName: '',
      msg: '',
      dev: true,
      prop: true
    }

    const distParams = Object.assign(defaultParams, params)

    // @ts-ignore
    if ((distParams.dev && import.meta.env.DEV) || (distParams.prop && import.meta.env.PROD)) {
      const log = `${new Date().toLocaleString()}  ${level}  ${distParams.moduleName} : ${
        distParams.msg
      } `
      console.log(
        `%c Hippo Pro %c ${log}  `,
        'color:#fff;font-size:13px;background: linear-gradient(88deg, #18bbff 10%, #06bfcc 50%);border-radius: 4px;padding:1px;margin:4px',
        logStyleConst[level]
      )

      if (distParams.data) {
        console.log('%c%o', logStyleConst[level], distParams.data)
      }
    }
  }

  /**
   * 信息日志
   * @param params
   */
  static info(params: LogParam) {
    LogUtil.print(params, 'INFO')
  }

  /**
   * 告警日志
   * @param params
   */
  static warn(params: LogParam) {
    LogUtil.print(params, 'WARN')
  }

  /**
   * 错误日志
   * @param params
   */
  static error(params: LogParam) {
    LogUtil.print(params, 'ERROR')
  }

  /**
   * 普通日志
   * @param params
   */
  static log(params: LogParam) {
    LogUtil.print(params, 'LOG')
  }
}
