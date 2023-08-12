<template>
    <div class="data-table">
        <el-table :data="tableData" :border="true">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>
  
<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {}
        }
    }
})

const tableData: any[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]


</script>
  
<style lang="scss" scoped>
.data-table {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;

    :deep(.el-table) {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }


}
</style>
  