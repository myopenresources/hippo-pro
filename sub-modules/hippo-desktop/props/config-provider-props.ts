import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { SysConfig } from '../types/config-provider-types'
export const Props = {
    sysConfig: {
        type: Object as PropType<SysConfig>,
        default: () => { }
    }
}

export type ConfigProviderProps = ExtractPropTypes<typeof Props>

export const CONFIG_PROVIDER_PROPS_KEY: InjectionKey<ConfigProviderProps> = Symbol(
    'CONFIG_PROVIDER_PROPS_KEY'
)
