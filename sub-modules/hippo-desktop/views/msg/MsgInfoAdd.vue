<template>
  <el-dialog v-model="isVisible" :title="id ? '编辑' : '新增'" @open="open">
    <template #default>
      <el-form ref="formRef" :model="ruleForm" label-width="100px">
        <el-form-item
          label="标题"
          prop="msgTitle"
          :rules="[{ required: true, message: '标题不能为空！' }]"
        >
          <el-input v-model="ruleForm.msgTitle" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="消息类型"
          prop="msgTypeId"
          :rules="[{ required: true, message: '消息类型不能为空！' }]"
        >
          <el-select v-model="ruleForm.msgTypeId" placeholder="请选择" style="width: 100%;">
            <el-option :key="'system'" :label="'系统消息'" :value="'system'" />
            <el-option :key="'business'" :label="'业务消息'" :value="'business'" />
            <el-option :key="'alarm'" :label="'告警消息'" :value="'alarm'" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="消息内容"
          prop="msgContent"
          :rules="[{ required: true, message: '消息内容不能为空！' }]"
        >
          <el-input v-model="ruleForm.msgContent" type="textarea" rows="12" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click="confirm"> 确定 </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {
  useViewById,
  useVisible,
  type RequestResultData,
  useElSuccessMessage
} from 'hippo-module-core'
import { reactive, ref, toRef } from 'vue'
import type { MsgInfo } from '../../types'
import { MsgApi } from '../../api'
import type { FormInstance } from 'element-plus'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: ''
  }
})

const formRef = ref<FormInstance>()

const ruleForm = ref({
  msgTitle: '',
  msgTypeId: '',
  msgContent: ''
})

const loading = ref(false)

const emit = defineEmits(['update:visible', 'onReload'])
const { isVisible, visibleHandle } = useVisible(toRef(props, 'visible'), emit)

const open = () => {
  formRef.value?.resetFields()
  if (props.id && props.id.length) {
    view(props.id)
  }
}

const view = (id: string) => {
  useViewById<MsgInfo>({
    method: MsgApi.getUserMsgById(id.toString()),
    beforeCb: () => {
      loading.value = true
    },
    afterCb: (msg: MsgInfo) => {
      ruleForm.value = msg
      loading.value = false
      emit('onReload')
    }
  })
}

const cancel = () => {
  visibleHandle()
}

const confirm = () => {
  if (!formRef) return
  formRef.value?.validate((valid) => {
    if (valid) {
      MsgApi.saveMsgInfo({
        id: props.id,
        ...ruleForm.value
      }).then((res: RequestResultData<Object>) => {
        if (res.success) {
          cancel()
          useElSuccessMessage('保存成功！')
        }
      })
    }
  })
}
</script>

<style scoped lang="scss"></style>
