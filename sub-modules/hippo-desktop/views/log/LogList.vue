<template>
  <MainContent :bodyStyle="{}">
    <div class="log-list">
      <div class="log-list-category">
        <div class="log-list-category-search">
          <el-input
            class="start-menu-search-box"
            v-model="keywork"
            :prefix-icon="Search"
            clearable
            placeholder="搜索"
            @input="search"
          />
        </div>
        <div class="log-list-category-list">
          <div
            class="log-list-category-list-item"
            :class="{
              'log-list-category-list-item-active': currentLogCategory === item.id
            }"
            v-for="(item, index) in logCategoryList"
            :key="index"
            @click="selectCategory(item.id)"
          >
            <DynamicIcon :icon="item.icon" />
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="log-list-main">
        <el-card class="log-list-main-card" v-for="(log, index) in logList">
          <template #header>
            <div class="log-list-main-card-header">
              <div>
                <el-tag :type="log.type">{{ log.typeName }}</el-tag>
                {{ log.createDate }}
              </div>
              <el-button  type="primary" plain size="small">下载</el-button>
            </div>
          </template>
          <el-input class="log-list-main-card-body" type="textarea" v-model="log.logContent">
          </el-input>
        </el-card>
      </div>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { useDebounceFn } from '@vueuse/core'
import { DynamicIcon } from 'hippo-module-core/components'
import { ref } from 'vue'
const keywork = ref('')

const logCategoryList = ref([
  {
    id: 'syslog',
    icon: 'Document',
    title: '系统日志'
  },
  {
    id: 'alarmlog',
    icon: 'Bell',
    title: '告警日志'
  }
])

const currentLogCategory = ref('syslog')

const logList = ref([
  {
    id: 'dfsdf',
    typeName: '信息',
    type: 'info',
    createDate: '2023-06-23 19:37:56',
    logContent:'Background Intelligent Transfer Service 服务的启动类型从 自动启动 更改为 按需启动。'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '告警',
    type: 'warning',
    createDate: '2023-06-23 19:37:56',
    logContent: '6062 - Lso was triggered'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent:
      '删除 URL 组0xFE00000E20000010。状态0x0。用户 LOCAL SERVICE \Device\HarddiskVolume3\Windows\System32\svchost.exe0x11E4可执行文件路径的进程 ID'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent: '名称的名称解析wpad在未响应任何配置的 DNS 服务器后超时。客户端 PID 29232.'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent:
      '在 TCP 网络上检测出有重复名称。 发送消息的计算机的 IP 地址在数据中。 请在命令窗口中使用 nbtstat -n 来查看哪个名称冲突。'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent: `
      系统时间已从 ‎2023‎-‎07‎-‎10T15:38:13.085285200Z.
      时间增量更改为 ‎2023‎-‎07‎-‎10T15:38:13.085236900Z： 0 ms

      更改原因： An application or system component changed the time.
      进程： '\Device\HarddiskVolume3\Windows\System32\svchost.exe' (PID 14972).

      RTC 时间： ‎2023‎-‎07‎-‎10T23:38:13.085236900Z
      当前时区偏差 -480
      RTC 时间以 UTC： false
      系统时间基于 RTC 时间： false
    `
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent:
      '时间服务正在使用引用 ID 为 1213185300 的时间源 time.windows.com,0x9 (ntp.m|0x9|0.0.0.0:123->20.189.79.72:123) 同步系统时间。当前本地层次编号为 4。'
  },
  {
    id: 'fasdfasfsaf',
    typeName: '错误',
    type: 'danger',
    createDate: '2023-06-23 19:37:56',
    logContent:
      '时间提供程序“VMICTimeProvider”指示，当前的硬件和运行环境不受支持并且已停止。对于非 HyperV 来宾环境中的 VMICTimeProvider，这是正常现象。对于当前操作环境中的当前提供程序，这可能也是正常现象。'
  },
  
])

const search = (val: string) => {
  const fn = useDebounceFn(() => {
    if ('' !== val) {
    } else {
    }
  }, 333)
  fn()
}

const selectCategory = (id: string) => {
  currentLogCategory.value = id
}
</script>

<style scoped lang="scss">
@import './LogList.scss';
</style>
