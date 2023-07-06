export default class ThemeStoreUtil {
  private static theme = '_sys_theme'
  private static styleTheme = '_sys_style_theme'
  private static themeBgBlur = '_sys_theme_bg_blur'

  public static setTheme(theme: string) {
    localStorage.setItem(ThemeStoreUtil.theme, theme)
  }

  public static getTheme(): string {
    return localStorage.getItem(ThemeStoreUtil.theme) || ''
  }

  public static removeTheme() {
    localStorage.removeItem(ThemeStoreUtil.theme)
  }

  public static setStyleTheme(theme: string) {
    localStorage.setItem(ThemeStoreUtil.styleTheme, theme)
  }

  public static getStyleTheme(): string {
    return localStorage.getItem(ThemeStoreUtil.styleTheme) || ''
  }

  public static removeStyleTheme() {
    localStorage.removeItem(ThemeStoreUtil.styleTheme)
  }

  public static setThemeBgBlur(blur: string) {
    localStorage.setItem(ThemeStoreUtil.themeBgBlur, blur)
  }

  public static getThemeBgBlur(): number {
    const blur = localStorage.getItem(ThemeStoreUtil.themeBgBlur) || ''
    if (blur === '') {
      return 0
    } else {
      return Number.parseInt(blur, 10)
    }
  }

  public static removeThemeBgBlur() {
    localStorage.removeItem(ThemeStoreUtil.themeBgBlur)
  }
}
