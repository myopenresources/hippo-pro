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
        <el-form-item label="流程名" :label-width="'60px'">
          <el-input v-model="queryForm.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="模块" :label-width="'45px'">
          <el-input v-model="queryForm.moduleId" placeholder="请输入" />
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
          <el-table-column prop="name" label="流程名称" />
          <el-table-column prop="moduleName" label="模块" />
          <el-table-column prop="desc" label="描述" />
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
  useBatchDel,
  useDelByIds,
  useElSuccessMessage,
  useElWarningMessage,
  useQueryData
} from 'hippo-module-core/hooks'
import type { RequestPaginationData, RequestResultData } from 'hippo-module-core/types'
import { onMounted, reactive, ref } from 'vue'
import { WorkFlowInfo } from '../../types/work-flow-types'
import WorkFlowApi from '../../api/work-flow-api'
import { useRouter } from 'vue-router'

const router = useRouter()

const queryForm = reactive({
  name: '',
  moduleId: ''
})

const tableSelection = ref<string[]>([])
const tableData = ref<any[]>([])

const add = () => {
  router.push('/CreateWorkFlow')
}

const edit = (id: string) => {}

const view = (id: string) => {}

const batchDel = () => {
  useBatchDel({
    deleFunc: () => {
      del(tableSelection.value)
    }
  })(tableSelection.value)
}

const del = (ids: string[]) => {
  useDelByIds<Object>({
    method: WorkFlowApi.deleteWorkFlowByIds(ids),
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
  queryDataRequestByParams<WorkFlowInfo[]>(
    WorkFlowApi.getWorkFlowListByParams({
      current: current.value,
      size: size.value,
      ...queryForm
    }),
    (data: RequestPaginationData<WorkFlowInfo[]>) => {
      tableData.value = data.list
      total.value = data.total
    }
  )
}
const resetQueryData = () => {
  queryForm.name = ''
  queryForm.moduleId = ''
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

<style scoped lang="scss" src="./WorkFlowList.scss" />
