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
                    icon: 'Edit'
                }
            },
            {
                isLayout: false,
                path: '/UserInfo',
                name: 'UserInfo',
                component: "user/UserInfo.vue",
                meta: {
                    title: '用户信息',
                    icon: 'Edit'
                }
            },
            {
                isLayout: false,
                path: '/RoleList',
                name: 'RoleList',
                component: 'role/RoleList.vue',
                meta: {
                    title: '角色管理'
                }
            }
        ]
    }])

    router.push('/')
}
</script>

<style scoped lang="scss"></style>