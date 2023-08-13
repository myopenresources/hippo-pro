<template>
    <div class="data-table">
        <el-table :data="tableData" :border="false">
            <el-table-column prop="date" label="时间" width="180" />
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="address" label="地点" />
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
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    }
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
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));
        --el-table-border-color: rgba(255, 255, 255, 0.5);
        --el-table-text-color: #333;
        --el-table-header-text-color:#111;
        --el-table-row-hover-bg-color: rgba(255, 255, 255, 0.5);
        --el-table-current-row-bg-color: rgba(0, 0, 0, 0);
        --el-table-header-bg-color: rgba(0, 0, 0, 0);
        --el-table-fixed-box-shadow: var(--el-box-shadow-light);
        --el-table-bg-color: rgba(0, 0, 0, 0);
        --el-table-tr-bg-color: rgba(0, 0, 0, 0);
        --el-table-expanded-cell-bg-color: rgba(0, 0, 0, 0);

        .el-table__cell {
            background-color: rgba(0, 0, 0, 0);
        }

        .el-table__inner-wrapper {
            &::before {
                background-color: rgba(0, 0, 0, 0);
            }
        }
    }


}
</style>
  