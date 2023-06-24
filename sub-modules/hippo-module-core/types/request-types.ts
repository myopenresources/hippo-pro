interface RequestParams {
    size?: number,
    current?: number,
    //@ts-ignore
    [prop as string]: any
}

interface RequestResult {
    status: number;
    msg: string,
    success: boolean;
}



interface RequestResultData<T = any> extends RequestResult {
    data: T
}


interface RequestPaginationData<T = any> {
    total: number,
    list: T
}

interface RequestPaginationResultData<T = any> extends RequestResult {
    status: number;
    msg: string,
    total?: number,
    success: boolean;
    data: RequestPaginationData
}


export type { RequestResult, RequestResultData, RequestPaginationData,RequestPaginationResultData, RequestParams }
