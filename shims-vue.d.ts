import Vue from 'vue'
import VueRouter from 'vue-router'


declare module '*.vue' {
    export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}
