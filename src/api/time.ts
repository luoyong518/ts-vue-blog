/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-16 16:59:52
 * @LastEditors: 471826078@qq.com
 */
import {get} from '@/api/axios'

export const apiTimeQuery = (p: object) => get('api/times/query', p) 