import type { BaseInfo } from "hippo-module-core/types";

interface MsgInfo extends BaseInfo {
    msgTitle: string;
    msgType?: string,
    msgTypeId: string,
    msgContent: string;
}


export type { MsgInfo }