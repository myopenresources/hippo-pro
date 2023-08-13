<template>
    <div class="calendar-content">
        <el-calendar v-model="value" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {}
        }
    }
})

const value = ref(new Date())
</script>
  
<style lang="scss" scoped>
.calendar-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;

    :deep(.el-calendar) {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));
        --el-calendar-cell-width:4.55rem;
        --el-calendar-border: var(rgba(255, 255, 255, 0.5), 1px solid var(rgba(255, 255, 255, 0.5)));
        --el-calendar-header-border-bottom: rgba(255, 255, 255, 0.5);
        --el-calendar-selected-bg-color: rgba(255, 255, 255, 0.5);

        .el-calendar__header {
            border-bottom: 0;

            .el-calendar__title {
                color: #111;
            }
            .el-button{
                background-color: transparent;
                border-color: rgba(0, 0, 0, 0.25);
                color: #111;
                &:hover{
                    background-color: rgba(255, 255, 255, 0.5);
                }
            }
        }
        .el-calendar-table thead th{
            color: #666;
        }
        .el-calendar-table  td{
            color: #666;
        }

        .el-calendar-table:not(.is-range) td.prev{
            color: #333;
        }
        .el-calendar-table td{
            border-color: rgba(0, 0, 0, 0.25);
        }
        .el-calendar-table td.is-selected{
            color: var(--el-color-primary);
        }
    }
}
</style>
  