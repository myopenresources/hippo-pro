<template>
  <div class="desktop-toolbar">
    <div class="desktop-toolbar-inner">
      <div class="desktop-toolbar-inner-left" ref="toolbarLeftRef">
        <div class="desktop-toolbar-inner-left-start-menu" @click="toStartMenu()">
          <DynamicIcon icon="SvgIconStartMenu" />
        </div>

        <el-input class="desktop-toolbar-inner-left-search-box" v-model="keywork" :prefix-icon="Search" clearable
          placeholder="搜索" />
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
        <el-popover placement="top" :width="265" trigger="click" :teleported="false" ref="themePopoverRef"
          :popper-style="'height:11rem'">
          <template #reference>
            <div class="desktop-toolbar-inner-right-item">
              <DynamicIcon icon="SvgIconTheme" />
            </div>
          </template>
          <div class="desktop-toolbar-inner-popover">
            <div class="desktop-toolbar-inner-popover-header">主题设置</div>
            <div class="desktop-toolbar-inner-popover-themes">
              <div class="desktop-toolbar-inner-popover-themes-styles">
                <div class="popover-themes-styles-item" v-for="(style, index) in themeSettingConst.styles" :key="index"
                  @click="setStyleTheme(style)">
                  <img :src="style.img" />
                  <div class="popover-themes-styles-item-label">{{ style.styleThemeLabel }}</div>
                  <div class="is-check" v-show="style.styleThemeName === currentStyleTheme">
                    <DynamicIcon icon="Check" />
                  </div>
                </div>
              </div>
              <div class="desktop-toolbar-inner-popover-themes-colors">
                <div class="popover-themes-colors-item" v-for="(theme, index) in themeSettingConst.themes" :key="index"
                  :style="{
                    backgroundColor: theme.color
                  }" @click="setTheme(theme)">
                  <div class="is-check" v-show="currentTheme == theme.themeName">
                    <DynamicIcon icon="Check" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-popover>

        <el-popover placement="top" :width="335" trigger="click" :teleported="false" ref="msgPopoverRef"
          :popper-style="'margin-left:-2px'">
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
                <div class="desktop-toolbar-inner-popover-msgs-list-item" v-for="(msg, index) in messages" :index="index"
                  @click="toMsg(msg)">
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
  </div>
</template>

<script setup lang="ts">
import {
  DynamicIcon,
  useElConfirmMessageBox,
  useElWarningMessage,
  useEventBusEmit
} from 'hippo-module-core'
import { Search } from '@element-plus/icons-vue'
import { computed, onMounted, ref } from 'vue'
import { themeSettingConst, styleNameConst } from '../../consts'
import DesktopToolbarTabs from './DesktopToolbarTabs.vue'
import { useRouter } from 'vue-router'
import { ThemeStoreUtil, ThemeUtil, UserStoreUtil } from '../../utils'
import { useDark, useToggle } from '@vueuse/core'
import { useDesktopToolbar } from '../../hooks'
import screenfull from 'screenfull'

const currentTheme = ref(ThemeStoreUtil.getTheme())
const currentStyleTheme = ref(ThemeStoreUtil.getStyleTheme())
const isDark = useDark()
const toggleDark = useToggle(isDark)

const router = useRouter()
const { sysTime } = useDesktopToolbar()

const keywork = ref('')
const fullscreenState = ref(false)

const toolbarLeftRef = ref()
const toolbarCenterRef = ref()
const toolbarRightRef = ref()
const themePopoverRef = ref()
const msgPopoverRef = ref()

const userAvatar = UserStoreUtil.getUserInfo().avatar


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
    updatePwd: () => { },
    userCenter: () => { }
  }

  commands[command]()
}

const toStartMenu = () => {
  router.push("/StartMenu")
}

const toMsg = (msg: any) => {
  msgPopoverRef.value.hide()
}

const setStyleTheme = (style: any) => {
  if (style.styleThemeName === styleNameConst.dark) {
    toggleDark(true)
  } else {
    toggleDark(false)
  }
  currentStyleTheme.value = style.styleThemeName
  ThemeStoreUtil.setStyleTheme(style.styleThemeName)
  useEventBusEmit('styleThemeChange', style)
}

const setTheme = (item: { themeName: string; color: string; themeConfig: any }) => {
  currentTheme.value = item.themeName
  ThemeStoreUtil.setTheme(item.themeName)
  ThemeUtil.setCssVariable(item.themeConfig)
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


onMounted(() => {
  init()
})
</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>
