export const LoadingBarProps = {
    modal: {
        type: Boolean,
        default: true
    },
    zIndex: {
        type: Number,
        default: 999999
    },
    beforeClose: {
        type: Function,
        default: () => {
            return () => { }
        }
    },
    beforeOpen: {
        type: Function,
        default: () => {
            return () => { }
        }
    },
    label: {
        type: String,
        default: ''
    }
}
