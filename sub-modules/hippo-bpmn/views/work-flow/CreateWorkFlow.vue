<template>
  <MainContent>
    <div class="create-work-flow" id="create-work-flow"></div>
  </MainContent>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'

const init = () => {
  const container = document.querySelector('#create-work-flow')
  console.info(container)
  const lf = new LogicFlow({
    container: container as HTMLElement,
    grid: true
  })

  lf.render({
    nodes: [
      {
        id: '1',
        type: 'rect',
        x: 100,
        y: 100,
        text: '节点1'
      },
      {
        id: '2',
        type: 'circle',
        x: 300,
        y: 200,
        text: '节点2'
      }
    ],
    edges: [
      {
        sourceNodeId: '1',
        targetNodeId: '2',
        type: 'polyline',
        text: '连线'
      }
    ]
  })
}

onMounted(() => {
  init()
})
</script>

<style scoped lang="scss" src="./CreateWorkFlow.scss" />
