import type { MenuInfo, RouterInfo, UserInfo } from "../types"

export default class UserStoreUtil {
    private static routes = '_desktop_routes'
    private static menus = '_desktop_menus'
    private static commonMenu = '_desktop_common_menus'
    private static token = '_desktop_token'
    private static userInfo = '_desktop_user_info'

    public static setRouters(routers: RouterInfo[]) {
        sessionStorage.setItem(UserStoreUtil.routes, JSON.stringify(routers))
    }

    public static getRouters(): RouterInfo[] {
        const routersStr = sessionStorage.getItem(UserStoreUtil.routes)
        if (routersStr) {
            return JSON.parse(routersStr)
        }
        return []
    }

    public static removeRouters() {
        sessionStorage.removeItem(UserStoreUtil.routes)
    }

    public static setMenus(menus: MenuInfo[]) {
        sessionStorage.setItem(UserStoreUtil.menus, JSON.stringify(menus))
    }

    public static getMenus(): MenuInfo[] {
        const menusStr = sessionStorage.getItem(UserStoreUtil.menus)
        if (menusStr) {
            return JSON.parse(menusStr)
        }
        return []
    }

    public static removeMenus() {
        sessionStorage.removeItem(UserStoreUtil.menus)
    }

    public static setCommonMenus(commonMenu: MenuInfo[]) {
        sessionStorage.setItem(UserStoreUtil.commonMenu, JSON.stringify(commonMenu))
    }

    public static getCommonMenus(): MenuInfo[] {
        const commonMenuStr = sessionStorage.getItem(UserStoreUtil.commonMenu)
        if (commonMenuStr) {
            return JSON.parse(commonMenuStr)
        }
        return []
    }

    public static removeCommonMenus() {
        sessionStorage.removeItem(UserStoreUtil.commonMenu)
    }

    public static setUserInfo(userInfo: UserInfo) {
        sessionStorage.setItem(UserStoreUtil.userInfo, JSON.stringify(userInfo))
    }

    public static getUserInfo(): UserInfo {
        const userInfoStr = sessionStorage.getItem(UserStoreUtil.userInfo)
        if (userInfoStr) {
            return JSON.parse(userInfoStr)
        }
        return {
            id: "",
            userName: "",
            realName: "",
            avatar: "",
            sex: "",
            tel: "",
            email: ""
        }
    }

    public static removeUserInfo() {
        sessionStorage.removeItem(UserStoreUtil.userInfo)
    }


    public static setToken(token: string) {
        sessionStorage.setItem(UserStoreUtil.token, token)
    }

    public static getToken(): string {
        return sessionStorage.getItem(UserStoreUtil.token) || ''
    }

    public static removeToken() {
        sessionStorage.removeItem(UserStoreUtil.token)
    }


    public static removeAll() {
        UserStoreUtil.removeToken()
        UserStoreUtil.removeRouters()
        UserStoreUtil.removeMenus()
        UserStoreUtil.removeCommonMenus()
        UserStoreUtil.removeUserInfo()
    }
}