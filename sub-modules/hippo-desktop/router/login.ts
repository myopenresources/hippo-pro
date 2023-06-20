export default [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/login/Login.vue'),
        meta: {
            title: '登录'
        }
    }
]
