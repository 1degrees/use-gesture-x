import { DOMHandlers } from '@use-gesture/core/types'

export type VueDOMAttributes = {
  [Key in keyof DOMHandlers]: any
}
