<template>
  <div class="work-flow-pattern">
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-selection" @mousedown="openSelection"></div>
      <div class="work-flow-pattern-label">选区</div>
    </div>
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-start" @mousedown="addStartNode"></div>
      <div>开始</div>
    </div>
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-user" @mousedown="addUserTask"></div>
      <div>用户任务</div>
    </div>
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-user" @mousedown="addServiceTask"></div>
      <div>系统任务</div>
    </div>
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-condition" @mousedown="addGateWay"></div>
      <div>条件判断</div>
    </div>
    <div class="work-flow-pattern-item">
      <div class="work-flow-pattern-end" @mousedown="addEndNode"></div>
      <div>结束</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { WorkFlowPatternProps } from '../../../props'
import type LogicFlow from '@logicflow/core';

const props = defineProps(WorkFlowPatternProps)

const addStartNode = () => {
  if (props.logicFlow) {
    props.logicFlow.dnd.startDrag({
      type: 'bpmn:startEvent',
      text: '开始'
    })
  }
}

const addUserTask = () => {
  if (props.logicFlow) {
    props.logicFlow.dnd.startDrag({
      type: 'bpmn:userTask'
    })
  }
}

const addServiceTask = () => {
  if (props.logicFlow) {
    props.logicFlow.dnd.startDrag({
      type: 'bpmn:serviceTask'
    })
  }
}

const addGateWay = () => {
  if (props.logicFlow) {
    props.logicFlow.dnd.startDrag({
      type: 'bpmn:exclusiveGateway'
    })
  }
}

const addEndNode = () => {
  if (props.logicFlow) {
    props.logicFlow.dnd.startDrag({
      type: 'bpmn:endEvent',
      text: '结束'
    })
  }
}

const openSelection = () => {
  if (props.logicFlow) {
    props.logicFlow.updateEditConfig({
      stopMoveGraph: true
    })
  }
}

const init = () => {
  if (props.logicFlow) {
    props.logicFlow.on('selection:selected', () => {
      if (props.logicFlow) {
        props.logicFlow.updateEditConfig({
          stopMoveGraph: false
        })
      }
    })
  }
}

watch(
  (): LogicFlow => props.logicFlow,
  (newVal: LogicFlow): void => {
    if (newVal) {
      init()
    }
  }
)

onMounted(() => {

})
</script>

<style scoped lang="scss" src="./WorkFlowPattern.scss" />
