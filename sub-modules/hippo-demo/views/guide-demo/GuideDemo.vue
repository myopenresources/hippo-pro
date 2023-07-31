<template>
    <MainContent>
        <el-button type="primary" style="margin-top: 10px" @click.prevent.stop="guide">
            打开引导页
        </el-button>
    </MainContent>
</template>

<script setup lang="ts">
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { onMounted, ref } from 'vue';

const driverObj = ref()

const guide = () => {
    driverObj.value.drive();
};

onMounted(() => {
    driverObj.value = driver({
        showProgress: true,
        nextBtnText: '下一步',
        prevBtnText: '上一步',
        doneBtnText: '完成',
        steps: [
            { element: '.desktop-toolbar-inner-left-start-menu', popover: { title: '开始菜单', description: '开始菜单包含了整个应用的功能！' } },
            { element: '.desktop-toolbar-inner-right-item-theme', popover: { title: '主题设置', description: '系统主题、风格的设置！' } },
            { element: '.desktop-toolbar-inner-right-item-msg', popover: { title: '系统消息', description: '所有系统消息提示！' } },
            { element: '.desktop-toolbar-inner-right-item-avatar', popover: { title: '用户头像', description: '用户头像下拉，包含个人信息、修改密码、退出登录！' } }
        ]
    });
})

</script>

<style lang="scss" scoped></style>