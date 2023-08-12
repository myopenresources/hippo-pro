import type { PropType, CSSProperties } from 'vue'

export const MainContentProps = {
  title: {
    type: String,
    default: ''
  },
  closeVisible: {
    type: Boolean,
    default: true
  },
  headerVisible: {
    type: Boolean,
    default: true
  },
  mainContentStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => {
      return {
        backgroundColor: 'var(--main-content-bg)',
        boxShadow: 'var(--main-content-shadow)',
        borderRadius: 'var(--main-content-radius)',
        backdropFilter: 'blur(15px) saturate(15)'
      }
    }
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => {
      return {
        padding: 'var(--main-content-padding)'
      }
    }
  }
}
