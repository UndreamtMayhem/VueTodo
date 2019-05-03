import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/important',
            name: 'important',
            component: () =>
                import ( /* webpackChunkName: "important" */ './views/Important.vue')
        },
        {
            path: '/planned',
            name: 'planned',
            component: () =>
                import ( /* webpackChunkName: "planned" */ './views/Planned.vue')
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () =>
                import ( /* webpackChunkName: "tasks" */ './views/Tasks.vue')
        },
        {
            path: '/search/:name',
            component: () =>
                import ( /* webpackChunkName: "search" */ './views/PersonalList.vue'),

        },
        {
            path: "*",
            component: () =>
                import ( /* webpackChunkName: "PageNotFound" */ './views/PageNotFound.vue')
        }

    ]
})