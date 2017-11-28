import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: (resolve) => require(['../views/Index.vue'], resolve),
            children: []
        },
        {
            path: '/login',
            component: (resolve) => require(['../views/auth/Login.vue'], resolve)
        },
        {
            path: '/active/:token',
            component: (resolve) => require(['../views/auth/Active.vue'], resolve)
        },
    ]
})
