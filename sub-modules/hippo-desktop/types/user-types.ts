import type { MenuInfo } from "./menu-types"
import type { RouterInfo } from "./router-types"

interface UserInfo {
    id: string,
    userName: string,
    realName: string,
    avatar: string,
    sex: string,
    tel: string,
    email: string
}

interface UserLogin {
    token: string,
    routers: RouterInfo[],
    commonMenus: MenuInfo[],
    menus: MenuInfo[],
    userInfo: UserInfo
}

 interface  UserUpdatePwd{
    oldPwd: string,
    newPwd: string,
    confirmPwd: string
 }


export type { UserLogin, UserInfo,UserUpdatePwd }
