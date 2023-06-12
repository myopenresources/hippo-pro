export default [
    {
        path: '/UserList',
        name: 'UserList',
        component: () => import('../views/user/UserList.vue'),
        meta: {
            title: '用户管理'
        }
    },
    {
        path: '/UserInfo',
        name: 'UserInfo',
        component: () => import('../views/user/UserInfo.vue'),
        meta: {
            title: '用户信息'
        }
    }
]
