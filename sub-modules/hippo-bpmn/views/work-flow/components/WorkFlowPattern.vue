<template>
  <div class="work-flow-pattern">
    <div class="work-flow-pattern-item work-flow-pattern-item-default" :class="{
      'work-flow-pattern-item-selected': isStopMoveGraph
    }" @mousedown="openSelection">
      <div class="work-flow-pattern-selection"></div>
      <div class="work-flow-pattern-label">选区</div>
    </div>
    <div class="work-flow-pattern-item" @mousedown="addStartNode">
      <div class="work-flow-pattern-start"></div>
      <div class="work-flow-pattern-label">开始</div>
    </div>
    <div class="work-flow-pattern-item" @mousedown="addUserTask">
      <div class="work-flow-pattern-user"></div>
      <div class="work-flow-pattern-label">用户任务</div>
    </div>
    <div class="work-flow-pattern-item" @mousedown="addServiceTask">
      <div class="work-flow-pattern-sys"></div>
      <div class="work-flow-pattern-label">系统任务</div>
    </div>
    <div class="work-flow-pattern-item" @mousedown="addGateWay">
      <div class="work-flow-pattern-condition"></div>
      <div class="work-flow-pattern-label">条件判断</div>
    </div>
    <div class="work-flow-pattern-item" @mousedown="addEndNode">
      <div class="work-flow-pattern-end"></div>
      <div class="work-flow-pattern-label">结束</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { WorkFlowPatternProps } from '../../../props'
import type LogicFlow from '@logicflow/core'

const props = defineProps(WorkFlowPatternProps)

const isStopMoveGraph = computed(() => {
  return props.logicFlow &&
    props.logicFlow.getEditConfig() &&
    props.logicFlow.getEditConfig().stopMoveGraph
    ? props.logicFlow.getEditConfig().stopMoveGraph
    : false
})

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

onMounted(() => { })
</script>

<style scoped lang="scss" src="./WorkFlowPattern.scss" />
