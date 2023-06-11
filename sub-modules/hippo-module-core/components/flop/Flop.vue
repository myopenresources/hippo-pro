<template>
  <div class="flop">
    <ul ref="dataNumsRef">
      <li v-for="(item, index) in list" :key="index">
        <div class="flop-data-boc">
          <div
            class="flop-data-boc-num"
            :style="{ transition: 'all 2.5s ease-in-out 0s', top: '-' + item.top + 'px' }"
          >
            <span v-for="(num, i) in numList" :key="i">{{ item.num == '.' ? '.' : num }} </span>
          </div>
        </div>
      </li>
      <li v-if="unit != ''" class="flop-unit-li">
        <div class="flop-unit">
          {{ unit }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { FlopProps } from '../../props/flop-props'
const props = defineProps(FlopProps)

const dataNumsRef: any = ref('')
const list: any = ref([])
const numList = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

const scroll = () => {
  list.value = props.number.split('')
  let arr: any = []
  list.value.forEach((value: any) => {
    arr.push({ num: value, top: 0 })
  })

  list.value = arr

  let height: number = parseFloat(getComputedStyle(dataNumsRef.value).height)
  list.value.forEach((value: any, index: number) => {
    const st = setTimeout(() => {
      value.top = parseFloat(value.num * height + height * 10 + '')
      clearTimeout(st)
    }, index * props.speed)
  })
}

watch(
  (): string => props.number,
  (newVal: string): void => {
    scroll()
  },
  {
    immediate: false,
    deep: true
  }
)

onMounted(() => {
  scroll()
})
</script>

<style scoped lang="scss">
@import './Flop.scss';
</style>
