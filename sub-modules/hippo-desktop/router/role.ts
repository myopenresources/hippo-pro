export default [
    {
        path: '/RoleList',
        name: 'RoleList',
        component: () => import('../views/role/RoleList.vue'),
        meta: {
            title: '角色管理'
        }
    }
]
