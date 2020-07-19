/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-09 11:46:00
 * @LastEditors: 471826078@qq.com
 */
import {get,post} from '@/api/axios'
export const getCommenById = (p: object) =>get('api/commens/queryByArticleId',p)

export const addCommen = (p: object) => post('api/commens/addComment',p)