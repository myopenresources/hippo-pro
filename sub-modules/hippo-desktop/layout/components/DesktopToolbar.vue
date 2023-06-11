<template>
    <div class="desktop-toolbar">
        <div class="desktop-toolbar-inner">
            <div class="desktop-toolbar-inner-left" ref="toolbarLeftRef">

                <el-popover placement="top" :width="610" trigger="click" :teleported="false">
                    <template #reference>
                        <div class="desktop-toolbar-inner-left-start-menu">
                            <DynamicIcon icon="SvgIconStartMenu" />
                        </div>
                    </template>
                    <div class="desktop-toolbar-inner-popover">
                        <div class="desktop-toolbar-inner-popover-header">系统菜单</div>
                        <el-input class="desktop-toolbar-inner-popover-search-box" v-model="keywork" :prefix-icon="Search"
                            clearable placeholder="搜索" />
                        <div class="desktop-toolbar-inner-popover-menus">
                            <div class="desktop-toolbar-inner-popover-menus-item" v-for="(menu, index) in menus"
                                :key="index">
                                <div class="desktop-toolbar-inner-popover-menus-item-icon">
                                    <DynamicIcon :icon="menu.icon" />
                                </div>
                                <div class="desktop-toolbar-inner-popover-menus-item-label">
                                    {{ menu.label }}
                                </div>
                            </div>
                        </div>
                    </div>
                </el-popover>

                <el-input class="desktop-toolbar-inner-left-search-box" v-model="keywork" :prefix-icon="Search" clearable
                    placeholder="搜索" />
            </div>
            <div class="desktop-toolbar-inner-center" ref="toolbarCenterRef" :style="toolbarCenterStyle">
                <div class="desktop-toolbar-inner-center-divider"></div>
                <div class="desktop-toolbar-inner-center-tabs"></div>
                <div class="desktop-toolbar-inner-center-divider"></div>
            </div>
            <div class="desktop-toolbar-inner-right" ref="toolbarRightRef">
                <div class="desktop-toolbar-inner-right-item">
                    <DynamicIcon icon="FullScreen" />
                </div>
                <el-popover placement="top" :width="265" trigger="click" :teleported="false" :popper-style="'height:12rem'">
                    <template #reference>
                        <div class="desktop-toolbar-inner-right-item">
                            <DynamicIcon icon="Setting" />
                        </div>
                    </template>
                    <div class="desktop-toolbar-inner-popover">
                        <div class="desktop-toolbar-inner-popover-header">主题设置</div>
                        <div class="desktop-toolbar-inner-popover-themes">
                            <div class="desktop-toolbar-inner-popover-themes-styles">
                                <div class="popover-themes-styles-item">
                                    <img src="../../assets/img/desktop-layout/light-style.svg" />
                                    <div class="popover-themes-styles-item-label">light</div>
                                    <div class="is-check">
                                        <DynamicIcon icon="Check" />
                                    </div>
                                </div>
                                <div class="popover-themes-styles-item">
                                    <img src="../../assets/img/desktop-layout/dark-style.svg" />
                                    <div class="popover-themes-styles-item-label">dark</div>
                                </div>
                            </div>
                            <div class="desktop-toolbar-inner-popover-themes-colors">
                                <div class="popover-themes-colors-item" v-for="(theme, index) of themes" :key="index"
                                    :style="{
                                        backgroundColor: theme.color
                                    }">
                                    <div class="is-check">
                                        <DynamicIcon icon="Check" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-popover>

                <el-popover placement="top" :width="335" trigger="click" :teleported="false">
                    <template #reference>
                        <div class="desktop-toolbar-inner-right-item">
                            <el-badge is-dot class="desktop-toolbar-inner-right-item-badge">
                                <DynamicIcon icon="Bell" />
                            </el-badge>
                        </div>
                    </template>
                    <div class="desktop-toolbar-inner-popover">
                        <div class="desktop-toolbar-inner-popover-header">消息</div>
                        <div class="desktop-toolbar-inner-popover-msgs">
                            <div class="desktop-toolbar-inner-popover-msgs-list">
                                <div class="desktop-toolbar-inner-popover-msgs-list-item" v-for="(msg, index) in messages"
                                    :index="index">
                                    <div class="popover-msg-header">{{ msg.title }}</div>
                                    <div class="popover-msg-footer">
                                        <div>{{ msg.msgType }}</div>
                                        <div>{{ msg.dateTime }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-popover>

                <div class="desktop-toolbar-inner-right-time">
                    <div class="time">11:26:59</div>
                    <div class="date">2023-06-10</div>
                </div>
                <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DynamicIcon } from 'hippo-module-core';
import { Search } from '@element-plus/icons-vue'
import { computed, ref } from 'vue';
const keywork = ref('')
const toolbarLeftRef = ref()
const toolbarCenterRef = ref()
const toolbarRightRef = ref()

const messages = ref([
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    },
    {
        id: '',
        title: '你有一条关于端午放假的通知消息，请收到后及时处理！',
        msgType: '系统消息',
        dateTime: '2023-06-11 15:22:35'
    }
])


const themes = ref([
    {
        themeName: 'lightBlue',
        color: '#409eff',
        themeConfig: {
            '--el-color-primary': '#409eff',
            '--el-color-primary-light-3': '#79bbff',
            '--el-color-primary-light-5': '#a0cfff',
            '--el-color-primary-light-7': '#c6e2ff',
            '--el-color-primary-light-8': '#d9ecff',
            '--el-color-primary-light-9': '#ecf5ff',
            '--el-color-primary-dark-2': '#337ecc'
        }
    },
    {
        themeName: 'red',
        color: '#f5222d',
        themeConfig: {
            '--el-color-primary': '#f5222d',
            '--el-color-primary-light-3': '#f4777d',
            '--el-color-primary-light-5': '#f9a1a6',
            '--el-color-primary-light-7': '#fcbcbf',
            '--el-color-primary-light-8': '#fcced0',
            '--el-color-primary-light-9': '#fce4e6',
            '--el-color-primary-dark-2': '#c91e27'
        }
    },
    {
        themeName: 'orange',
        color: '#fa541c',
        themeConfig: {
            '--el-color-primary': '#fa541c',
            '--el-color-primary-light-3': '#fa7b50',
            '--el-color-primary-light-5': '#f99675',
            '--el-color-primary-light-7': '#f8af96',
            '--el-color-primary-light-8': '#f7c5b4',
            '--el-color-primary-light-9': '#f9d8cd',
            '--el-color-primary-dark-2': '#d54a1'
        }
    },
    {
        themeName: 'yellow',
        color: '#faad14',
        themeConfig: {
            '--el-color-primary': '#faad14',
            '--el-color-primary-light-3': '#f9bc41',
            '--el-color-primary-light-5': '#f8c766',
            '--el-color-primary-light-7': '#f8d48b',
            '--el-color-primary-light-8': '#f8e2b7',
            '--el-color-primary-light-9': '#faefd9',
            '--el-color-primary-dark-2': '#d39212'
        }
    },
    {
        themeName: 'cyan',
        color: '#13c2c2',
        themeConfig: {
            '--el-color-primary': '#13c2c2',
            '--el-color-primary-light-3': '#3cc3c3',
            '--el-color-primary-light-5': '#5dc3c3',
            '--el-color-primary-light-7': '#7bc9c9',
            '--el-color-primary-light-8': '#98cbcb',
            '--el-color-primary-light-9': '#c3f2f2',
            '--el-color-primary-dark-2': '#139f9f'
        }
    },
    {
        themeName: 'green',
        color: '#18a058',
        themeConfig: {
            '--el-color-primary': '#18a058',
            '--el-color-primary-light-3': '#36b170',
            '--el-color-primary-light-5': '#51c085',
            '--el-color-primary-light-7': '#72ce9d',
            '--el-color-primary-light-8': '#92d8b3',
            '--el-color-primary-light-9': '#c0ead4',
            '--el-color-primary-dark-2': '#118d4b'
        }
    },
    {
        themeName: 'blue',
        color: '#2f54eb',
        themeConfig: {
            '--el-color-primary': '#2f54eb',
            '--el-color-primary-light-3': '#4e6dec',
            '--el-color-primary-light-5': '#7189ea',
            '--el-color-primary-light-7': '#94a5e9',
            '--el-color-primary-light-8': '#b2bdea',
            '--el-color-primary-light-9': '#cdd6f9',
            '--el-color-primary-dark-2': '#2e4dcb'
        }
    },
    {
        themeName: 'purple',
        color: '#722ed1',
        themeConfig: {
            '--el-color-primary': '#722ed1',
            '--el-color-primary-light-3': '#844cd1',
            '--el-color-primary-light-5': '#9063d0',
            '--el-color-primary-light-7': '#a07fce',
            '--el-color-primary-light-8': '#ac94cd',
            '--el-color-primary-light-9': '#dcc9f7',
            '--el-color-primary-dark-2': '#5f28ad'
        }
    }
])

const menus = ref([
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    },
    {
        id: '',
        icon: 'SvgIconStartMenu',
        label: '菜单管理'
    }
])

const toolbarCenterStyle = computed(() => {

    if (toolbarLeftRef.value && toolbarRightRef.value) {
        return {
            width: `calc(100% - ${toolbarRightRef.value.clientWidth}px - ${toolbarLeftRef.value.clientWidth}px)`
        }
    }

    return {
        width: `calc(100% - 33rem)`
    }
})

</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>