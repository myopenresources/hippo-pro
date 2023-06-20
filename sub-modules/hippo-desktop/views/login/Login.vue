<template>
    <el-button @click="login">登录</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { UserStoreUtil } from '../../utils';

const router = useRouter()
const login = () => {
    UserStoreUtil.setToken('fjskjfsjfsjfksjflsjflkj')
    UserStoreUtil.setRouters([{
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
            }
        ]
    }])


    //createDynamicRouterGuard(router)

    router.push('/StartMenu')
}
</script>

<style scoped lang="scss"></style>