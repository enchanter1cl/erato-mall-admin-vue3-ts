
const constantRoutes = [

    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/layout/Layout.vue'),
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('@/views/AddGood.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () => import('@/views/Swiper.vue')
    },
    {
        path: '/acl',
        name: 'acl',
        component: () => import("@/views/acl/index.vue")
    }

]

export default constantRoutes;