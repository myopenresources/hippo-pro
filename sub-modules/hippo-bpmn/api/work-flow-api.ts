import type {
  RequestPaginationResultData,
  RequestParams,
  RequestResultData
} from 'hippo-module-core'
import type { WorkFlowInfo } from '../types/work-flow-types'

export default class WorkFlowApi {
  static getWorkFlowListByParams(params: RequestParams) {
    return new Promise<RequestPaginationResultData<WorkFlowInfo[]>>((resolve) => {
      resolve({
        status: 200,
        success: true,
        msg: '',
        data: {
          total: 100,
          list: [
            {
              id: 'dasfsdfasd232434',
              name: '流程1',
              moduleId: 'fsdafasf',
              moduleName: '系统模块',
              desc: '系统测试流程',
              createUserId: 'fsdfasf',
              createUser: '管理员',
              createDate: '2023-07-20 14:17:58'
            }
          ]
        }
      })
    })
  }

  static deleteWorkFlowByIds(ids: string[]) {
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
