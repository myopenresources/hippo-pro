import { defineComponent, ref, h } from 'vue'
import { SvgIconProps } from '../../props'
import { CommonUtil } from '../../utils'
import './SvgIcon.scss'

export default defineComponent({
  props: SvgIconProps,
  setup(props, context) {
    return () => (
      <>
        {
          <svg aria-hidden={true} class={props.className} style={props.style}>
            <use href={'#' + CommonUtil.svgIconToLowerCase(props.name + '')} fill={props.fill} />
          </svg>
        }
      </>
    )
  }
})
