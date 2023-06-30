<template>
  <div class="text-content">
    {{ data.text }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped>
.text-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
