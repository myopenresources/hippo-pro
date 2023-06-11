import type { PropType } from 'vue'
import type { SvgProp } from '../types/svg-icon-types'

export const DynamicIconProps = {
  icon: {
    type: String,
    default: ''
  },
  svgProps: {
    type: Object as PropType<SvgProp>,
    default: () => {
      return {
        fill: 'currentColor',
        className: 'svg-icon',
        style: []
      }
    }
  }
}
