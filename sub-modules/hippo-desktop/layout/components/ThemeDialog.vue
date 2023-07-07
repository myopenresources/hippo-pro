<template>
  <el-dialog
    v-model="visible"
    :width="'420px'"
    :title="'主题设置'"
    :draggable="true"
  >
    <template #default>
      <div class="theme-dialog">
        <div class="theme-dialog-styles">
          <div
            class="theme-dialog-styles-item"
            v-for="(style, index) in themeSettingConst.styles"
            :key="index"
            @click="setStyleTheme(style)"
          >
            <img :src="style.img" />
            <div class="theme-dialog-styles-item-label">{{ style.styleThemeLabel }}</div>
            <div class="is-check" v-show="style.styleThemeName === currentStyleTheme">
              <DynamicIcon icon="Check" />
            </div>
          </div>
        </div>
        <div class="theme-dialog-colors">
          <div
            class="theme-dialog-colors-item"
            v-for="(color, index) in themeSettingConst.themes"
            :key="index"
            :style="{
              backgroundColor: color
            }"
            @click="setTheme(color)"
          >
            <div class="is-check" v-show="currentTheme == color">
              <DynamicIcon icon="Check" />
            </div>
          </div>

          <div class="theme-dialog-colors-item">
            <el-color-picker v-model="currentTheme" size="small" @change="setTheme" />
          </div>
        </div>
        <div class="theme-dialog-bg">
          <img :src="themeBg" />
          <div
            class="theme-dialog-bg-blur"
            :style="{
              backdropFilter: `blur(${themeBgBlur}px)`
            }"
          ></div>
          <el-upload action="" :http-request="bgUploadHttpRequest" :show-file-list="false">
            <div class="upload-btn">更换背景图片</div>
          </el-upload>
        </div>
        <div class="theme-dialog-blur">
          <div>背景毛玻璃</div>
          <el-slider v-model="themeBgBlur" @change="themeBgBlurChange" />
        </div>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { themeSettingConst, styleNameConst } from '../../consts'
import {
  DynamicIcon,
  ElementUiThemeUtil,
  useElSuccessMessage,
  useElWarningMessage,
  useEventBusEmit,
  type RequestResultData
} from 'hippo-module-core'
import { ref } from 'vue'
import { ThemeStoreUtil, ThemeUtil } from '../../utils'
import { useDark, useToggle } from '@vueuse/core'
import type { UploadRequestOptions } from 'element-plus'
import bgPreviewImg from '../../assets/img/desktop-layout/bg-preview.jpg'
import { type UserDesktopBg } from '../../types'
import { UserApi } from '../../api'

const currentStyleTheme = ref(ThemeStoreUtil.getStyleTheme())
const isDark = useDark()
const toggleDark = useToggle(isDark)

const currentTheme = ref(ThemeStoreUtil.getTheme())
const themeBg = ref(bgPreviewImg)
const themeBgBlur = ref(ThemeStoreUtil.getThemeBgBlur())

const visible = ref(false)

const showDialog = () => {
  visible.value = true
  getUserDesktopBgPreview()
}

const hideDialog = () => {
  visible.value = false
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

const setTheme = (theme: string) => {
  currentTheme.value = theme
  ThemeStoreUtil.setTheme(theme)
  ThemeUtil.setCssVariable(ElementUiThemeUtil.generate(theme, 'primary'))
}

const bgUploadHttpRequest = (options: UploadRequestOptions) => {
  if (options.file.type !== 'image/jpeg' && options.file.type !== 'image/png') {
    useElWarningMessage('请选择jpeg/png格式的图片！')
    return false
  } else if (options.file.size / 1024 / 1024 > 10) {
    useElWarningMessage('图片不能超过10M！')
    return false
  }

  UserApi.userDesktopBgUpload(options).then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      useEventBusEmit('updateDesktopBg', res.data.bgUrl)
      getUserDesktopBgPreview()
      useElSuccessMessage(res.msg)
    }
  })
}

const themeBgBlurChange = (val: number) => {
  ThemeStoreUtil.setThemeBgBlur(themeBgBlur.value.toString())
  useEventBusEmit('updateDesktopBlur', themeBgBlur.value)
}

const getUserDesktopBgPreview = () => {
  UserApi.getUserDesktopBgPreview().then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      themeBg.value = res.data.bgUrl
    }
  })
}

defineExpose({
  showDialog,
  hideDialog
})
</script>

<style scoped lang="scss">
@import './ThemeDialog.scss';
</style>
