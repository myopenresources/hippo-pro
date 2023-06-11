import { defineComponent, ref, h } from 'vue'
import { DynamicIconProps } from '../../props/dynamic-icon-props'
import { DynamicIconEnum } from '../../enums/dynamic-icon-enum'
import SvgIcon from '../svg-icon/SvgIcon.vue'
import TsxComponent from '../tsx-component/TsxComponent.vue'

export default defineComponent({
  props: DynamicIconProps,
  setup(props, context) {
    const getIcon = () => {
      if (props.icon.lastIndexOf(DynamicIconEnum.SvgIcon) != -1) {
        return <SvgIcon name={props.icon} fill={props.svgProps.fill} style={props.svgProps.style} />
      } else {
        return (
          <el-icon>
            <TsxComponent componentName={props.icon} />
          </el-icon>
        )
      }
    }

    return () => <>{getIcon()}</>
  }
})
