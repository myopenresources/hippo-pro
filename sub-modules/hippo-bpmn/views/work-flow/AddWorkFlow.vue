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
import { onActivated, onMounted, ref } from 'vue'
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

import WorkFlowPattern from './components/WorkFlowPattern.vue'
import WorkFlowIo from './components/WorkFlowIo.vue'
import { useRoute } from 'vue-router'
import { WorkFlowApi } from '../../api'
import { useViewById } from 'hippo-module-core/hooks'
import type { WorkFlowInfo } from '../../types'

LogicFlow.use(BpmnElement)
LogicFlow.use(BpmnXmlAdapter)
LogicFlow.use(Snapshot)
LogicFlow.use(Control)
LogicFlow.use(Menu)
LogicFlow.use(SelectionSelect)

const route = useRoute()

const logicFlow = ref<LogicFlow>()
const graphRef = ref()
const workFlowInfo = ref<WorkFlowInfo>()

const init = () => {
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

const queryDataById = () => {
  if (route.params && route.params.id) {
    const id = route.params.id
    useViewById<WorkFlowInfo>({
      method: WorkFlowApi.getWorkFlowById(id.toString()),
      beforeCb: () => {},
      afterCb: (data: WorkFlowInfo) => {
        workFlowInfo.value = data
        init()
      }
    })
  } else {
    init()
  }
}

onActivated(() => {
  queryDataById()
})

onMounted(() => {
  queryDataById()
})
</script>

<style scoped lang="scss" src="./AddWorkFlow.scss" />
