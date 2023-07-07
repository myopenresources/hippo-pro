export default class ElementUiThemeUtil {
  static mix(color1: string, color2: string, weight1: number, alpha1: number, alpha2: number) {
    color1 = ElementUiThemeUtil.dropPrefix(color1)
    color2 = ElementUiThemeUtil.dropPrefix(color2)
    if (weight1 === -1) weight1 = 0.5
    if (alpha1 === -1) alpha1 = 1
    if (alpha2 === -1) alpha2 = 1

    const w = 2 * weight1 - 1
    const alphaDelta = alpha1 - alpha2
    const w1 = ((w * alphaDelta === -1 ? w : (w + alphaDelta) / (1 + w * alphaDelta)) + 1) / 2
    const w2 = 1 - w1

    const rgb1 = ElementUiThemeUtil.toNum3(color1)
    const rgb2 = ElementUiThemeUtil.toNum3(color2)
    const r = Math.round(w1 * rgb1[0] + w2 * rgb2[0])
    const g = Math.round(w1 * rgb1[1] + w2 * rgb2[1])
    const b = Math.round(w1 * rgb1[2] + w2 * rgb2[2])
    return (
      '#' + ElementUiThemeUtil.pad2(r) + ElementUiThemeUtil.pad2(g) + ElementUiThemeUtil.pad2(b)
    )
  }

  static toNum3(colorStr: string) {
    let colorStrArr = ElementUiThemeUtil.dropPrefix(colorStr)
    if (colorStrArr.length === 3) {
      colorStrArr =
        colorStrArr[0] +
        colorStrArr[0] +
        colorStrArr[1] +
        colorStrArr[1] +
        colorStrArr[2] +
        colorStrArr[2]
    }
    const r = parseInt(colorStrArr.slice(0, 2), 16)
    const g = parseInt(colorStrArr.slice(2, 4), 16)
    const b = parseInt(colorStrArr.slice(4, 6), 16)
    return [r, g, b]
  }

  static dropPrefix(colorStr: string) {
    return colorStr.replace('#', '')
  }

  static pad2(num: number) {
    let t = num.toString(16)
    if (t.length === 1) t = '0' + t
    return t
  }

  static rgbToHsl(r: number, g: number, b: number) {
    const r_r = r / 255,
      r_g = g / 255,
      r_b = b / 255

    const max = Math.max(r_r, r_g, r_b),
      min = Math.min(r_r, r_g, r_b)
    const delta = max - min,
      l = (max + min) / 2
    let h = 0,
      s = 0
    if (Math.abs(delta) > 0.00001) {
      if (l <= 0.5) s = delta / (max + min)
      else s = delta / (2 - max - min)
      const r_dist = (max - r_r) / delta,
        g_dist = (max - r_g) / delta,
        b_dist = (max - r_b) / delta
      if (r_r == max) h = b_dist - g_dist
      else if (r_g == max) h = 2 + r_dist - b_dist
      else h = 4 + g_dist - r_dist
      h = h * 60
      if (h < 0) h += 360
    }
    return [h, s, l]
  }

  static rrggbbToHsl(rrggbb: string) {
    const rgb = ElementUiThemeUtil.toNum3(rrggbb)
    const hsl = ElementUiThemeUtil.rgbToHsl(rgb[0], rgb[1], rgb[2])
    return [
      hsl[0].toFixed(0),
      (hsl[1] * 100).toFixed(3) + '%',
      (hsl[2] * 100).toFixed(3) + '%'
    ].join(',')
  }

  static lighten(colorStr: string, weight: number) {
    return ElementUiThemeUtil.mix('fff', colorStr, weight, -1, -1)
  }

  static darken(colorStr: string, weight: number) {
    return ElementUiThemeUtil.mix('000', colorStr, weight, -1, -1)
  }

  static generate(colorStr: string, colorKey: string) {
    let colorTemp = colorStr
    if (colorStr[0] === '#') {
      colorTemp = colorStr.slice(1)
    }

    const colorObj: any = {}
    colorObj[`--el-color-${colorKey}`] = colorStr

    const lightenNums = [3, 5, 7, 8, 9]
    lightenNums.forEach((num) => {
      colorObj[`--el-color-${colorKey}-light-${num}`] = ElementUiThemeUtil.lighten(
        colorStr,
        Number((num / 10).toFixed(2))
      )
    })

    const darkenNums = [2]
    darkenNums.forEach((num) => {
      colorObj[`--el-color-${colorKey}-dark-${num}`] = ElementUiThemeUtil.darken(
        colorStr,
        Number((num / 10).toFixed(2))
      )
    })

    return colorObj
  }
}
