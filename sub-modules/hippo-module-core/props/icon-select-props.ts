import type { PropType } from "vue";

export const IconSelectProps = {
    value: {
        type: String,
        default: ''
    },
    popoverMaxHeight: {
        type: String,
        default: '200px'
    },
    popoverTrigger: {
        type: String,
        default: 'click'
    },
    popoverWidth: {
        type: String,
        default: '390px'
    },
    popoverPlacement: {
        type: String,
        default: 'bottom'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    popperStyle: {
        type: String || Object,
        default: ''
    },
    popperClass: {
        type: String,
        default: ''
    },
    extendIcons: {
        type: Array as PropType<String[]>,
        default: () => {
            return []
        }
    }
}
