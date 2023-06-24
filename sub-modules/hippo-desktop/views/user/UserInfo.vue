<template>
  <MainContent :title="'个人信息'">
    <div class="user-info-body">
      <el-form ref="formRef" :model="ruleForm" label-width="100px">
        <el-form-item label="头像" prop="avatar" :rules="[{ required: true, message: '头像不能为空！' }]">
          <div>
            <el-upload action="" :show-file-list="false">
              <div class="user-info-body-avatar">
                <el-avatar :size="150" :src="ruleForm.avatar" class="user-info-body-avatar-img" />
                <div class="user-info-body-avatar-btns">
                  <el-button link type="primary">
                    <DynamicIcon :icon="'CirclePlus'" />
                  </el-button>
                </div>
              </div>
            </el-upload>
            <div class="user-info-body-avatar-tip">只能上传jpg/png用户头像，且不超过500kb</div>
          </div>
        </el-form-item>
        <el-form-item label="姓名" prop="realName" :rules="[{ required: true, message: '姓名不能为空！' }]">
          <el-input v-model="ruleForm.realName" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="用户名" prop="userName" :rules="[{ required: true, message: '用户名不能为空！' }]">
          <el-input v-model="ruleForm.userName" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="性别" prop="sex" :rules="[{ required: true, message: '性别不能为空！' }]">
          <el-select v-model="ruleForm.sex" placeholder="请选择...">
            <el-option :label="'男'" :value="'1'" />
            <el-option :label="'女'" :value="'2'" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" prop="tel" :rules="[
          { required: true, message: '手机号不能为空！' },
          {
            validator: validateTel, trigger: 'change'
          }
        ]">
          <el-input v-model="ruleForm.tel" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :rules="[
          { required: true, message: '邮箱不能为空！' },
          {
            validator: validateEmail, trigger: 'change'
          }
        ]">
          <el-input v-model="ruleForm.email" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </MainContent>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { UserStoreUtil } from '../../utils';
import { ValidateUtil, useElSuccessMessage } from 'hippo-module-core';
import { UserApi } from '../../api';
import type { RequestResultData } from "hippo-module-core";

const formRef = ref<FormInstance>()

const ruleForm = reactive(UserStoreUtil.getUserInfo())

const validateTel = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('手机号不能为空！'))
  } else if (!ValidateUtil.validateTel(value)) {
    callback(new Error("手机密码格式不正确!"))
  } else {
    callback()
  }
}

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('邮箱不能为空！'))
  } else if (!ValidateUtil.validateEmail(value)) {
    callback(new Error("邮箱格式不正确!"))
  } else {
    callback()
  }
}

const save = () => {
  if (!formRef) return
  formRef.value?.validate((valid) => {
    if (valid) {
      UserApi.updateCurrentUserInfo(ruleForm).then((res: RequestResultData<Object>) => {
        if (res.success) {
          useElSuccessMessage("保存成功！")
        }
      })
    }
  })
}

</script>

<style lang="scss" scoped>
@import './UserInfo.scss';
</style>
