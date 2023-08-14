import { inject, type ComputedRef, computed } from 'vue'
import {
  CORE_CONFIG_PROVIDER_PROPS_KEY,
  type CoreConfigProviderProps
} from '../props/core-config-provider-props'
import type { CoreGlobalConfig, IconSelectConfig } from '../types/core-config-provider-types'

const getCoreConfigProvider = () => {
  const config: CoreConfigProviderProps | null = inject(CORE_CONFIG_PROVIDER_PROPS_KEY, {
    iconSelectConfig: {
      svgPath: []
    }
  })
  return config
}

export const useCoreConfig = () => {
  const config = getCoreConfigProvider()
  return computed((): CoreGlobalConfig => {
    return config ? config : {}
  })
}

export const useIconSelectConfig = () => {
  const config = getCoreConfigProvider()
  return computed((): IconSelectConfig => {
    return config
      ? config.iconSelectConfig
      : {
          svgPath: []
        }
  })
}
