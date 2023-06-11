import type { CSSProperties, PropType } from "vue";

export const SvgIconProps = {
  name: {
    type: String,
    required: true
  },
  fill: {
    type: String,
    default: 'currentColor'
  },
  className: {
    type: String,
    default: 'svg-icon'
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => {}
  }
}
