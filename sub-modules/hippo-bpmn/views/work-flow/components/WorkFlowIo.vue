<template>
  <div class="work-flow-io">
    <span title="下载 XML" @mousedown="downloadXml">
      <img src="../../../assets/img/work-flow/download.png" alt="下载XML" />
    </span>
    <span id="download-img" title="下载图片" @mousedown="downloadImage">
      <img src="../../../assets/img/work-flow/download-img.png" alt="下载图片" />
    </span>
    <span class="upload-xml" title="上传 XML">
      <input type="file" class="upload" @change="uploadXml" />
      <img src="../../../assets/img/work-flow/upload.png" alt="上传XML" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { WorkFlowPatternProps } from '../../../props'

const props = defineProps(WorkFlowPatternProps)

const download = (filename: string, text: string) => {
  var element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

const downloadXml = () => {
  if (props.logicFlow) {
    const data = props.logicFlow.getGraphData() as string
    download('workFlow.xml', data)
  }
}

const uploadXml = (ev: Event) => {
  const file = (ev.target as any).files[0]
  const reader = new FileReader()
  reader.onload = (event: ProgressEvent<FileReader>) => {
    if (event.target) {
      const xml = event.target.result as string
      if (props.logicFlow) {
        props.logicFlow.render(xml)
      }
    }
  }
  reader.readAsText(file) // you could also read images and other binaries
}

const downloadImage = () => {
  if (props.logicFlow) {
    props.logicFlow.getSnapshot()
  }
}

const init = () => {}

onMounted(() => {
  init()
})
</script>

<style scoped lang="scss" src="./WorkFlowIo.scss" />
