import type { PropType } from 'vue'
import LogicFlow from '@logicflow/core'

export const WorkFlowPatternProps = {
  logicFlow: {
    type: Object as PropType<LogicFlow>,
    default: () => {
      return null
    }
  }
}
