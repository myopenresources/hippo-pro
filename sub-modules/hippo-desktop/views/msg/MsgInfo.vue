<template>
    <MainContent>
        <div class="desktop-container">
            <div class="desktop-row">
                <div class="desktop-row-label">标题：</div>
                <div class="desktop-row-cotent">{{ msgInfo?.msgTitle }}</div>
            </div>

            <div class="desktop-row">
                <div class="desktop-sub-row">
                    <div class="desktop-row-label">消息类型：</div>
                    <div class="desktop-row-cotent">{{ msgInfo?.msgType }}</div>
                </div>
                <div class="desktop-sub-row">
                    <div class="desktop-row-label">创建人：</div>
                    <div class="desktop-row-cotent">{{ msgInfo?.createUser }}</div>
                </div>
                <div class="desktop-sub-row">
                    <div class="desktop-row-label">创建时间：</div>
                    <div class="desktop-row-cotent">{{ msgInfo?.createDate }}</div>
                </div>
            </div>
            <div class="desktop-row">
                <div class="desktop-row-label">消息内容：</div>
                <div class="desktop-row-cotent msg-info-content">
                    {{ msgInfo?.msgContent }}
                </div>
            </div>
        </div>
    </MainContent>
</template>

<script setup lang="ts">
import { useViewById } from 'hippo-module-core';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { MsgApi } from '../../api';
import type { MsgInfo } from '../../types';
const route = useRoute()

const msgInfo = ref<MsgInfo>()

const queryDataById = () => {
    if (route.params && route.params.id) {
        const id = route.params.id
        useViewById<MsgInfo>({
            method: MsgApi.getUserMsgById(id.toString()),
            beforeCb: () => {

            },
            afterCb: (msg: MsgInfo) => {
                msgInfo.value = msg
            },
        })
    }

}

onMounted(() => {
    queryDataById();
})
</script>

<style scoped lang="scss">
.msg-info-content {
    box-sizing: border-box;
    width: calc(100% - 70px);
}
</style>