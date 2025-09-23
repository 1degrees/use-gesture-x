import { Ref } from 'vue'
import { DOMHandlers } from '@use-gesture-x/core/types'

export type VueDOMAttributes = {
  [Key in keyof DOMHandlers]: any
}

export type GestureRef<T = any> = Ref<T> | T