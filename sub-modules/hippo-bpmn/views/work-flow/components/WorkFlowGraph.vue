<template>
  <MainContent>
    <div class="create-work-flow">
      <div class="create-work-flow-graph" ref="graphRef"></div>
      <WorkFlowPattern :logic-flow="logicFlow" />
      <WorkFlowIo :logic-flow="logicFlow" />
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect
} from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/es/style/index.css'

import WorkFlowPattern from './WorkFlowPattern.vue'
import WorkFlowIo from './WorkFlowIo.vue'
import type { WorkFlowInfo } from '../../../types'

LogicFlow.use(BpmnElement)
LogicFlow.use(BpmnXmlAdapter)
LogicFlow.use(Snapshot)
LogicFlow.use(Control)
LogicFlow.use(Menu)
LogicFlow.use(SelectionSelect)

const logicFlow = ref<LogicFlow>()
const graphRef = ref()
const workFlowInfo = ref<WorkFlowInfo>({
  id: '',
  name: '',
  moduleId: '',
  moduleName: '',
  desc: '',
  workFlowContent: ''
})

const init = (info: WorkFlowInfo) => {
  workFlowInfo.value = info

  const container = graphRef.value
  logicFlow.value = new LogicFlow({
    container: container as HTMLElement,
    stopScrollGraph: true,
    stopZoomGraph: true,
    metaKeyMultipleSelected: true,
    grid: {
      size: 10,
      type: 'dot'
    },
    keyboard: {
      enabled: true
    },
    snapline: true
  })

  if (workFlowInfo.value) {
    logicFlow.value.render(workFlowInfo.value.workFlowContent)
  } else {
    logicFlow.value.render()
  }
}


defineExpose({
  init
})
</script>

<style scoped lang="scss" src="./WorkFlowGraph.scss" />
