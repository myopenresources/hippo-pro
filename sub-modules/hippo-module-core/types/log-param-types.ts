class LogParam {
  moduleName: string = ''
  msg: string = ''
  data?: any = ''
  dev?: boolean = true
  prop?: boolean = true
}

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'LOG'

export type { LogParam,LogLevel }
