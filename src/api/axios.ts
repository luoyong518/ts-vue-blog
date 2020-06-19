/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 10:55:37
 * @LastEditors: 471826078@qq.com
 */
import axios from 'axios'
//引入vue
import Vue from 'vue';
//新创建一个vue实例
const v: any = new Vue();
import router from '../router'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截
axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('blogToken')
        token && (config.headers.Authorization = token);
        return config
    },
    error => {
        const newPromise: any =  Promise
        return newPromise.error(error)
    }
)
//响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            console.log(error);

            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    v.$message({
                        type: 'warning',
                        message: error.response.data
                    })
                    break;
                case 403:
                    v.$message({
                        type: 'warning',
                        message: 'token已过期，请重新登录'
                    })
                    localStorage.removeItem('blogToken');
                    // store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 2000);
                    break;
                case 404:
                    v.$message({
                        type: 'warning',
                        message: '网络请求不存在'
                    })
                    break;
                case 500:
                    v.$message({
                        type: 'warning',
                        message: '服务器异常，请联系管理员'
                    })
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    v.$message({
                        type: 'warning',
                        message: error.response.data
                    })
            }
            return Promise.reject(error.response);

        }
    }
)
/**
 * @name: 封装post
 * @param {string} url 请求地址
 * @param {object} params 请求参数 
 * @Author: luoyong
 */
export const post = (url: string, params: object) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
/**
 * @name: 封装get
 * @param {string} url 请求地址
 * @param {object} params 请求参数 
 * @Author: luoyong
 */
export const get = (url: string, params: object) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}