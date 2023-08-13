<template>
    <div class="time-record">
        <div class="time-record-inner">
            <div class="left-line"></div>
            <div class="right-line"></div>
            <div class="time-record-inner-header">
                <div class="title">
                    8月<span>使用记录</span>
                </div>
                <el-button type="primary" size="small" plain round>详情</el-button>
            </div>
            <div class="time-record-inner-body">
                <div class="item">
                    <label>定期使用：</label>
                    <div class="bar">
                        <el-progress :percentage="50" text-inside :stroke-width="15" striped striped-flow />
                    </div>
                </div>
                <div class="item">
                    <label>过期使用：</label>
                    <div class="bar">
                        <el-progress :percentage="30" status="success" text-inside :stroke-width="15" striped
                            striped-flow />
                    </div>
                </div>
                <div class="item">
                    <label>告警使用：</label>
                    <div class="bar">
                        <el-progress :percentage="60" status="warning" text-inside :stroke-width="15" striped
                            striped-flow />
                    </div>
                </div>
                <div class="item">
                    <label>日常使用：</label>
                    <div class="bar">
                        <el-progress :percentage="80" status="exception" text-inside :stroke-width="15" striped
                            striped-flow />
                    </div>
                </div>
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

</script>
  
<style lang="scss" scoped>
.time-record {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 15px;
    box-sizing: border-box;

    &-inner {
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
        border-radius: 10px;
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;

        &-header {
            width: 100%;
            height: 40px;

            margin-top: 24px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            .title {
                font-size: 16px;
                color: #111;

                span {
                    font-size: 13px;
                    padding-left: 5px;
                }
            }
        }

        &-body {
            width: 100%;
            height: calc(100% - 80px);
            box-sizing: border-box;
            overflow-y: auto;

            .item {
                width: 100%;
                display: flex;
                align-items: center;
                color: var(--el-text-color-regular);
                margin-top: 10px;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }

                label {
                    color: #333;
                }

                .bar {
                    width: calc(100% - 70px);
                    :deep(.el-progress-bar__outer){
                        background-color: rgba(255, 255, 255, 0.5);
                    }
                }
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
}</style>
  