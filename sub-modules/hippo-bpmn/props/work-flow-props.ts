import type { PropType } from 'vue'
import LogicFlow from '@logicflow/core'
import type { WorkFlowInfo } from '../types/work-flow-types'

export const WorkFlowPatternProps = {
  logicFlow: {
    type: Object as PropType<LogicFlow>,
    default: () => {
      return null
    }
  }
}

export const WorkFlowIoProps = {
  logicFlow: {
    type: Object as PropType<LogicFlow>,
    default: () => {
      return null
    }
  },
  info: {
    type: Object as PropType<WorkFlowInfo>,
    default: () => {
      return {
        id: '',
        name: '',
        moduleId: '',
        moduleName: '',
        desc: '',
        workFlowContent: ''
      }
    }
  }
}
