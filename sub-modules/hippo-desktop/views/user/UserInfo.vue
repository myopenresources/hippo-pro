<template>
  <MainContent :title="'个人信息'">
    <div class="user-info-body">
      <el-form ref="formRef" :model="addForm" label-width="100px">
        <el-form-item label="头像" prop="avatar" :rules="[{ required: true, message: '头像不能为空！' }]">
          <div>
            <el-upload action="" :show-file-list="false">
              <div class="user-info-body-avatar">
                <el-avatar :size="150" :src="addForm.avatar" class="user-info-body-avatar-img" />
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
          <el-input v-model="addForm.realName" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="用户名" prop="userName" :rules="[{ required: true, message: '用户名不能为空！' }]">
          <el-input v-model="addForm.userName" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="性别" prop="sex" :rules="[{ required: true, message: '性别不能为空！' }]">
          <el-select v-model="addForm.sex" placeholder="请选择...">
            <el-option :label="'男'" :value="'1'" />
            <el-option :label="'女'" :value="'2'" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" prop="tel" :rules="[{ required: true, message: '手机号不能为空！' }]">
          <el-input v-model="addForm.tel" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :rules="[{ required: true, message: '邮箱不能为空！' }]">
          <el-input v-model="addForm.email" type="text" autocomplete="off" placeholder="请输入..." />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </MainContent>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { UserStoreUtil } from '../../utils';

const formRef = ref<FormInstance>()

const addForm = reactive(UserStoreUtil.getUserInfo())


</script>

<style lang="scss" scoped>
@import './UserInfo.scss';
</style>
