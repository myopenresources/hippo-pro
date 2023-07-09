<template>
  <div class="desktop-toolbar">
    <div class="desktop-toolbar-inner">
      <div class="desktop-toolbar-inner-left" ref="toolbarLeftRef">
        <div class="desktop-toolbar-inner-left-start-menu" @click="toStartMenu()">
          <DynamicIcon icon="SvgIconStartMenu" />
        </div>

        <el-select
          class="desktop-toolbar-inner-left-search-box"
          :teleported="false"
          v-model="keywork"
          filterable
          remote
          clearable
          reserve-keyword
          placeholder="搜索"
          :remote-method="search"
          :loading="searchLoading"
        >
          <el-option
            v-for="item in searchList"
            :key="item.id"
            :label="item.label"
            :value="item.id"
            @click="selectSearchItem(item)"
          />
        </el-select>
      </div>
      <div class="desktop-toolbar-inner-center" ref="toolbarCenterRef" :style="toolbarCenterStyle">
        <div class="desktop-toolbar-inner-center-divider"></div>
        <div class="desktop-toolbar-inner-center-tabs">
          <DesktopToolbarTabs />
        </div>
        <div class="desktop-toolbar-inner-center-divider"></div>
      </div>
      <div class="desktop-toolbar-inner-right" ref="toolbarRightRef">
        <div class="desktop-toolbar-inner-right-item" @click="fullscreenToggle">
          <DynamicIcon :icon="fullscreenState ? 'SvgIconFullScreenExit' : 'FullScreen'" />
        </div>
        <div class="desktop-toolbar-inner-right-item" @click="themeSetting">
          <DynamicIcon icon="SvgIconTheme" />
        </div>
        <el-popover
          placement="top"
          :width="335"
          trigger="click"
          :teleported="false"
          ref="msgPopoverRef"
          :popper-style="'margin-left:-2px'"
        >
          <template #reference>
            <div class="desktop-toolbar-inner-right-item">
              <el-badge
                :is-dot="messages.length > 0"
                class="desktop-toolbar-inner-right-item-badge"
              >
                <DynamicIcon icon="Bell" />
              </el-badge>
            </div>
          </template>
          <div class="desktop-toolbar-inner-popover">
            <div class="desktop-toolbar-inner-popover-header">
              消息
              <el-button type="primary" link @click="toMsgList">更多</el-button>
            </div>
            <div class="desktop-toolbar-inner-popover-msgs">
              <div class="desktop-toolbar-inner-popover-msgs-list">
                <div
                  class="desktop-toolbar-inner-popover-msgs-list-item"
                  v-for="(msg, index) in messages"
                  :index="index"
                  @click="toMsg(msg)"
                >
                  <div class="popover-msg-header">{{ msg.msgTitle }}</div>
                  <div class="popover-msg-footer">
                    <div>{{ msg.msgType }}</div>
                    <div>{{ msg.createDate }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-popover>

        <div class="desktop-toolbar-inner-right-time">
          <div class="time">{{ sysTime.date }}</div>
          <div class="date">{{ sysTime.time }}</div>
        </div>

        <el-dropdown :teleported="false" @command="userDropdownCommand">
          <el-avatar shape="square" :src="userAvatar" />
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
    <UpdatePwdDialog ref="updatePwdDialogRef" />
    <ThemeDialog ref="themeDialogRef" />
  </div>
</template>

<script setup lang="ts">
import { DynamicIcon, useElConfirmMessageBox, useElWarningMessage } from 'hippo-module-core'
import { computed, onMounted, ref } from 'vue'
import DesktopToolbarTabs from './DesktopToolbarTabs.vue'
import { useRouter } from 'vue-router'
import { UserStoreUtil } from '../../utils'
import { useDesktopToolbar } from '../../hooks'
import screenfull from 'screenfull'
import UpdatePwdDialog from './UpdatePwdDialog.vue'
import ThemeDialog from './ThemeDialog.vue'
import { type MenuInfo, type MsgInfo, type UserDesktopBg } from '../../types'
import type { RequestResultData } from 'hippo-module-core'
import { MsgApi } from '../../api'

const router = useRouter()
const { sysTime } = useDesktopToolbar()

const keywork = ref('')
const searchLoading = ref(false)
const searchList = ref<MenuInfo[]>([])

const fullscreenState = ref(false)

const toolbarLeftRef = ref()
const toolbarCenterRef = ref()
const toolbarRightRef = ref()
const msgPopoverRef = ref()
const updatePwdDialogRef = ref()
const themeDialogRef = ref()

const userAvatar = UserStoreUtil.getUserInfo().avatar

const menus = UserStoreUtil.getMenus()

const messages = ref<MsgInfo[]>([])

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

const themeSetting = () => {
  themeDialogRef.value.showDialog()
}

const userDropdownCommand = (command: string) => {
  const commands: any = {
    exitLogin: () => {
      useElConfirmMessageBox('您确认退出系统吗?', '确认', {
        type: 'warning'
      }).then(() => {
        UserStoreUtil.removeAll()
        router.replace('/Login')
      })
    },
    updatePwd: () => {
      updatePwdDialogRef.value.showDialog()
    },
    userCenter: () => {
      router.push('/UserInfo')
    }
  }

  commands[command]()
}

const toStartMenu = () => {
  router.push('/StartMenu')
}

const toMsg = (msg: MsgInfo) => {
  msgPopoverRef.value.hide()
  router.push('/MsgInfo/' + msg.id)
}

const toMsgList = () => {
  router.push('/MsgList')
}

const fullscreenToggle = () => {
  if (!screenfull.isEnabled) {
    useElWarningMessage('您的浏览器不支持全屏！')
    return false
  }

  screenfull.toggle().then(() => {
    fullscreenState.value = !fullscreenState.value
  })
}

const init = () => {
  if (screenfull.isEnabled) {
    screenfull.on('change', () => {
      fullscreenState.value = screenfull['isFullscreen']
    })
  }
}

const search = (query: string) => {
  if (query) {
    searchLoading.value = true
    const st = setTimeout(() => {
      searchLoading.value = false
      clearTimeout(st)
      searchList.value = menus.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 10)
  } else {
    searchList.value = []
  }
}

const selectSearchItem = (menuInfo: MenuInfo) => {
  if (menuInfo.path && menuInfo.path.length) {
    keywork.value = ''
    router.push(menuInfo.path)
  }
}

const getMsgList = () => {
  MsgApi.getUserMsgList().then((res: RequestResultData<MsgInfo[]>) => {
    if (res.success) {
      messages.value = res.data
    } else {
      messages.value = []
    }
  })
}

onMounted(() => {
  init()
  getMsgList()
})
</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>
