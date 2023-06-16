<template>
    <MainContent :title="'开始菜单'" :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
        <div class="start-menu">
            <el-input class="start-menu-search-box" v-model="keywork" :prefix-icon="Search" clearable placeholder="搜索" />

            <div class="start-menu-menus">
                <div class="start-menu-menus-inner">
                    <div class="start-menu-menus-item" v-for="(menu, index) in menus" :key="index" @click="toPage(menu)">
                        <div class="start-menu-menus-item-icon">
                            <DynamicIcon :icon="menu.icon" />
                        </div>
                        <div class="start-menu-menus-item-label">
                            {{ menu.label }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const keywork = ref('')

const menus = ref([
    {
        id: '',
        icon: 'SvgIconHome',
        label: '首页',
        path: '/Home'
    },
    {
        id: '',
        icon: 'SvgIconUser',
        label: '用户管理',
        path: '/UserList'
    },
    {
        id: '',
        icon: 'SvgIconRole',
        label: '角色管理',
        path: '/RoleList'
    },
    {
        id: '',
        icon: 'SvgIconMenu',
        label: '菜单管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconDataDic',
        label: '数据字典管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconNotice',
        label: '消息管理',
        path: '/NotFound'
    },

    {
        id: '',
        icon: 'SvgIconFlow',
        label: '工作流管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconLog',
        label: '日志管理',
        path: '/UserInfo'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理2',
        path: '/NotFound'
    },
    {
        id: '',
        icon: 'SvgIconAuth',
        label: '权限管理2',
        path: '/NotFound'
    }
])

const toPage = (menu: any) => {
    router.push(menu.path)
}
</script>

<style scoped lang="scss">
@import './StartMenu.scss'
</style>