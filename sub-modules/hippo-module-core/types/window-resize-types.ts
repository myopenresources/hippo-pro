import type { Dimensions } from "./dimensions-types"

export interface WindowResizeParams {
  initExe?: boolean
  useMounted?:boolean
  handle: (dimensions: Dimensions) => void
}
