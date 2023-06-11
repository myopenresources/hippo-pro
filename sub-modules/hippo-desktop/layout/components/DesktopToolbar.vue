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
                <el-popover placement="top" :width="265" trigger="click" :teleported="false"
                    :popper-style="'height:22.5rem'">
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
                                    <div class="popover-themes-styles-item-label">浅色</div>
                                    <div class="is-check">
                                        <DynamicIcon icon="Check" />
                                    </div>
                                </div>
                                <div class="popover-themes-styles-item">
                                    <img src="../../assets/img/desktop-layout/dark-style.svg" />
                                    <div class="popover-themes-styles-item-label">深色</div>
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
                            <div class="desktop-toolbar-inner-popover-themes-bg">
                                <img src="../../assets/img/desktop-layout/bg.jpeg" />
                                <el-upload class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false" :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <div class="upload-btn">更换背景图片</div>
                                </el-upload>

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
                        <div class="desktop-toolbar-inner-popover-header">
                            消息
                            <el-button type="primary" link>更多</el-button>
                        </div>
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

                <el-dropdown :teleported="false" @command="userDropdownCommand">
                    <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="userCenter">
                                <DynamicIcon icon="User" />
                                个人信息
                            </el-dropdown-item>
                            <el-dropdown-item command="updatePwd">
                                <DynamicIcon icon="Key" />
                                修改密码
                            </el-dropdown-item>
                            <el-dropdown-item command="exitLogin">
                                <DynamicIcon icon="SwitchButton" />
                                退出登录
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DynamicIcon, useElConfirmMessageBox, useElMessage, useElWarningMessage } from 'hippo-module-core';
import { Search } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { computed, ref } from 'vue';
import { themes } from '../../consts'

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

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        useElWarningMessage("请选择jpeg/png格式的图片！")

        return false
    } else if (rawFile.size / 1024 / 1024 > 10) {
        useElWarningMessage("图片不能超过10M！");
        return false
    }
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
}

const userDropdownCommand = (command: string) => {
    const commands: any = {
        exitLogin: () => {
            useElConfirmMessageBox('您确认退出系统吗?', '确认', {
                type: 'warning'
            }).then(() => {

            })
        },
        updatePwd: () => {
        },
        userCenter: () => {
        }
    }

    commands[command]()
}

</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>