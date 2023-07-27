<template>
  <div class="work-flow-io">
    <div class="title">流程配置</div>
    <div class="tools">
      <el-tooltip content="上传 XML">
        <div class="upload-xml">
          <input type="file" class="upload" @change="uploadXml" />
          <DynamicIcon icon="SvgIconUpload" />
        </div>
      </el-tooltip>

      <el-tooltip content="下载 XML">
        <div @click="downloadXml">
          <DynamicIcon icon="SvgIconDownload" />
        </div>
      </el-tooltip>

      <el-tooltip content="下载图片">
        <div @click="downloadImage">
          <DynamicIcon icon="SvgIconDownloadImg" />
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { WorkFlowIoProps } from '../../../props'

const props = defineProps(WorkFlowIoProps)

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
