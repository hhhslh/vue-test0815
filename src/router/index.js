import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '../pages/indexPage'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/indexPage',
        component: indexPage,
        children:[
            {
                path: '/',
                name: 'indexPage',
                component: indexPage
            },{
                path: 'hi1',
                name: 'hi1',
                component: hi1
            }, {
                path: 'hi2',
                name: 'hi2',
                component: hi2
            }
        ]
    }, ]
})