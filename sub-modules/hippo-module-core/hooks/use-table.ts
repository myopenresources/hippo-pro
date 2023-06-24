export const useTable = <T>(key: string, change: Function) => {
  const handleSelectionChange = (val: T[]) => {
    const ids: any[] = []
    val.forEach((item: any) => {
      item[key] && ids.push(item[key])
    })
    change(ids, val)
  }

  return {
    handleSelectionChange
  }
}