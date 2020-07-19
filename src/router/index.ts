/*
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 10:49:18
 * @LastEditors: 471826078@qq.com
 */ 
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'Index',
        name: 'Index',
        meta:{title:'首页'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Index/Index.vue')
      },
      {
        path: 'articleDetail',
        name: 'articleDetail',
        meta:{title:'文章详情'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Index/Detail.vue')
      },
      {
        path: 'Web',
        name: 'Web',
        meta:{title:'前端'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Web/Web.vue')
      },
      {
        path: 'Nodejs',
        name: 'Nodejs',
        meta:{title:'Nodejs'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Nodejs/nodejs.vue')
      },
      {
        path: 'Timeing',
        name: 'Timeing',
        meta:{title:'时光机'},
        component: () => import(/* webpackChunkName: "about" */ '../views/Timeing/Timeing.vue')
      },
    ],
    redirect:{
      name:'Index'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
