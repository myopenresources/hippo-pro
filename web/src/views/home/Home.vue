<template>
  <MainContent
    :title="'首页'"
    :headerVisible="false"
    :mainContentStyle="{}"
    :bodyStyle="{}"
  >
    <div class="home">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="always" class="home-card">
            <div class="home-card-header">最新公告</div>
            <div class="home-card-body">
              <div class="home-card-body-item" v-for="(item, index) in noticeList" :key="index">
                <div class="label">{{ item.label }}</div>
                <div class="date">{{ item.date }}</div>
              </div>
            </div>
          </el-card>
          <el-card shadow="always" class="home-card home-card-bottom">
            <div class="home-card-header">待办信息</div>
            <div class="home-card-body">
              <div class="home-card-body-item" v-for="(item, index) in noticeList" :key="index">
                <div class="label">{{ item.label }}</div>
                <div class="date">{{ item.date }}</div>
              </div>
            </div>
          </el-card>
          <el-card shadow="always" class="home-card home-card-bottom">
            <div class="home-card-header">风险舆情信息</div>
            <div class="home-card-body">
              <div class="home-card-body-item" v-for="(item, index) in noticeList" :key="index">
                <div class="label">{{ item.label }}</div>
                <div class="date">{{ item.date }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always"> Always </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always" class="home-card">
            <div class="home-card-header">我的客户</div>
            <div class="home-card-body"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const noticeList = ref([
  {
    label: '财务管理事项-市场活动',
    date: '2023-16-15 19:09:59'
  },
  {
    label: '设备管理事项-设备维护',
    date: '2023-16-15 19:06:59'
  },
  {
    label: '巡逻管理事项-人员休假',
    date: '2023-16-15 19:06:59'
  },
  {
    label: '人工申诉事项-人工申诉',
    date: '2023-16-15 19:06:59'
  },
  {
    label: '系统通知事项-系统公告',
    date: '2023-16-15 19:06:59'
  },
  {
    label: '放假通知事项-放假通知',
    date: '2023-16-15 19:06:59'
  }
])
</script>

<style scoped lang="scss">
@import './Home.scss';
</style>
