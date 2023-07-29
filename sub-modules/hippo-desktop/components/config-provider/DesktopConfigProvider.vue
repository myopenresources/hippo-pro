<script lang="ts">
import { defineComponent, provide, renderSlot } from 'vue'
import { Props, CONFIG_PROVIDER_PROPS_KEY } from '../../props/config-provider-props'
import ThemeStoreUtil from '../../utils/theme-util'

export default defineComponent({
  name: 'PlatformConfigProvider',
  props: Props,
  setup(props, { slots }) {
    provide(CONFIG_PROVIDER_PROPS_KEY, props)
    ThemeStoreUtil.initTheme(props.sysConfig.defaultTheme, props.sysConfig.defaultStyleTheme)
    return () => renderSlot(slots, 'default')
  }
})
</script>
