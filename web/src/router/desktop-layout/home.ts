export default [
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../../views/home/Home.vue'),
        meta: {
            title: '主页'
        }
    }
]
