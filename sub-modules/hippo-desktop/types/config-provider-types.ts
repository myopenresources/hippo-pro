

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
    sysConfig?: SysConfig
}

export type { SysConfig, GlobalConfig }
