<template>
  <div class="work-flow-io">
    <el-tooltip content="下载 XML">
      <span @click="downloadXml">
        <img src="../../../assets/img/work-flow/download.png" alt="下载XML" />
      </span>
    </el-tooltip>

    <el-tooltip content="下载图片">
      <span @click="downloadImage">
        <img src="../../../assets/img/work-flow/download-img.png" alt="下载图片" />
      </span>
    </el-tooltip>

    <el-tooltip content="上传 XML">
      <span class="upload-xml">
        <input type="file" class="upload" @change="uploadXml" />
        <img src="../../../assets/img/work-flow/upload.png" alt="上传XML" />
      </span>
    </el-tooltip>

    <el-tooltip content="保存">
      <span @click="save">
        <img src="../../../assets/img/work-flow/save.png" alt="保存" />
      </span>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { WorkFlowIoProps } from '../../../props'
import { WorkFlowApi } from '../../../api'
import { useElSuccessMessage } from 'hippo-module-core/hooks'
import type { RequestResultData } from 'hippo-module-core/types'
import type { WorkFlowInfo } from '../../../types'

const props = defineProps(WorkFlowIoProps)

const workFlowInfo = ref<WorkFlowInfo>({
  id: '',
  name: '',
  moduleId: '',
  moduleName: '',
  desc: '',
  workFlowContent: ''
})

watch(
  (): WorkFlowInfo => props.info,
  (newVal: WorkFlowInfo): void => {
    if (newVal) {
      workFlowInfo.value = newVal
    }
  }
)

const save = () => {
  WorkFlowApi.saveWorkFlowInfo(workFlowInfo.value).then((res: RequestResultData<Object>) => {
    if (res.success) {
      useElSuccessMessage('保存成功！')
    }
  })
}

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
