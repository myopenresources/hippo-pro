<template>
  <MainContent>
    <div class="create-work-flow">
      <div id="graph" class="create-work-flow-graph"></div>
      <WorkFlowPattern :logic-flow="logicFlow" />
      <WorkFlowIo :logic-flow="logicFlow"/>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
import WorkFlowPattern from './components/WorkFlowPattern.vue'
import WorkFlowIo from './components/WorkFlowIo.vue'

LogicFlow.use(BpmnElement)
LogicFlow.use(BpmnXmlAdapter)
LogicFlow.use(Snapshot)
LogicFlow.use(Control)
LogicFlow.use(Menu)
LogicFlow.use(SelectionSelect)

const logicFlow = ref<LogicFlow>()

const init = () => {
  const container = document.querySelector('#graph')
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

  logicFlow.value.render()
}

onMounted(() => {
  init()
})
</script>

<style scoped lang="scss" src="./CreateWorkFlow.scss" />
