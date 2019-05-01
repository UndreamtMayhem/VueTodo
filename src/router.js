import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/important',
            name: 'important',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Important.vue')
        },
        {
            path: '/planned',
            name: 'planned',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Planned.vue')
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Tasks.vue')
        }
    ]
})