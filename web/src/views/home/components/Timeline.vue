<template>
    <div class="timeline">
        <div class="timeline-inner">
            <div class="left-line"></div>
            <div class="right-line"></div>
            <div class="timeline-inner-body">
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color"
                        :timestamp="activity.timestamp">
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
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

const activities = [
    {
        content: '开发v1版本',
        timestamp: '2023-04-15',
    },
    {
        content: '开发v2版本',
        timestamp: '2023-05-13',

    },
    {
        content: '开发v3版本',
        timestamp: '2023-08-11',
        color: '#0bbd87',
    },
]
</script>
  
<style lang="scss" scoped>
.timeline {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;

    &-inner {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.55);
        border-radius: 10px;
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;

        &-body {
            width: 100%;
            height: 40px;
            padding-top: 40px;

            :deep(.el-timeline-item__timestamp) {
                font-size: 12px;
                font-weight: normal;
            }
        }

        .right-line {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.8);
            width: 4px;
            height: 35px;
            top: -12px;
            right: 16px;
            border-radius: 3px;

            &::before {
                content: '';
                position: absolute;
                left: -3px;
                bottom: -4px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.15);
                box-shadow: 0 0 2px #fff;
            }
        }

        .left-line {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.8);
            width: 4px;
            height: 35px;
            top: -12px;
            left: 16px;
            border-radius: 3px;

            &::before {
                content: '';
                position: absolute;
                left: -3px;
                bottom: -4px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.15);
                box-shadow: 0 0 2px #fff;
            }

        }

    }
}
</style>
  