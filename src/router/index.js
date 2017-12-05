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
            name:'article.create',
            component: (resolve) => require(['../views/articles/Create.vue'], resolve)
        },
        {
            path: '/article/:article',
            name:'article.show',
            component: (resolve) => require(['../views/articles/Show.vue'], resolve)
        },
        {
            path: '/article/:article/edit',
            name:'article.edit',
            component: (resolve) => require(['../views/articles/Edit.vue'], resolve)
        },
        {
            path: '/topics/:topic',
            component: (resolve) => require(['../views/topics/Index.vue'], resolve),
            children: [
                {
                    path: '',
                    component: (resolve) => require(['../views/topics/childrens/Index.vue'], resolve)
                },
            ]
        },
        {
            path: '/topics/:topic/edit',
            component: (resolve) => require(['../views/topics/Edit.vue'], resolve)
        },
        {
            path: '/topics',
            component: (resolve) => require(['../views/topics/Create.vue'], resolve)
        },
        {
            path: '/settings',
            component: (resolve) => require(['../views/users/settings/Settings.vue'], resolve),
            children: [
                {
                    path: 'basic',
                    meta: {
                        menu_active: 'basic'
                    },
                    component: (resolve) => require(['../views/users/settings/Basic.vue'], resolve)
                },
                {
                    path: 'profile',
                    meta: {
                        menu_active: 'profile'
                    },
                    component: (resolve) => require(['../views/users/settings/Profile.vue'], resolve)
                },
                {
                    path: 'badge',
                    meta: {
                        menu_active: 'badge'
                    },
                    component: (resolve) => require(['../views/users/settings/Badge.vue'], resolve)
                },
            ]
        },
        {
            path: '/user/:user',
            component: (resolve) => require(['../views/users/show/Basic.vue'], resolve),
            children:[
                {
                    path: 'profile',
                    component: (resolve) => require(['../views/users/show/Profile.vue'], resolve)
                },
                {
                    path: 'focus',
                    component: (resolve) => require(['../views/users/show/Focus.vue'], resolve)
                },
            ]
        },
    ]
})
