import type { MsgInfo } from "../types"
import type { RequestResultData } from "../types/request-types"

export default class MsgApi {



    static getUserMsgList() {
        return new Promise<RequestResultData<MsgInfo[]>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: [{
                    id: "fsdfsdfsfsaf",
                    msgTitle: "欢迎使用河码桌面！！！",
                    msgType: "系统消息",
                    msgTypeId: "system",
                    msgContent: "欢迎使用河码桌面，河码桌面是一个基于vue3+vite+element pro + pnpm 创建的monorepo项目，项目采用的是类操作系统界面web界面，操作起来简单又方便，符合用户习惯，又没有操作系统的复杂！",
                    createUserId: "admin",
                    createUser: "管理员",
                    createDate: "2023-06-23 19:37:56",
                }, {
                    id: "fsdfsdfsfsfdsfdsfaf",
                    msgTitle: "河码桌面下载地址",
                    msgType: "系统消息",
                    msgTypeId: "system",
                    msgContent: "欢迎使用河码桌面，河码桌面下载地址是：https://gitee.com/jani/hippo-pro！",
                    createUserId: "admin",
                    createUser: "管理员",
                    createDate: "2023-06-23 19:37:56",
                }]
            })
        })
    }

}