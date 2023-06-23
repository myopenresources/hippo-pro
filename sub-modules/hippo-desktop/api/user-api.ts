import type { RequestResultData, UserInfo, UserLogin, UserUpdatePwd } from "../types"

export default class UserApi {

    static getValidateCode() {
        return 'data:image/png;base64,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'
    }

    static login() {
        return new Promise<RequestResultData<UserLogin>>((resolve) => {
            const data: RequestResultData<UserLogin> = {
                status: 200,
                success: true,
                msg: '',
                data: {
                    token: 'fsfaKLKufdsf4545faa11fsfasfdfsf',
                    userInfo: {
                        id: "dasfsdfasd232434",
                        userName: "admin",
                        realName: "伊丽莎白.买买提",
                        avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                        sex: "1",
                        tel: "18985458699",
                        email: "18985458699@qq.com"
                    },
                    routers: [{
                        path: '/',
                        name: 'DesktopLayout',
                        component: "DesktopLayout",
                        isLayout: true,
                        meta: {
                            title: 'DesktopLayout'
                        },
                        children: [
                            {
                                isLayout: false,
                                path: '/UserList',
                                name: 'UserList',
                                component: "user/UserList.vue",
                                meta: {
                                    title: '用户管理',
                                    icon: 'SvgIconUser'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/UserInfo',
                                name: 'UserInfo',
                                component: "user/UserInfo.vue",
                                meta: {
                                    title: '用户信息',
                                    icon: 'SvgIconUser'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/RoleList',
                                name: 'RoleList',
                                component: 'role/RoleList.vue',
                                meta: {
                                    title: '角色管理',
                                    icon: 'SvgIconRole'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/Home',
                                name: 'Home',
                                component: 'home/Home.vue',
                                meta: {
                                    title: '首页',
                                    icon: 'SvgIconHome'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/Demo',
                                name: 'Demo',
                                component: 'demo/Demo.vue',
                                meta: {
                                    title: 'demo',
                                    icon: 'SvgIconHome'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/MenuList',
                                name: 'MenuList',
                                component: 'menu/MenuList.vue',
                                meta: {
                                    title: '菜单管理',
                                    icon: 'SvgIconMenu'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/MsgList',
                                name: 'MsgList',
                                component: 'msg/MsgList.vue',
                                meta: {
                                    title: '消息管理',
                                    icon: 'SvgIconNotice'
                                }
                            },
                            {
                                isLayout: false,
                                path: '/MsgInfo/:id',
                                name: 'MsgInfo',
                                component: 'msg/MsgInfo.vue',
                                meta: {
                                    title: '消息信息',
                                    icon: 'SvgIconNotice'
                                }
                            }
                        ]

                    }],
                    commonMenus: [
                        {
                            id: 'Home',
                            icon: 'SvgIconHome',
                            label: '首页',
                            path: '/Home'
                        },
                        {
                            id: 'UserList',
                            icon: 'SvgIconUser',
                            label: '用户管理',
                            path: '/UserList'
                        },
                        {
                            id: 'RoleList',
                            icon: 'SvgIconRole',
                            label: '角色管理',
                            path: '/RoleList'
                        },
                        {
                            id: 'MenuList',
                            icon: 'SvgIconMenu',
                            label: '菜单管理',
                            path: '/MenuList'
                        },
                        {
                            id: 'UserInfo',
                            icon: 'SvgIconDataDic',
                            label: '数据字典管理',
                            path: '/UserInfo'
                        },
                        {
                            id: 'NotFound',
                            icon: 'SvgIconNotice',
                            label: '消息管理',
                            path: '/MsgList'
                        },

                        {
                            id: 'workFlow',
                            icon: 'SvgIconFlow',
                            label: '工作流管理',
                            path: '/NotFound'
                        },
                        {
                            id: 'logList',
                            icon: 'SvgIconLog',
                            label: '日志管理',
                            path: '/UserInfo'
                        },
                        {
                            id: 'ahtuList',
                            icon: 'SvgIconAuth',
                            label: '权限管理',
                            path: '/NotFound'
                        },
                        {
                            id: 'demo',
                            icon: 'SvgIconAuth',
                            label: 'demo',
                            path: '/Demo'
                        }
                    ],
                    menus: [
                        {
                            id: 'Home',
                            icon: 'SvgIconHome',
                            label: '首页',
                            path: '/Home'
                        },
                        {
                            id: 'UserList',
                            icon: 'SvgIconUser',
                            label: '用户管理',
                            path: '/UserList'
                        },
                        {
                            id: 'RoleList',
                            icon: 'SvgIconRole',
                            label: '角色管理',
                            path: '/RoleList'
                        },
                        {
                            id: 'MenuList',
                            icon: 'SvgIconMenu',
                            label: '菜单管理',
                            path: '/MenuList'
                        },
                        {
                            id: 'UserInfo',
                            icon: 'SvgIconDataDic',
                            label: '数据字典管理',
                            path: '/UserInfo'
                        },
                        {
                            id: 'NotFound',
                            icon: 'SvgIconNotice',
                            label: '消息管理',
                            path: '/NotFound'
                        },

                        {
                            id: 'workFlow',
                            icon: 'SvgIconFlow',
                            label: '工作流管理',
                            path: '/NotFound'
                        },
                        {
                            id: 'logList',
                            icon: 'SvgIconLog',
                            label: '日志管理',
                            path: '/UserInfo'
                        },
                        {
                            id: 'ahtuList',
                            icon: 'SvgIconAuth',
                            label: '权限管理',
                            path: '/NotFound'
                        },
                        {
                            id: 'demo',
                            icon: 'SvgIconAuth',
                            label: 'demo',
                            path: '/Demo'
                        }
                    ]
                }
            }
            resolve(data)
        })
    }

    static updateCurrentUserPwd(params: UserUpdatePwd) {
        return new Promise<RequestResultData<Object>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: {}
            })
        })
    }

    static updateCurrentUserInfo(params: UserInfo) {
        return new Promise<RequestResultData<Object>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: {}
            })
        })
    }
}