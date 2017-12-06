import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'index',
            component: (resolve) => require(['../views/Index.vue'], resolve),
            children: []
        },
        {
            path: '/login',
            name:'login',
            component: (resolve) => require(['../views/auth/Login.vue'], resolve)
        },
        {
            path: '/active/:token',
            name:'active',
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
            name:'topics.index',
            component: (resolve) => require(['../views/topics/Index.vue'], resolve),
        },
        {
            path: '/topics/:topic/edit',
            name:'topics.edit',
            component: (resolve) => require(['../views/topics/Edit.vue'], resolve)
        },
        {
            path: '/topics',
            name:'topics.create',
            component: (resolve) => require(['../views/topics/Create.vue'], resolve)
        },
        {
            path: '/settings',
            name:'user.settings',
            component: (resolve) => require(['../views/users/settings/Settings.vue'], resolve)
        },
        {
            path: '/user/:user',
            name:'user.show',
            component: (resolve) => require(['../views/users/show/Basic.vue'], resolve),
            children:[
                {
                    path: 'profile',
                    name:'user.show.profile',
                    component: (resolve) => require(['../views/users/show/Profile.vue'], resolve)
                },
                {
                    path: 'focus',
                    name:'user.show.focus',
                    component: (resolve) => require(['../views/users/show/Focus.vue'], resolve)
                },
            ]
        },
    ]
})
