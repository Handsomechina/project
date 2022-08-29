import {get, post} from './fetch'

//示例
export const listGet = params => get('url',params)
export const listPOST = params => post('url',params)