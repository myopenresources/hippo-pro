
interface RequestResult {
    status: number;
    msg: string,
    total?: number,
    success: boolean;
}

interface RequestResultData<T=any> extends RequestResult {
    data: T
}


export type { RequestResult,RequestResultData }
