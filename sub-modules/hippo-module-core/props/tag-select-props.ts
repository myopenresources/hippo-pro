import type { PropType } from 'vue'
import type { TagSelectOption } from '../types'

export const TagSelectProps = {
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
    type: Array as PropType<TagSelectOption[]>,
    default: () => {
      return []
    }
  }
}
