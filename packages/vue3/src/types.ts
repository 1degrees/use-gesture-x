import { DOMHandlers } from '@use-gesture-x/core/types'

export type VueDOMAttributes = {
  [Key in keyof DOMHandlers]: any
}
