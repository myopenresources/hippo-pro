<template>
  <MainContent :bodyStyle="{}">
    <div class="create-work-flow">
      <div class="create-work-flow-box">
        <div class="create-work-flow-graph" ref="graphRef"></div>
        <WorkFlowPattern :logic-flow="logicFlow" />
      </div>
      <div class="create-work-flow-form">
        <WorkFlowIo :logic-flow="logicFlow" />
        <el-form ref="formRef" :model="ruleForm" label-width="60px">
          <el-form-item
            label="名称"
            prop="name"
            :rules="[{ required: true, message: '名称不能为空！' }]"
          >
            <el-input v-model="ruleForm.name" type="text" autocomplete="off" maxlength="128" />
          </el-form-item>
          <el-form-item
            label="模块"
            prop="moduleId"
            :rules="[{ required: true, message: '模块不能为空！' }]"
          >
            <el-select v-model="ruleForm.moduleId" placeholder="请选择" style="width: 100%">
              <el-option :key="'module1'" :label="'模块1'" :value="'module1'" />
              <el-option :key="'module2'" :label="'模块2'" :value="'module2'" />
              <el-option :key="'module3'" :label="'模块3'" :value="'module3'" />
            </el-select>
          </el-form-item>
          <el-form-item
            label="描述"
            prop="desc"
            :rules="[{ required: false, message: '描述不能为空！' }]"
          >
            <el-input v-model="ruleForm.desc" type="textarea" rows="12" maxlength="512" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save"> 确定 </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect
} from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/es/style/index.css'

import WorkFlowPattern from './WorkFlowPattern.vue'
import WorkFlowIo from './WorkFlowIo.vue'
import type { WorkFlowInfo } from '../../../types'
import { WorkFlowApi } from '../../../api'
import type { RequestResultData } from 'hippo-module-core/types'
import { useElSuccessMessage } from 'hippo-module-core/hooks'
import type { FormInstance } from 'element-plus'

LogicFlow.use(BpmnElement)
LogicFlow.use(BpmnXmlAdapter)
LogicFlow.use(Snapshot)
LogicFlow.use(Control)
LogicFlow.use(Menu)
LogicFlow.use(SelectionSelect)

const logicFlow = ref<LogicFlow>()
const graphRef = ref()

const formRef = ref<FormInstance>()

const ruleForm = ref({
  id: '',
  name: '',
  moduleId: '',
  moduleName: '',
  desc: '',
  workFlowContent: ''
})

const init = (info: WorkFlowInfo) => {
  if (info) {
    ruleForm.value = info
  }

  const container = graphRef.value
  logicFlow.value = new LogicFlow({
    container: container as HTMLElement,
    stopScrollGraph: true,
    stopZoomGraph: true,
    metaKeyMultipleSelected: true,
    grid: {
      size: 10,
      type: 'dot'
    },
    keyboard: {
      enabled: true
    },
    snapline: true
  })

  if (ruleForm.value) {
    logicFlow.value.render(ruleForm.value.workFlowContent)
  } else {
    logicFlow.value.render()
  }
}

const save = () => {
  if (!formRef) return
  formRef.value?.validate((valid) => {
    if (valid) {
      WorkFlowApi.saveWorkFlowInfo(ruleForm.value).then((res: RequestResultData<Object>) => {
        if (res.success) {
          useElSuccessMessage('保存成功！')
        }
      })
    }
  })
}

defineExpose({
  init
})
</script>

<style scoped lang="scss" src="./WorkFlowGraph.scss" />
