import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'loginPage',
            component: () => import(/* webpackChunkName: "loginPage" */ '@/view/Login')
        },
        {
            path: '/user/save',
            name: 'userSave',
            component: () => import(/* webpackChunkName: "userSave" */ '@/view/User')
        },
        {
            path: '/url/save',
            name: 'urlSave',
            component: () => import(/* webpackChunkName: "urlSave" */ '@/view/Url')
        },
        {
            path: '/url/list',
            name: 'urlList',
            component: () => import(/* webpackChunkName: "urlList" */ '@/view/UrlList')
        },
        {
            path: '/url/search',
            name: 'urlSearch',
            component: () => import(/* webpackChunkName: "urlSearch" */ '@/view/Search')
        },
    ]
});