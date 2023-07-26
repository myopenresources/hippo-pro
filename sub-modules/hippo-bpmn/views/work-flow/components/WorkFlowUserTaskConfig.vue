<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="基础配置" name="base">
      <WorkFlowBaseConfig ref="workFlowBaseConfigRef" @save-success="saveSuccess" />
    </el-tab-pane>
    <el-tab-pane label="监听器" name="monitor"> </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, nextTick } from 'vue'
import WorkFlowBaseConfig from './WorkFlowBaseConfig.vue'
const emit = defineEmits(['saveSuccess'])

const activeName = ref('base')
const nodeData = ref<any>()

const workFlowBaseConfigRef = ref()

const init = (data: any) => {
  nodeData.value = data
  nextTick(() => {
    if (workFlowBaseConfigRef.value) {
      workFlowBaseConfigRef.value.init(data)
    }
  })
}

const saveSuccess = (data: any) => {
  emit('saveSuccess', data)
}

defineExpose({
  init
})
</script>
<style lang="scss" scoped></style>
