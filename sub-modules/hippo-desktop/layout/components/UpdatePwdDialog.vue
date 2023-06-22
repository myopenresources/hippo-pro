<template>
    <el-dialog v-model="updatePwdVisible" :width="'500px'" :title="'修改密码'" :draggable="true">
        <template #default>
            <el-form ref="formRef" :model="addForm" label-width="100px">
                <el-form-item label="原密码" prop="oldPwd" :rules="[{ required: true, message: '原密码不能为空！' }]">
                    <el-input v-model="addForm.oldPwd" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd" :rules="[{ required: true, message: '新密码不能为空！' }]">
                    <el-input v-model="addForm.newPwd" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPwd" :rules="[{ required: true, message: '确认密码不能为空！' }]">
                    <el-input v-model="addForm.confirmPwd" type="password" autocomplete="off" />
                </el-form-item>
            </el-form>
        </template>
        <template #footer>
            <el-button @click="hideDialog">取消</el-button>
            <el-button type="primary" @click="confirm"> 确定 </el-button>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const updatePwdVisible = ref(false)

const formRef = ref<FormInstance>()

const addForm = reactive({
    oldPwd: '',
    newPwd: '',
    confirmPwd: ''
})

const showDialog = () => {
    updatePwdVisible.value = true
}

const hideDialog = () => {
    updatePwdVisible.value = false
}

const confirm = () => { }

defineExpose({
    showDialog,
    hideDialog
})
</script>
  
<style scoped lang="scss">
@import './UpdatePwdDialog.scss';
</style>
  