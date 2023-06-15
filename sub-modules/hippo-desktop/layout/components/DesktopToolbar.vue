<template>
  <div class="desktop-toolbar">
    <div class="desktop-toolbar-inner">
      <div class="desktop-toolbar-inner-left" ref="toolbarLeftRef">
        <el-popover placement="top" :width="566" trigger="click" :teleported="false" ref="menuPopoverRef" :popper-style="'margin-top:-4px;'">
          <template #reference>
            <div class="desktop-toolbar-inner-left-start-menu">
              <DynamicIcon icon="SvgIconStartMenu" />
            </div>
          </template>
          <div class="desktop-toolbar-inner-popover">
            <div class="desktop-toolbar-inner-popover-header">系统菜单</div>
            <el-input class="desktop-toolbar-inner-popover-search-box" v-model="keywork" :prefix-icon="Search" clearable
              placeholder="搜索" />
            <div class="desktop-toolbar-inner-popover-menus">
              <div class="desktop-toolbar-inner-popover-menus-item" v-for="(menu, index) in menus" :key="index"
                @click="toPage(menu)">
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
        <div class="desktop-toolbar-inner-center-tabs">
          <DesktopToolbarTabs />
        </div>
        <div class="desktop-toolbar-inner-center-divider"></div>
      </div>
      <div class="desktop-toolbar-inner-right" ref="toolbarRightRef">
        <div class="desktop-toolbar-inner-right-item">
          <DynamicIcon icon="FullScreen" />
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

        <el-popover placement="top" :width="335" trigger="click" :teleported="false" ref="msgPopoverRef" :popper-style="'margin-left:-2px'">
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
import {
  DynamicIcon,
  useElConfirmMessageBox,
  useElMessage,
  useElWarningMessage,
  useEventBusEmit
} from 'hippo-module-core'
import { Search } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { computed, ref, unref } from 'vue'
import { themeSettingConst, styleNameConst } from '../../consts'
import DesktopToolbarTabs from './DesktopToolbarTabs.vue'
import { useRouter } from 'vue-router'
import { ThemeStoreUtil, ThemeUtil } from '../../utils'
import { useDark, useToggle } from '@vueuse/core'
import { useDesktopToolbar } from '../../hooks'

const currentTheme = ref(ThemeStoreUtil.getTheme())
const currentStyleTheme = ref(ThemeStoreUtil.getStyleTheme())
const isDark = useDark()
const toggleDark = useToggle(isDark)

const router = useRouter()
const {sysTime} = useDesktopToolbar()

const keywork = ref('')

const toolbarLeftRef = ref()
const toolbarCenterRef = ref()
const toolbarRightRef = ref()
const menuPopoverRef = ref()
const themePopoverRef = ref()
const msgPopoverRef = ref()


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
    icon: 'SvgIconHome',
    label: '首页',
    path: '/Home'
  },
  {
    id: '',
    icon: 'SvgIconUser',
    label: '用户管理',
    path: '/UserList'
  },
  {
    id: '',
    icon: 'SvgIconRole',
    label: '角色管理',
    path: '/RoleList'
  },
  {
    id: '',
    icon: 'SvgIconMenu',
    label: '菜单管理',
    path: '/UserInfo'
  },
  {
    id: '',
    icon: 'SvgIconDataDic',
    label: '数据字典管理',
    path: '/UserInfo'
  },
  {
    id: '',
    icon: 'SvgIconNotice',
    label: '消息管理',
    path: '/NotFound'
  },

  {
    id: '',
    icon: 'SvgIconFlow',
    label: '工作流管理',
    path: '/NotFound'
  },
  {
    id: '',
    icon: 'SvgIconLog',
    label: '日志管理',
    path: '/UserInfo'
  },
  {
    id: '',
    icon: 'SvgIconAuth',
    label: '权限管理',
    path: '/NotFound'
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
    useElWarningMessage('请选择jpeg/png格式的图片！')

    return false
  } else if (rawFile.size / 1024 / 1024 > 10) {
    useElWarningMessage('图片不能超过10M！')
    return false
  }
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => { }

const userDropdownCommand = (command: string) => {
  const commands: any = {
    exitLogin: () => {
      useElConfirmMessageBox('您确认退出系统吗?', '确认', {
        type: 'warning'
      }).then(() => { })
    },
    updatePwd: () => { },
    userCenter: () => { }
  }

  commands[command]()
}

const toPage = (menu: any) => {
  menuPopoverRef.value.hide()
  router.push(menu.path)
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
</script>

<style scoped lang="scss">
@import './DesktopToolbar.scss';
</style>
