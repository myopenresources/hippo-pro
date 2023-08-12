<template>
  <el-dialog v-model="visible" :width="'422px'" :title="'主题设置'" :draggable="true">
    <template #default>
      <div class="theme-dialog">
        <div class="theme-dialog-theme-schemes">
          <el-carousel
            :autoplay="false"
            :pause-on-hover="false"
            :height="'120px'"
            :indicator-position="'none'"
            arrow="never"
            type="card"
            :initial-index="currentThemeSchemeIndex"
            @change="themeSchemeChange"
          >
            <el-carousel-item
              v-for="(item, index) in themeSettingConst.themeSchemes"
              :key="item.value"
            >
              <div class="theme-dialog-theme-schemes-item">
                <img :src="item.themeBg" />
                <div class="is-check" v-show="index === currentThemeSchemeIndex">
                  <DynamicIcon icon="CircleCheckFilled" />
                </div>
                <div class="theme-dialog-theme-schemes-item-label">{{ item.label }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
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
          <el-upload action="" :http-request="bgUploadHttpRequest" :show-file-list="false">
            <div class="upload-btn">更换背景图片</div>
          </el-upload>
        </div>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { themeSettingConst } from '../../consts'
import {
  DynamicIcon,
  ElementUiThemeUtil,
  useElSuccessMessage,
  useElWarningMessage,
  useEventBusEmit,
  type RequestResultData
} from 'hippo-module-core'
import { onMounted, ref, nextTick } from 'vue'
import { ThemeStoreUtil, ThemeUtil } from '../../utils'
import type { UploadRequestOptions } from 'element-plus'
import bgPreviewImg from '../../assets/img/desktop-layout/light-bg-preview.jpg'
import { type UserDesktopBg } from '../../types'
import { UserApi } from '../../api'
import { themeSchemeConst } from '../../consts/desktop-layout-const'

const themeScheme = ThemeStoreUtil.getThemeScheme()

const currentThemeSchemeIndex = ref(0)
const currentStyleTheme = ref(ThemeStoreUtil.getStyleTheme())
const currentTheme = ref(ThemeStoreUtil.getTheme())
const themeBg = ref(bgPreviewImg)

const visible = ref(false)

const showDialog = () => {
  visible.value = true
  getUserDesktopBgPreview()
}

const hideDialog = () => {
  visible.value = false
}

const setStyleTheme = (style: any) => {
  const oldStyleTheme = currentStyleTheme.value
  currentStyleTheme.value = style.styleThemeName
  ThemeUtil.setHtmlTheme(oldStyleTheme, style.styleThemeName)
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
      ThemeStoreUtil.setThemeScheme(themeSchemeConst.customThemeScheme)
      currentThemeSchemeIndex.value = -1
      useEventBusEmit('updateDesktopBg', res.data.bgUrl)
      getUserDesktopBgPreview()
      useElSuccessMessage(res.msg)
    }
  })
}

const themeSchemeChange = (val: number) => {
  const find = themeSettingConst.themeSchemes[val]
  currentThemeSchemeIndex.value = val
  if (find) {
    const findStyleTheme = themeSettingConst.styles.find((style) => {
      return style.styleThemeName === find.styleTheme
    })

    if (findStyleTheme) {
      setStyleTheme(findStyleTheme)
    }

    useEventBusEmit('updateDesktopBg', find.bg)
    themeBg.value = find.themeBg
    ThemeStoreUtil.setThemeScheme(find.value)
  }
}

const getUserDesktopBgPreview = () => {
  UserApi.getUserDesktopBgPreview().then((res: RequestResultData<UserDesktopBg>) => {
    if (res.success) {
      themeBg.value = res.data.bgUrl
    }
  })
}

const initCurrentThemeSchemeIndex = () => {
  if (themeScheme !== themeSchemeConst.customThemeScheme) {
    const findIndex = themeSettingConst.themeSchemes.findIndex((item) => {
      return item.value === themeScheme
    })

    if (findIndex > 0) {
      currentThemeSchemeIndex.value = findIndex
    }
  }
}

onMounted(() => {
  initCurrentThemeSchemeIndex()
})

defineExpose({
  showDialog,
  hideDialog
})
</script>

<style scoped lang="scss">
@import './ThemeDialog.scss';
</style>
