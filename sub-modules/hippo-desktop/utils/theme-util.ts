import { ElementUiThemeUtil } from 'hippo-module-core'
import { themeSettingConst } from '../consts/desktop-layout-const'
import ThemeStoreUtil from './theme-store-util'
import type { SysConfig } from '../types'

export default class ThemeUtil {
  static getStyleThemeConfig(defaultStyleTheme: string) {
    let styleThemeName = ThemeStoreUtil.getStyleTheme()
    if ('' === styleThemeName) {
      styleThemeName = defaultStyleTheme
      ThemeStoreUtil.setStyleTheme(styleThemeName)
    }
    const data = themeSettingConst.styles.find((item) => item.styleThemeName === styleThemeName)
    if (data) {
      return data
    } else {
      return themeSettingConst.styles[0]
    }
  }

  static getStyleThemeName(defaultStyleTheme: string) {
    let styleThemeName = ThemeStoreUtil.getStyleTheme()
    if ('' === styleThemeName) {
      styleThemeName = defaultStyleTheme
      ThemeStoreUtil.setStyleTheme(styleThemeName)
    }
    return styleThemeName
  }

  static setCssVariable(obj: any) {
    Object.keys(obj).forEach((key: string) => {
      document.body.style.setProperty(key, obj[key])
    })
  }

  static getThemeConfig(defaultTheme: string) {
    let theme = ThemeStoreUtil.getTheme()
    if ('' === theme) {
      theme = defaultTheme
      ThemeStoreUtil.setTheme(theme)
    }
    return ElementUiThemeUtil.generate(theme, 'primary')
  }

  static setHtmlTheme(oldTheme: string, theme: string) {
    const html = document.querySelector('html')
    if (html) {
      if ('' != oldTheme && html.className.includes(oldTheme)) {
        html.className = html.className.replace(oldTheme, '')
      }

      html.className = theme + ' ' + html.className.trim()
    }
  }

  static setThemeScheme(defaultThemeScheme: string) {
    let themeScheme = ThemeStoreUtil.getThemeScheme()
    if ('' === themeScheme) {
      themeScheme = defaultThemeScheme
      ThemeStoreUtil.setThemeScheme(themeScheme)
    }
  }

  static getThemeSchemeObj() {
    const themeScheme = ThemeStoreUtil.getThemeScheme()
    if ('' !== themeScheme) {
      return themeSettingConst.themeSchemes.find((item) => {
        return item.value === themeScheme
      })
    }
    return null
  }

  static initTheme(sysConfig: SysConfig) {
    ThemeUtil.setCssVariable(ThemeUtil.getThemeConfig(sysConfig.defaultTheme))
    ThemeUtil.setThemeScheme(sysConfig.defaultThemeScheme)
    const styleTheme = ThemeUtil.getStyleThemeName(sysConfig.defaultStyleTheme)
    ThemeUtil.setHtmlTheme('', styleTheme)
  }
}
