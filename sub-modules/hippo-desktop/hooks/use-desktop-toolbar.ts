import { onMounted, onUnmounted, ref } from 'vue'

export const useDesktopToolbar = () => {
  const sysTime = ref({
    date: '',
    time: ''
  })

  let sysTimeInterval: any = null

  const getSysTime = () => {
    const time = new Date()
    sysTime.value = {
      date: time.toLocaleDateString(),
      time: time.toLocaleTimeString()
    }
  }

  onMounted(() => {
    getSysTime()
    sysTimeInterval = setInterval(() => {
      getSysTime()
    }, 1000)
  })

  onUnmounted(() => {
    if (null != sysTimeInterval) {
      clearInterval(sysTimeInterval)
    }
  })

  return {
    sysTime
  }
}
