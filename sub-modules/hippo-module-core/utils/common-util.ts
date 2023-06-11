export default class CommonUtil {
  static UUID(): string {
    return 'xxxxxxxx-xxxx-6xxx-xyxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  static UUID32(): string {
    return 'xxxxxx68axyxxxxxyxxxxxxxxxxd51xy'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  static UUID16(): string {
    return 'xx68axyxxyxx520y'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  static shortUUID(): string {
    return 'xx6xyxy'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(8)
    })
  }

  static replaceStrCase(str: string) {
    return str
      .toLowerCase()
      .replace(/(?:^|[-])\w/g, (match) => {
        return match.toUpperCase()
      })
      .replace(/-/g, '')
  }

  static svgIconToLowerCase(str: string) {
    let replaceStr = str.replace(/(?:^|[A-Z])\w/g, (match) => {
      return '-' + match.toLowerCase()
    })
    return replaceStr.substring(1, replaceStr.length)
  }

  static serialize = (data: any) => {
    const list: string[] = []
    Object.keys(data).forEach((ele: any) => {
      list.push(`${ele}=${data[ele]}`)
    })
    return list.join('&')
  }

  /*static encryption = (params: any) => {
    const { data, type, param, key } = params
    let result = JSON.parse(JSON.stringify(data))
    if (type == 'Base64') {
      param.forEach((ele: any) => {
        result[ele] = btoa(result[ele])
      })
    } else if (type == 'Aes') {
      param.forEach((ele: any) => {
        result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString()
      })
    }
    return result
  }*/
}
