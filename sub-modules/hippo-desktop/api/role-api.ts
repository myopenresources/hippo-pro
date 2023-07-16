import type { RequestPaginationResultData, RequestParams, RequestResultData } from "hippo-module-core/types"
import type { RoleInfo } from "../types"

export default class RoleApi {

    static getRoleListByParams(params: RequestParams) {
        return new Promise<RequestPaginationResultData<RoleInfo[]>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: {
                    total: 100,
                    list: [
                        {
                            id: 'dasfsdfasd232434',
                            roleName: '管理员',
                            roleTypeName: "系统角色",
                            roleType: 'system',
                            roleUser: []
                        }
                    ]
                }
            })
        })
    }

    static deleteRoleByIds(ids: string[]) {
        return new Promise<RequestResultData<Object>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: {}
            })
        })
    }
}