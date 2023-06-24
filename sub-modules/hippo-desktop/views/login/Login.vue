<template>
    <div class="login-container">
        <div class="login-inner-container">
            <div class="login-box-card">
                <div class="login-flex">
                    <div class="login-img">
                    </div>
                    <div class="login-form-box">
                        <h3 class="login-title">{{ sysTitle }}登录</h3>
                        <el-form ref="loginFormRef" class="login-form" :model="loginForm" :rules="rules" label-width="70px">
                            <el-form-item label="用户名" prop="userNmae">
                                <el-input v-model="loginForm.userNmae" type="text" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="验证码" prop="validateCode">
                                <div class="validate-code">
                                    <el-input v-model="loginForm.validateCode" type="text" autocomplete="off" />
                                    <img :src="validateCode" @click="reloadValidateCode" class="validate-code-img" />
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="login(loginFormRef)">
                                    登录
                                </el-button>
                            </el-form-item>
                        </el-form>

                    </div>
                </div>
                <div class="login-copyright">
                    <div class="app-text-center"> Copyright {{ copyrightDate }} cjh. All Rights Reserved. </div>
                </div>
            </div>
            <div class="login-desc">
                系统仅支持Edge、Google Chrome、Mozilla
                Firefox、Safari以及其它主流的浏览器，如您的浏览器无法使用本系统，请更换其它浏览器！
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { UserStoreUtil } from '../../utils';
import { UserApi } from '../../api';
import type { UserLogin } from '../../types';
import type { RequestResultData } from "hippo-module-core";
import { Environments, useElSuccessMessage, useElWarningMessage } from 'hippo-module-core';
import type { FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue';

const router = useRouter()

const sysTitle = Environments.getEvnProp('VITE_SYS_TITLE') || '河马桌面';

const copyrightDate = new Date().getFullYear()

const loginFormRef = ref<FormInstance>()

const validateCode = ref(UserApi.getValidateCode())

const loginForm = reactive({
    userNmae: Environments.getEvnProp('VITE_USER_NAME') || '',
    password: Environments.getEvnProp('VITE_PASSWORD') || '',
    validateCode: Environments.getEvnProp('VITE_VALIDATE_CODE') || ''
})

const rules = reactive<FormRules>({
    userNmae: [{ required: true, trigger: 'change', message: '请输入用户名！' }],
    password: [{ required: true, trigger: 'change', message: '请输入密码！' }],
    validateCode: [{ required: true, trigger: 'change', message: '请输入验证码！' }],
})

const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            UserApi.login().then((res: RequestResultData<UserLogin>) => {
                if (res.success) {
                    UserStoreUtil.setToken(res.data.token)
                    UserStoreUtil.setRouters(res.data.routers)
                    UserStoreUtil.setMenus(res.data.menus)
                    UserStoreUtil.setCommonMenu(res.data.commonMenus)
                    UserStoreUtil.setUserInfo(res.data.userInfo)
                    useElSuccessMessage('登录成功！')
                    router.push('/StartMenu')
                } else {
                    useElWarningMessage(res.msg)
                }
            })
        } else {
            return false
        }
    })
}

const reloadValidateCode = () => {
    validateCode.value = UserApi.getValidateCode()
}

onMounted(() => {
    const token = UserStoreUtil.getToken()
    if (token) {
        router.push('/StartMenu')
    }
})
</script>

<style scoped lang="scss">
@import './Login.scss'
</style>