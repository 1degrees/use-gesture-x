import { DOMHandlers } from '../../core/src/types';
export type VueDOMAttributes = {
    [Key in keyof DOMHandlers]: any;
};
