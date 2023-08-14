import { inject, type ComputedRef, computed } from 'vue'
import { type ConfigProviderProps, CONFIG_PROVIDER_PROPS_KEY } from '../props/config-provider-props'
import type { SysConfig, GlobalConfig } from '../types/config-provider-types'

const getConfigProvider = () => {
  const config: ConfigProviderProps | null = inject(CONFIG_PROVIDER_PROPS_KEY, {
    sysConfig: {
      defaultAvatar: '',
      defaultThemeScheme: '',
      defaultTheme: '',
      defaultStyleTheme: '',
      loginPath: '',
      homePath: ''
    },
    iconSelectConfig: {
      svgPath: []
    }
  })
  return config
}

export const useConfig = () => {
  const config = getConfigProvider()
  return computed((): GlobalConfig => {
    return config ? config : {}
  })
}

export const useSysConfig = (): ComputedRef<SysConfig> => {
  const config = getConfigProvider()
  return computed((): SysConfig => {
    return config && config.sysConfig
      ? config.sysConfig
      : {
          defaultAvatar: '',
          defaultThemeScheme: '',
          defaultTheme: '',
          defaultStyleTheme: '',
          loginPath: '',
          homePath: ''
        }
  })
}
