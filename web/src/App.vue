
<template>
   <el-config-provider :locale="locale">
      <RouterView />
   </el-config-provider>
</template>

<script setup lang="ts">
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue';
const locale = ref(zhCn)
</script>
     

<style scoped lang="scss"></style>