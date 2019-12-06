// / <reference types="node" />

import './hooks'
import Vue from 'vue'
import router from './router'

import app from './App.vue'

/* eslint-disable no-new */
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(app),
}).$mount('#app')
