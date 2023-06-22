

interface RouterInfo {
    path: string,
    name: string,
    component: string,
    isLayout: boolean,
    meta: Object,
    children?: RouterInfo[]
}


export type { RouterInfo }
