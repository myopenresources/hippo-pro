<template>
    <el-dialog v-model="updatePwdVisible" :width="'500px'" :title="'修改密码'" :draggable="true">
        <template #default>
            <el-form ref="formRef" :model="ruleForm" label-width="100px">
                <el-form-item label="原密码" prop="oldPwd" :rules="[{ required: true, message: '原密码不能为空！' }]">
                    <el-input v-model="ruleForm.oldPwd" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd" :rules="[{ required: true, message: '新密码不能为空！' }]">
                    <el-input v-model="ruleForm.newPwd" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPwd" :rules="[
                    { required: true, message: '确认密码不能为空！' },
                    {
                        validator: validateConfirmPwd, trigger: 'change'
                    }
                ]">
                    <el-input v-model="ruleForm.confirmPwd" type="password" autocomplete="off" />
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
import { UserApi } from '../../api';
import { useElSuccessMessage } from 'hippo-module-core/hooks';
import type { RequestResultData } from 'hippo-module-core/types';

const updatePwdVisible = ref(false)

const formRef = ref<FormInstance>()

const ruleForm = reactive({
    oldPwd: '',
    newPwd: '',
    confirmPwd: ''
})

const validateConfirmPwd = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('确认密码不能为空！'))
    } else if (value !== ruleForm.newPwd) {
        callback(new Error("新密码与确认密码不一致!"))
    } else {
        callback()
    }
}

const showDialog = () => {
    updatePwdVisible.value = true
}

const hideDialog = () => {
    updatePwdVisible.value = false
}

const confirm = () => {
    if (!formRef) return
    formRef.value?.validate((valid) => {
        if (valid) {
            UserApi.updateCurrentUserPwd(ruleForm).then((res: RequestResultData<Object>) => {
                if (res.success) {
                    useElSuccessMessage("保存成功！")
                }
            })
        }
    })
}

defineExpose({
    showDialog,
    hideDialog
})
</script>
  
<style scoped lang="scss">
@import './UpdatePwdDialog.scss';
</style>
  