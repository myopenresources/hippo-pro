<template>
  <WorkFlowGraph ref="workFlowGraphRef" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WorkFlowGraph from './components/WorkFlowGraph.vue'
import { useRoute } from 'vue-router'
import { WorkFlowApi } from '../../api'
import { useViewById } from 'hippo-module-core/hooks'
import type { WorkFlowInfo } from '../../types'

const route = useRoute()
const workFlowGraphRef = ref()

const queryDataById = () => {
  if (route.params && route.params.id) {
    const id = route.params.id
    useViewById<WorkFlowInfo>({
      method: WorkFlowApi.getWorkFlowById(id.toString()),
      beforeCb: () => {},
      afterCb: (data: WorkFlowInfo) => {
        workFlowGraphRef.value.init(data)
      }
    })
  } else {
    workFlowGraphRef.value.init(null)
  }
}

onMounted(() => {
  queryDataById()
})
</script>

<style scoped lang="scss" src="./WorkFlowEdit.scss" />
