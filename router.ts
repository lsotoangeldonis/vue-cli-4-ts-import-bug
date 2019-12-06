import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from '@/modules/home/pages/index/IndexPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [{
        path: '',
        component: IndexPage,
    },
    {
        path: '*',
        component: IndexPage,
    },
    ],
    scrollBehavior({}, {}, savedPosition) {

        if (savedPosition) {

            return savedPosition

        }

        return { x: 0, y: 0 }


    },
})

export default router
