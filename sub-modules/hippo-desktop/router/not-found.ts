export default [
    {
        path: '/NotFound',
        name: 'NotFound',
        component: () => import('../views/not-found/NotFound.vue'),
        meta: {
            title: '404'
        }
    }
]
