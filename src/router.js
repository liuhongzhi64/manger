import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/Login';

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/index',
            component: () => import ('./pages/Index') ,
            children: [
                {
                    path: '/index/addtrade',
                    component: () => import('./pages/trade/addTrade')
                },
                {
                    path: '/index/trades',
                    component: () => import('./pages/trade/trade')
                },
                {
                    path: '/index/addstock',
                    component: () => import('./pages/stock/addStock')
                },
                {
                    path: '/index/stock',
                    component: () => import('./pages/stock/stock')
                },
                {
                    path: '/index/account',
                    component: () => import('./pages/account/account')
                },
                {
                    path: '/index/addaccount',
                    component: () => import('./pages/account/addAccount')
                },
                {
                    path: '/index/changepwd',
                    component: () => import('./pages/account/changePwd')
                },
                {
                    path: '/index/vip',
                    component: () => import('./pages/VIP/mangeVIP')
                },
                {
                    path: '/index/addvip',
                    component: () => import('./pages/VIP/addVIP')
                },
                {
                    path: '/index/clear',
                    component: () => import('./pages/clear/sellList')
                },
                {
                    path: '/index/prdouctclear',
                    component: () => import('./pages/clear/productClear')
                },
                {
                    path: '/index/prdouctreturn',
                    component: () => import('./pages/clear/prdouctReturn')
                },
                {
                    path: '/index/sellstatistics',
                    component: () => import('./pages/statistics/sellStatistics')
                },
                {
                    path: '/index/stockstatistics',
                    component: () => import('./pages/statistics/stockStatistics')
                },
                {
                    path: '/index/changeimg',
                    component: () => import('./pages/img/Img')
                },
            ]
        },
        // {
        //     path:'/',
        //     component:()=>import('./pages/Login')
        // },
        // {
        //     path: '/addtrade',
        //     component: () => import('./pages/trade/addTrade')
        // },
        // {
        //     path: '/trades',
        //     component: () => import('./pages/trade/trade')
        // },
        // {
        //     path: '/addstock',
        //     component: () => import('./pages/stock/addStock')
        // },
        // {
        //     path: '/stock',
        //     component: () => import('./pages/stock/stock')
        // },
        // {
        //     path: '/account',
        //     component: () => import('./pages/account/account')
        // },
        // {
        //     path: '/addaccount',
        //     component: () => import('./pages/account/addAccount')
        // },
        // {
        //     path: '/changepwd',
        //     component: () => import('./pages/account/changePwd')
        // },
        // {
        //     path: '/vip',
        //     component: () => import('./pages/VIP/mangeVIP')
        // },
        // {
        //     path: '/addvip',
        //     component: () => import('./pages/VIP/addVIP')
        // },
        // {
        //     path: '/clear',
        //     component: () => import('./pages/clear/sellList')
        // },
        // {
        //     path: '/prdouctclear',
        //     component: () => import('./pages/clear/productClear')
        // },
        // {
        //     path: '/prdouctreturn',
        //     component: () => import('./pages/clear/prdouctReturn')
        // },
        // {
        //     path: '/sellstatistics',
        //     component: () => import('./pages/statistics/sellStatistics')
        // },
        // {
        //     path: '/stockstatistics',
        //     component: () => import('./pages/statistics/stockStatistics')
        // },
    ]
})

export default router