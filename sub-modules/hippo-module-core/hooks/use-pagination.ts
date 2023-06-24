import { ref } from 'vue'


export const usePagination = (queryData: Function) => {
  const current = ref(1)
  const size = ref(10)
  const total = ref(0)
  const layout = ref('total, sizes, ->, prev, pager, next, jumper')
  const background = ref(true)
  const loading = ref(false)

  const pageSizeChange = (val: number) => {
    size.value = val
    queryData()
  }

  const pageCurrentChange = (val: number) => {
    current.value = val
    queryData()
  }

  return {
    current,
    size,
    total,
    layout,
    background,
    loading,
    pageSizeChange,
    pageCurrentChange
  }
}
