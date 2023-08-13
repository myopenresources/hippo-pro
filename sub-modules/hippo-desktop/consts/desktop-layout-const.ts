import lightStyleTheme from '../assets/img/desktop-layout/light-style.svg'
import darkStyleTheme from '../assets/img/desktop-layout/dark-style.svg'
import deepColourStyleTheme from '../assets/img/desktop-layout/deep-colour-style.svg'

import lightBg from '../assets/img/desktop-layout/light-bg.jpg'
import deepColourBg from '../assets/img/desktop-layout/deep-colour-bg.jpg'
import darkBg from '../assets/img/desktop-layout/dark-bg.jpg'

import lightBgPreview from '../assets/img/desktop-layout/light-bg-preview.jpg'
import deepColourBgPreview from '../assets/img/desktop-layout/deep-colour-bg-preview.jpg'
import darkBgPreview from '../assets/img/desktop-layout/dark-bg-preview.jpg'

export const styleNameConst = {
  light: 'light',
  deepColour: 'deep-colour',
  dark: 'dark'
}

export const themeSchemeConst = {
  lightThemeScheme: 'light-theme-scheme',
  deepColourThemeScheme: 'deep-colour-theme-scheme',
  darkThemeScheme: 'dark-theme-scheme',
  customThemeScheme: 'custom-theme-scheme'
}

export const themeSettingConst = {
  themeSchemes: [
    {
      label: '内置主题方案-红',
      value: themeSchemeConst.lightThemeScheme,
      styleTheme: styleNameConst.light,
      bg: lightBg,
      themeBg: lightBgPreview
    },
    {
      label: '内置主题方案-蓝',
      value: themeSchemeConst.deepColourThemeScheme,
      styleTheme: styleNameConst.deepColour,
      bg: deepColourBg,
      themeBg: deepColourBgPreview
    },
    {
      label: '内置主题方案-紫',
      value: themeSchemeConst.darkThemeScheme,
      styleTheme: styleNameConst.dark,
      bg: darkBg,
      themeBg: darkBgPreview
    }
  ],
  styles: [
    {
      img: lightStyleTheme,
      styleThemeName: styleNameConst.light,
      styleThemeLabel: '浅色'
    },
    {
      img: deepColourStyleTheme,
      styleThemeName: styleNameConst.deepColour,
      styleThemeLabel: '深色'
    },
    {
      img: darkStyleTheme,
      styleThemeName: styleNameConst.dark,
      styleThemeLabel: '暗黑'
    }
  ],
  themes: [
    '#409eff',
    '#fa541c',
    '#13c2c2',
    '#18a058',
    '#2f54eb',
    '#722ed1',
    '#f5222d',
    '#55cb92',
    '#031741',
    '#550909',
    '#9609ab',
    '#96b614'
  ]
}
