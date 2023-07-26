<template>
  <div class="work-flow-config" v-if="visible">
    <div class="work-flow-config-header">
      <div class="title">元素配置</div>
      <div class="close" @click="close">
        <DynamicIcon icon="Close" />
      </div>
    </div>
    <div class="work-flow-config-body">
      <component :is="component[dataInfo.type]" ref="workFlowConfigRef" @save-success="saveSuccess" />
    </div>
    <div class="work-flow-config-footer"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import WorkFlowStartEventConfig from './WorkFlowStartEventConfig.vue'
import WorkFlowEndEventConfig from './WorkFlowEndEventConfig.vue'
import WorkFlowUserTaskConfig from './WorkFlowUserTaskConfig.vue'
import WorkFlowServiceTaskConfig from './WorkFlowServiceTaskConfig.vue'
import WorkFlowExclusiveGatewayConfig from './WorkFlowExclusiveGatewayConfig.vue'
const emit = defineEmits(['saveSuccess'])

const visible = ref(false)
const workFlowConfigRef = ref()

const dataInfo = ref<any>()

const component: any = {
  'bpmn:startEvent': WorkFlowStartEventConfig,
  'bpmn:endEvent': WorkFlowEndEventConfig,
  'bpmn:userTask': WorkFlowUserTaskConfig,
  'bpmn:serviceTask': WorkFlowServiceTaskConfig,
  'bpmn:exclusiveGateway': WorkFlowExclusiveGatewayConfig
}

const close = () => {
  visible.value = false
}
const open = (data: any) => {
  dataInfo.value = data
  console.log(data)
  visible.value = true

  nextTick(() => {
    if (workFlowConfigRef.value) {
      workFlowConfigRef.value.init(data)
    }
  })
}

const saveSuccess = (data: any) => {
  emit('saveSuccess', data)
}

defineExpose({
  open,
  close
})
</script>

<style lang="scss" scoped>
@import './WorkFlowConfig.scss';
</style>
