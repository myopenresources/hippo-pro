export default class Environments {
  static getEvnProp(key: string): string {
    //@ts-ignore
    const prop = import.meta.env[key]
    return prop as string
  }
}
