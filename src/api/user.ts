/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 11:19:39
 * @LastEditors: 471826078@qq.com
 */
import { get, post } from './axios'

export const userLogin = (p: object) => post('api/users/login', p) 

export const userUpdate = (p: object) =>post('api/users/update',p)