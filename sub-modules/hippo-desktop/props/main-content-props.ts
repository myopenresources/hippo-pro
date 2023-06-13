import type { PropType, CSSProperties } from 'vue'

export const MainContentProps = {
  mainContentStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => {
      return {
        
      }
    }
  }
}
