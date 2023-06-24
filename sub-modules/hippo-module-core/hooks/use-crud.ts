import { useElConfirmMessageBox } from './use-el-message-box'
import { useElErrorMessage, useElWarningMessage } from './use-el-message'
import { usePagination } from './use-pagination'
import { useTable } from './use-table'
import { ref } from 'vue'
import type { RequestPaginationResultData, RequestResultData } from '../types'

export const useBatchDel = (opt: {
  deleFunc: Function
  confirmMsg?: string
  emptyMsg?: string
}) => {
  return (tableSelection: string[]) => {
    if (tableSelection && tableSelection.length) {
      useElConfirmMessageBox(opt.confirmMsg ? opt.confirmMsg : '你确定删除选中的数据吗？', '确认', {
        type: 'warning'
      }).then(() => {
        opt.deleFunc(tableSelection)
      })
    } else {
      useElWarningMessage(opt.emptyMsg ? opt.emptyMsg : '请勾选需要删除的数据！')
    }
  }
}

export const useDelRequestByIds = <T>(opt: {
  method: Promise<RequestResultData<T>>
  beforeCb: Function
  afterCb?: Function
}) => {
  return () => {
    opt.beforeCb && opt.beforeCb()
    opt.method.then((res: RequestResultData<T>) => {
      if (!res.success) {
        opt.afterCb && opt.afterCb(null)
      } else {
        opt.afterCb && opt.afterCb(res.data)
      }
    },
      () => {
        opt.afterCb && opt.afterCb(null)
      })
  }
}

export const useQueryData = (opt: {
  queryData: Function
  selectionChangeKey?: string
  selectionChangeCb?: Function
}) => {
  const { current, size, total, layout, background, loading, pageSizeChange, pageCurrentChange } =
    usePagination(opt.queryData)

  const queryDataRequestByParams = <T>(method: Promise<RequestPaginationResultData<T>>, cb: Function) => {
    loading.value = true
    method.then((res: RequestPaginationResultData<T>) => {
      loading.value = false
      if (!res.success) {
        useElErrorMessage(res.msg)
      } else {
        cb(res.data)
      }
    },
      () => {
        loading.value = false
      })
  }

  const tableHandleSelectionChange = <T>(val: T[]) => {
    if (opt.selectionChangeKey && opt.selectionChangeCb) {
      const { handleSelectionChange } = useTable<T>(opt.selectionChangeKey, opt.selectionChangeCb)
      return handleSelectionChange(val)
    }
    return () => { }
  }

  return {
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
  }
}

export const useAddOpen = () => {
  const addVisible = ref(false)
  const currentAddRowId = ref<string>('')

  const add = () => {
    currentAddRowId.value = ''
    addVisible.value = true
  }

  const edit = (id: string) => {
    currentAddRowId.value = id
    addVisible.value = true
  }

  return {
    currentAddRowId,
    addVisible,
    add,
    edit
  }
}

export const useViewOpen = () => {
  const viewVisible = ref(false)
  const currentViewRowId = ref<string>('')
  const view = (id: string) => {
    currentViewRowId.value = id
    viewVisible.value = true
  }

  return {
    currentViewRowId,
    viewVisible,
    view
  }
}

export const useAdd = <T>(opt: {
  method: Promise<RequestResultData<T>>
  beforeCb?: Function
  afterCb?: Function,
}) => {
  opt.beforeCb && opt.beforeCb()

  opt.method.then((res: RequestResultData<T>) => {
    if (!res.success) {
      opt.afterCb && opt.afterCb(null)
    } else {
      opt.afterCb && opt.afterCb(res.data)
    }
  },
    () => {
      opt.afterCb && opt.afterCb(null)
    })
}


export const useViewRequestById = <T>(opt: {
  method: Promise<RequestResultData<T>>
  beforeCb: Function
  afterCb?: Function,
}) => {
  opt.beforeCb && opt.beforeCb()
  
  opt.method.then((res: RequestResultData<T>) => {
    if (!res.success) {
      opt.afterCb && opt.afterCb(null)
    } else {
      opt.afterCb && opt.afterCb(res.data)
    }
  },
    () => {
      opt.afterCb && opt.afterCb(null)
    })
}