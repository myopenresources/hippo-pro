import type { PropType } from 'vue'
import type { SelectTagOption } from '../types'

export const SelectTagProps = {
  value: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array as PropType<SelectTagOption[]>,
    default: () => {
      return []
    }
  }
}
