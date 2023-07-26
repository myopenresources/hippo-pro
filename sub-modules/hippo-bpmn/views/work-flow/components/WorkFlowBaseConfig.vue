<template>
  <el-form ref="formRef" :model="ruleForm" label-width="60px">
    <el-form-item label="id" prop="id" :rules="[{ required: true, message: 'id不能为空！' }]">
      <el-input
        v-model="ruleForm.id"
        type="text"
        autocomplete="off"
        maxlength="128"
        placeholder="请输入..."
        :disabled="true"
      />
    </el-form-item>
    <el-form-item label="名称" prop="text" :rules="[{ required: false, message: '名称不能为空！' }]">
      <el-input
        v-model="ruleForm.text"
        type="textarea"
        autocomplete="off"
        rows="5"
        maxlength="256"
        placeholder="请输入..."
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const emit = defineEmits(['saveSuccess'])

const formRef = ref<FormInstance>()

const ruleForm = ref({
  id: '',
  text: ''
})

const init = (data: any) => {
  ruleForm.value = {
    id: data.id,
    text: data.text ? data.text.value : ''
  }
}

const save = () => {
  if (!formRef) return
  formRef.value?.validate((valid) => {
    if (valid) {
      emit('saveSuccess', ruleForm.value)
    }
  })
}

defineExpose({
  init
})
</script>
<style lang="scss" scoped></style>
