import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '../pages/indexPage'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
    // 无#符号,美观
    mode:'history',
    routes: [{
        path: '/',
        // component:indexPage,
        components: {
            default:indexPage,
            left:hi1,
            right:hi2,
        },
        children:[
            {
                path: '/',
                name: 'indexPage',
                component: indexPage
            },{
                path: 'hi1',
                name: 'hi1',
                component: hi1,
                alias:'/gohi1'
            }, {
                path: 'hi2/:newsId(\\d+)/:newsTitle',
                name: 'hi2',
                component: hi2,
            }
        ]
    }, {
        path:'/goIndex',
        redirect:'/'
    },{
        path:'/goHi2/:newsId(\\d+)/:newsTitle',
        redirect:'hi2/:newsId(\\d+)/:newsTitle'
    },{
        path:'*',
        component:error
    }]
})