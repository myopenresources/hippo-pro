import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { IconSelectConfig } from '../types/core-config-provider-types'

export const Props = {
  iconSelectConfig: {
    type: Object as PropType<IconSelectConfig>,
    default: () => {
      return {
        svgPath: []
      }
    }
  }
}

export type CoreConfigProviderProps = ExtractPropTypes<typeof Props>

export const CORE_CONFIG_PROVIDER_PROPS_KEY: InjectionKey<CoreConfigProviderProps> = Symbol(
  'CORE_CONFIG_PROVIDER_PROPS_KEY'
)
