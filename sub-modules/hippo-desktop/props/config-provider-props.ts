import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { SysConfig } from '../types/config-provider-types'
import type { IconSelectConfig } from 'hippo-module-core/types'
export const Props = {
    sysConfig: {
        type: Object as PropType<SysConfig>,
        default: () => { }
    },
    iconSelectConfig: {
        type: Object as PropType<IconSelectConfig>,
        default: () => {
          return {
            svgPath: []
          }
        }
      }
}

export type ConfigProviderProps = ExtractPropTypes<typeof Props>

export const CONFIG_PROVIDER_PROPS_KEY: InjectionKey<ConfigProviderProps> = Symbol(
    'CONFIG_PROVIDER_PROPS_KEY'
)
