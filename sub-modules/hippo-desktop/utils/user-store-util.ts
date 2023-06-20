export default class UserStoreUtil {
    private static routes  = '_sys_routes'
    private static token = '_sys_token'

    public static setRouters(routers: any[]) {
        sessionStorage.setItem(UserStoreUtil.routes , JSON.stringify(routers))
    }

    public static getRouters(): any[] {
        const routersStr = sessionStorage.getItem(UserStoreUtil.routes)
        if (routersStr) {
            return JSON.parse(routersStr)
        }
        return []
    }

    public static removeRouters() {
        sessionStorage.removeItem(UserStoreUtil.routes )
    }

    public static setToken(token: string) {
        sessionStorage.setItem(UserStoreUtil.token,token)
    }

    public static getToken(): string {
        return sessionStorage.getItem(UserStoreUtil.token) || ''
    }

    public static removeToken() {
        sessionStorage.removeItem(UserStoreUtil.token)
    }
}