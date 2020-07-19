/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-06 21:17:33
 * @LastEditors: 471826078@qq.com
 */
const add0 = (num: number) => {
    return num < 10 ? '0' + num : num
}

 const formatDate = (str: number)=> {
    const time = new Date(str);
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const h = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    return year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(h) + ':' + add0(minute) + ':' + add0(second)
}

 const ROUTER_CONFIG = ()=>{
    return   [
                {
                    name:'Index',
                    title:'首页',
                },
                {
                    name:'Web',
                    title:'前端',
                    child:[
                        {
                            name:'Vue',
                            title:'Vue',
                        },{
                            name:'Css',
                            title:'Css',
                        },{
                            name:'Html',
                            title:'Html',
                        },{
                            name:'React',
                            title:'React',
                        },
                    ]
                },
                {
                    name:'Nodejs',
                    title:'Nodejs',
                },
                {
                    name:'Timeing',
                    title:'时光机',
                },
                {
                    name:'Living',
                    title:'生态',
                    child:[

                    ]
                },
                {
                    name:'About',
                    title:'关于博客',
                },
            ]
}

export {ROUTER_CONFIG,formatDate}
