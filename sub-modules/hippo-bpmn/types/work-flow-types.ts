import type { BaseInfo } from 'hippo-module-core/types'

interface WorkFlowInfo extends BaseInfo {
  name: string;
  moduleId:string;
  moduleName:string;
  desc: string;
  workFlowContent:string;
}

export type { WorkFlowInfo }
