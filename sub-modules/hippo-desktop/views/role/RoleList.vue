<template>
    <MainContent>
      <div class="desktop-container">
        <el-form
          :inline="true"
          :model="queryForm"
          class="desktop-query-form"
          :label-width="'80px'"
          label-position="left"
        >
          <el-form-item label="角色名" :label-width="'60px'">
            <el-input v-model="queryForm.roleName" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="类型" :label-width="'45px'">
            <el-select v-model="queryForm.roleType" placeholder="请选择">
            <el-option :key="'system'" :label="'系统角色'" :value="'system'" />
            <el-option :key="'business'" :label="'业务角色'" :value="'business'" />
          </el-select>
          </el-form-item>
          <el-form-item class="desktop-query-form-btns">
            <el-button type="primary" @click="queryData()">查询</el-button>
            <el-button type="default" @click="resetQueryData()">重置</el-button>
          </el-form-item>
        </el-form>
  
        <div class="desktop-toolbar">
          <div class="desktop-toolbar-left">
            <el-button type="primary" icon="Plus" plain @click="add()">新增</el-button>
            <el-button type="danger" icon="Delete" plain @click="batchDel()">批量删除</el-button>
          </div>
        </div>
  
        <div class="desktop-data-table">
          <el-table
            :data="tableData"
            :border="true"
            :stripe="true"
            v-loading="loading"
            @selection-change="tableHandleSelectionChange"
          >
            <el-table-column type="selection" width="43" />
            <el-table-column prop="roleName" label="角色名" />
            <el-table-column prop="roleTypeName" label="类型" />
            <el-table-column prop="createRole" label="创建人" />
            <el-table-column prop="createDate" label="创建时间" />
            <el-table-column fixed="right" label="操作" width="250">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="edit(scope.row.id)"
                  >修改</el-button
                >
                <el-button link type="primary" size="small" @click="view(scope.row.id)"
                  >查看</el-button
                >
                <el-button link type="primary" size="small" @click="del([scope.row.id])"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="desktop-data-pagination">
          <el-pagination
            :background="background"
            :total="total"
            :layout="layout"
            @size-change="pageSizeChange"
            @current-change="pageCurrentChange"
          />
        </div>
      </div>
    </MainContent>
  </template>
  
  <script setup lang="ts">
  import {
    useAddOpen,
    useBatchDel,
    useDelByIds,
    useElSuccessMessage,
    useElWarningMessage,
    useQueryData,
    useViewOpen
  } from 'hippo-module-core/hooks'
  import type { RequestPaginationData, RequestResultData } from 'hippo-module-core/types'
  import { onMounted, reactive, ref } from 'vue'
  import type { RoleInfo } from '../../types'
  import { RoleApi } from '../../api'
  
  const queryForm = reactive({
    roleName: '',
    roleType: ''
  })
  
  const tableSelection = ref<string[]>([])
  const tableData = ref<any[]>([])
  
  const { addVisible, currentAddRowId, add, edit } = useAddOpen()
  const { currentViewRowId, viewVisible, view } = useViewOpen()
  
  const batchDel = () => {
    useBatchDel({
      deleFunc: () => {
        del(tableSelection.value)
      }
    })(tableSelection.value)
  }
  
  const del = (ids: string[]) => {
    useDelByIds<Object>({
      method: RoleApi.deleteRoleByIds(ids),
      beforeCb: () => {
        loading.value = true
      },
      afterCb: (res: RequestResultData<Object>) => {
        loading.value = false
        if (res) {
          tableSelection.value = []
          useElSuccessMessage('删除成功！')
          queryData()
        } else {
          useElWarningMessage('删除失败！')
        }
      }
    })()
  }
  
  const queryData = () => {
    queryDataRequestByParams<RoleInfo[]>(
      RoleApi.getRoleListByParams({
        current: current.value,
        size: size.value,
        ...queryForm
      }),
      (data: RequestPaginationData<RoleInfo[]>) => {
        tableData.value = data.list
        total.value = data.total
      }
    )
  }
  const resetQueryData = () => {
    queryForm.roleType = ''
    queryForm.roleName = ''
    queryData()
  }
  
  const {
    current,
    size,
    total,
    layout,
    background,
    loading,
    pageSizeChange,
    pageCurrentChange,
    queryDataRequestByParams,
    tableHandleSelectionChange
  } = useQueryData({
    queryData,
    selectionChangeKey: 'id',
    selectionChangeCb: (vals: string[]) => {
      tableSelection.value = vals
    }
  })
  
  onMounted(() => {
    queryData()
  })
  </script>
  
  <style scoped lang="scss"></style>
  