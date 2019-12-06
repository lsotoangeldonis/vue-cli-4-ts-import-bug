// / <reference types="node" />

import './hooks'
import Vue from 'vue'

import app from './App.vue'

/* eslint-disable no-new */
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(app),
}).$mount('#app')
