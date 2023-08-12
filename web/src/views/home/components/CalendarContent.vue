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
    :deep(.el-calendar){
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.7);
        --el-calendar-cell-width:72px;
        .el-calendar__header{
            border-bottom: 0;
        }
    }
}
</style>
  