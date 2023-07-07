import lightStyleTheme from '../assets/img/desktop-layout/light-style.svg'
import darkStyleTheme from '../assets/img/desktop-layout/dark-style.svg'

export const styleNameConst = {
  light: 'light',
  dark: 'dark'
}

export const themeSettingConst = {
  styles: [
    {
      img: lightStyleTheme,
      styleThemeName: styleNameConst.light,
      styleThemeLabel: '浅色'
    },
    {
      img: darkStyleTheme,
      styleThemeName: styleNameConst.dark,
      styleThemeLabel: '深色'
    }
  ],
  themes: ['#409eff', '#fa541c', '#13c2c2', '#18a058', '#2f54eb', '#722ed1','#f5222d','#55cb92','#031741','#550909','#9609ab','#96b614']
}
