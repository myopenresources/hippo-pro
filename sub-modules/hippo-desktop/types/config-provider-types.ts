import type { IconSelectConfig } from "hippo-module-core/types"


interface SysConfig {
    defaultThemeScheme:string
    defaultTheme: string
    defaultStyleTheme: string
    logo?: string
    title?: string
    loginPath: string
    homePath: string
    defaultAvatar: string
}



interface GlobalConfig {
    sysConfig?: SysConfig,
    iconSelectConfig?:IconSelectConfig
}

export type { SysConfig, GlobalConfig }
