import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: Layout,
            children: [
                {
                    path: '/dashboard',
                    component: () => import('@/views/Dashboard.vue'),
                    name: 'Dashboard',
                    meta: {title: 'dashboard'}
                },
                {
                    path: '/markdown',
                    component: () => import('@/views/MarkDown.vue'),
                    name: 'MarkDown',
                    meta: {title: 'markdown'}
                },
                {
                    path: '/form',
                    component: () => import('@/views/Form.vue'),
                    name: 'Form',
                    meta: {title: 'form'}
                },
                {
                    path: '/table',
                    component: () => import('@/views/Table.vue'),
                    name: 'Table',
                    meta: {title: 'Table'}
                },
                {
                    path: '/tabs',
                    component: () => import('@/views/Tabs.vue'),
                    name: 'Tabs',
                    meta: {title: 'Tabs'}
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router