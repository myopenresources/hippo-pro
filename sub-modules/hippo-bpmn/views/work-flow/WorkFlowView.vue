<template>
    <el-dialog v-model="isVisible" title="查看流程图" @open="open" width="90%">
        <template #default>
            <div class="work-flow-graph" ref="graphRef" v-loading="loading"></div>
        </template>
        <template #footer>
            <el-button @click="cancel">取消</el-button>
        </template>
    </el-dialog>
</template>
  
<script setup lang="ts">
import {
    useViewById,
    useVisible
} from 'hippo-module-core'
import LogicFlow from '@logicflow/core'
import {
    BpmnElement,
    BpmnXmlAdapter,
    Snapshot,
    Control,
    SelectionSelect
} from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/es/style/index.css'
import { reactive, ref, toRef } from 'vue'
import type { WorkFlowInfo } from '../../types';
import { WorkFlowApi } from '../../api';

LogicFlow.use(BpmnElement)
LogicFlow.use(BpmnXmlAdapter)
LogicFlow.use(Control)

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ''
    }
})

const logicFlow = ref<LogicFlow>()
const graphRef = ref()

const loading = ref(false)

const emit = defineEmits(['update:visible', 'onReload'])
const { isVisible, visibleHandle } = useVisible(toRef(props, 'visible'), emit)

const open = () => {
    if (props.id && props.id.length) {
        view(props.id)
    }
}

const view = (id: string) => {
    useViewById<WorkFlowInfo>({
        method: WorkFlowApi.getWorkFlowById(id.toString()),
        beforeCb: () => {
            loading.value = true
        },
        afterCb: (data: WorkFlowInfo) => {
            loading.value = false
            initLogicFlow(data)
        }
    })
}

const initLogicFlow = (info: WorkFlowInfo) => {
    const container = graphRef.value
    logicFlow.value = new LogicFlow({
        container: container as HTMLElement,
        stopScrollGraph: true,
        stopZoomGraph: false,
        metaKeyMultipleSelected: true,
        textEdit: false,
        adjustNodePosition: false,
        adjustEdge: false,
        hideAnchors: true,
        hoverOutline: false,
        nodeSelectedOutline: false,
        edgeSelectedOutline:false,
        grid: {
            size: 10,
            type: 'dot'
        },
        keyboard: {
            enabled: true
        },
        snapline: true
    })

    logicFlow.value.render(info.workFlowContent)
}

const cancel = () => {
    visibleHandle()
}

</script>
  
<style scoped lang="scss">
.work-flow-graph {
    width: 100%;
    height: 600px;

    :deep(.lf-control-item.disabled) {
        display: none;
    }

    :deep(.lf-graph) {
        background-color: var(--el-bg-color);

        .lf-control {
            background-color: var(--el-bg-color);
            border: var(--el-border);
            border-radius: 0;
            box-shadow: var(--el-box-shadow-lighter);
        }
        .lf-element-text{
            color: var(--el-color-black);
        }
    }
}
</style>
  