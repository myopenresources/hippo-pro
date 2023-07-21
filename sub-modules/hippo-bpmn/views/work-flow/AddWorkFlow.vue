<template>
  <WorkFlowGraph ref="workFlowGraphRef" />
</template>

<script setup lang="ts">
import { onMounted, ref,nextTick } from 'vue'
import WorkFlowGraph from './components/WorkFlowGraph.vue'

const workFlowGraphRef = ref()
onMounted(() => {
  workFlowGraphRef.value.init(null)
})
</script>

<style scoped lang="scss" src="./AddWorkFlow.scss" />
