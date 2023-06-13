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
    themes: [
        {
            themeName: 'lightBlue',
            color: '#409eff',
            themeConfig: {
                '--el-color-primary': '#409eff',
                '--el-color-primary-light-3': '#79bbff',
                '--el-color-primary-light-5': '#a0cfff',
                '--el-color-primary-light-7': '#c6e2ff',
                '--el-color-primary-light-8': '#d9ecff',
                '--el-color-primary-light-9': '#ecf5ff',
                '--el-color-primary-dark-2': '#337ecc'
            }
        },
        {
            themeName: 'red',
            color: '#f5222d',
            themeConfig: {
                '--el-color-primary': '#f5222d',
                '--el-color-primary-light-3': '#f4777d',
                '--el-color-primary-light-5': '#f9a1a6',
                '--el-color-primary-light-7': '#fcbcbf',
                '--el-color-primary-light-8': '#fcced0',
                '--el-color-primary-light-9': '#fce4e6',
                '--el-color-primary-dark-2': '#c91e27'
            }
        },
        {
            themeName: 'orange',
            color: '#fa541c',
            themeConfig: {
                '--el-color-primary': '#fa541c',
                '--el-color-primary-light-3': '#fa7b50',
                '--el-color-primary-light-5': '#f99675',
                '--el-color-primary-light-7': '#f8af96',
                '--el-color-primary-light-8': '#f7c5b4',
                '--el-color-primary-light-9': '#f9d8cd',
                '--el-color-primary-dark-2': '#d54a1'
            }
        },
        {
            themeName: 'yellow',
            color: '#faad14',
            themeConfig: {
                '--el-color-primary': '#faad14',
                '--el-color-primary-light-3': '#f9bc41',
                '--el-color-primary-light-5': '#f8c766',
                '--el-color-primary-light-7': '#f8d48b',
                '--el-color-primary-light-8': '#f8e2b7',
                '--el-color-primary-light-9': '#faefd9',
                '--el-color-primary-dark-2': '#d39212'
            }
        },
        {
            themeName: 'cyan',
            color: '#13c2c2',
            themeConfig: {
                '--el-color-primary': '#13c2c2',
                '--el-color-primary-light-3': '#3cc3c3',
                '--el-color-primary-light-5': '#5dc3c3',
                '--el-color-primary-light-7': '#7bc9c9',
                '--el-color-primary-light-8': '#98cbcb',
                '--el-color-primary-light-9': '#c3f2f2',
                '--el-color-primary-dark-2': '#139f9f'
            }
        },
        {
            themeName: 'green',
            color: '#18a058',
            themeConfig: {
                '--el-color-primary': '#18a058',
                '--el-color-primary-light-3': '#36b170',
                '--el-color-primary-light-5': '#51c085',
                '--el-color-primary-light-7': '#72ce9d',
                '--el-color-primary-light-8': '#92d8b3',
                '--el-color-primary-light-9': '#c0ead4',
                '--el-color-primary-dark-2': '#118d4b'
            }
        },
        {
            themeName: 'blue',
            color: '#2f54eb',
            themeConfig: {
                '--el-color-primary': '#2f54eb',
                '--el-color-primary-light-3': '#4e6dec',
                '--el-color-primary-light-5': '#7189ea',
                '--el-color-primary-light-7': '#94a5e9',
                '--el-color-primary-light-8': '#b2bdea',
                '--el-color-primary-light-9': '#cdd6f9',
                '--el-color-primary-dark-2': '#2e4dcb'
            }
        },
        {
            themeName: 'purple',
            color: '#722ed1',
            themeConfig: {
                '--el-color-primary': '#722ed1',
                '--el-color-primary-light-3': '#844cd1',
                '--el-color-primary-light-5': '#9063d0',
                '--el-color-primary-light-7': '#a07fce',
                '--el-color-primary-light-8': '#ac94cd',
                '--el-color-primary-light-9': '#dcc9f7',
                '--el-color-primary-dark-2': '#5f28ad'
            }
        }
    ]
}