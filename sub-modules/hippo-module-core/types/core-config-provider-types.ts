interface IconSelectConfig {
  svgPath: Record<string, () => Promise<unknown>>[]
}

interface CoreGlobalConfig {
    iconSelectConfig?: IconSelectConfig
}

export type { IconSelectConfig, CoreGlobalConfig }
