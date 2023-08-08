interface LoadingBar {
    destroyOnClose:boolean,
    label: String,
    modal: Boolean,
    zIndex: Number,
    beforeClose: Function,
    beforeOpen: Function
}

export type { LoadingBar }
