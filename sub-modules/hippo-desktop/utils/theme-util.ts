import { ElementUiThemeUtil } from 'hippo-module-core'
import { styleNameConst, themeSettingConst } from '../consts/desktop-layout-const'
import ThemeStoreUtil from './theme-store-util'

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

  static initTheme(defaultTheme: string, defaultStyleTheme: string) {
    ThemeUtil.setCssVariable(ThemeUtil.getThemeConfig(defaultTheme))
    const styleTheme = ThemeUtil.getStyleThemeName(defaultStyleTheme)
    ThemeUtil.setHtmlTheme('',styleTheme)
  }
}
