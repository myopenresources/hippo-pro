import type { Dimensions } from "./dimensions-types"

export interface WindowResizeParams {
  initExe?: boolean
  handle: (dimensions: Dimensions) => void
}
