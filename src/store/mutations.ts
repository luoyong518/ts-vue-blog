/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-15 16:32:48
 * @LastEditors: 471826078@qq.com
 */

const mutations = {
    /**
     * @name: 修改state属性
     * @param {any} state
     * @param { Array } e 第一个参数为属性名 第二个参数为属性值
     * @Author: luoyong/471826078@qq.com
     */
    SET_INFO(state: any, e: any[]){
        if(e){
             state[e[0]] = e[1]
        }
    },
    INIT_CRUMB(state: any){
        state.crumb=[];
    },
    SET_CRUMB(state: any, e: any[]){
        console.log(e);
        
        state.crumb.push(...e)
    }

}

export default mutations