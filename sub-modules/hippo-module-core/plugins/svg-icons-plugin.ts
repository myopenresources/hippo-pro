import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export function svgIconsPlugin(opt: any = {}) {
  const option = {
    iconDirs: [],
    symbolId: 'svg-icon-[dir]-[name]',
    customDomId: '__hippo_pro__svg__icons__dom__' + new Date().getTime(),
    ...opt
  }
  option.iconDirs = []

  if (opt.iconDirs && opt.iconDirs.length) {
    option.iconDirs = option.iconDirs.concat(opt.iconDirs)
  }

  return createSvgIconsPlugin(option)
}
