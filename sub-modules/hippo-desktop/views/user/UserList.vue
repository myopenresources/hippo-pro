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
        <el-form-item label="用户名" :label-width="'60px'">
          <el-input v-model="queryForm.userName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="姓名" :label-width="'45px'">
          <el-input v-model="queryForm.realName" placeholder="请输入" />
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
          <el-table-column prop="avatar" label="头像" width="65" align="center">
            <template #default="scope">
              <el-avatar :src="scope.row.avatar" />
            </template>
          </el-table-column>
          <el-table-column prop="userName" label="用户名" />
          <el-table-column prop="realName" label="姓名" />
          <el-table-column prop="sex" label="性别" width="80" align="center">
            <template #default="scope">
              <el-tag
                :type="
                  scope.row.sex === '1' ? '' : scope.row.sex === '2' ? 'danger' : 'info'
                "
                >{{ scope.row.sex === '1' ? '男' : scope.row.sex === '2' ? '女' : '未知' }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column prop="createUser" label="创建人" />
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
import type { UserInfo } from '../../types'
import { UserApi } from '../../api'

const queryForm = reactive({
  userName: '',
  realName: ''
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
    method: UserApi.deleteUserByIds(ids),
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
  queryDataRequestByParams<UserInfo[]>(
    UserApi.getUserListByParams({
      current: current.value,
      size: size.value,
      ...queryForm
    }),
    (data: RequestPaginationData<UserInfo[]>) => {
      tableData.value = data.list
      total.value = data.total
    }
  )
}
const resetQueryData = () => {
  queryForm.realName = ''
  queryForm.userName = ''
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
