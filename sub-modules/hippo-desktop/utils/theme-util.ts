import { styleNameConst, themeSettingConst } from '../consts/desktop-layout-const'
import ThemeStoreUtil from './theme-store-util'

export default class ThemeUtil {
  static getStyleThemeConfig(defaultStyleTheme: string) {
    let styleThemeName = ThemeStoreUtil.getStyleTheme()
    if ('' === styleThemeName) {
      styleThemeName = defaultStyleTheme
      ThemeStoreUtil.setStyleTheme(styleThemeName)
    }
    const data = themeSettingConst.styles.find(
      (item) => item.styleThemeName === styleThemeName
    )
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
    const data = themeSettingConst.themes.find((item) => item.themeName === theme)
    if (data) {
      return data
    } else {
      return themeSettingConst.themes[0]
    }
  }

  static initTheme(defaultTheme: string, defaultStyleTheme: string, toggleDark: Function) {
    const data = ThemeUtil.getThemeConfig(defaultTheme)
    ThemeUtil.setCssVariable(data.themeConfig)

    const styleTheme = ThemeUtil.getStyleThemeName(defaultStyleTheme)
    if (styleTheme === styleNameConst.light) {
      toggleDark(false)
    } else {
      toggleDark(true)
    }

  }
}
