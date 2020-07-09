/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 11:19:39
 * @LastEditors: 471826078@qq.com
 */
import {get,post} from '@/api/axios'

export const apiArticelQuery = (p: object) => get('api/articles/queryWeb', p) 
export const apiArticelQueryById = (p: object) => post('api/articles/queryById', p) 
export const apiArticelQueryLast = (p: object) => post('api/articles/getPreAndNext', p) 

