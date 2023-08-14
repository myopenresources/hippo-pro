<script lang="ts">
import { defineComponent, provide, renderSlot } from 'vue'
import { Props, CONFIG_PROVIDER_PROPS_KEY } from '../../props/config-provider-props'
import ThemeStoreUtil from '../../utils/theme-util'
import { CORE_CONFIG_PROVIDER_PROPS_KEY } from 'hippo-module-core'

export default defineComponent({
  name: 'PlatformConfigProvider',
  props: Props,
  setup(props, { slots }) {
    provide(CONFIG_PROVIDER_PROPS_KEY, props)

    provide(CORE_CONFIG_PROVIDER_PROPS_KEY, {
      iconSelectConfig: props.iconSelectConfig
    })

    ThemeStoreUtil.initTheme(props.sysConfig)
    return () => renderSlot(slots, 'default')
  }
})
</script>
