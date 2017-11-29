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
        {
            path: '/article',
            component: (resolve) => require(['../views/articles/Create.vue'], resolve)
        },
        {
            path: '/settings',
            component: (resolve) => require(['../views/users/Settings.vue'], resolve),
            children: [
                {
                    path: 'basic',
                    component: (resolve) => require(['../views/users/Basic.vue'], resolve)
                },
                {
                    path: 'profile',
                    component: (resolve) => require(['../views/users/Profile.vue'], resolve)
                },
                {
                    path: 'badge',
                    component: (resolve) => require(['../views/users/Badge.vue'], resolve)
                },
            ]
        },
    ]
})
