import Layout from '../views/layout.vue'
const routes = [
    {
        path: '/',
        redirect: '/book/makeList',
    },
    {
        path: '/book',
        name: 'book',
        component: Layout,
        redirect: '/book/makeList',
        children: [
            {
                path: 'makeList',
                name: 'makeList',
                component: () => import(/* webpackChunkName: "makeList" */ '../views/bookMake/list.vue'),
                meta: { title: '文书制作', keepAlive: false }
            },
            {
                path: 'makeDetails',
                name: 'makeDetails',
                component: () => import(/* webpackChunkName: "makeDetails" */ '../views/bookMake/details.vue'),
                meta: { title: '文书制作', keepAlive: true }
            },
            {
                path: 'exaList',
                name: 'exaList',
                component: () => import(/* webpackChunkName: "makeList" */ '../views/bookExa/list.vue'),
                meta: { title: '文书审核', keepAlive: false }
            },
            {
                path: 'exaDetails',
                name: 'exaDetails',
                component: () => import(/* webpackChunkName: "exaDetails" */ '../views/bookExa/details.vue'),
                meta: { title: '文书审核', keepAlive: true }
            },
            {
                path: 'appList',
                name: 'appList',
                component: () => import(/* webpackChunkName: "appList" */ '../views/bookApp/list.vue'),
                meta: { title: '文书审批', keepAlive: false }
            },
            {
                path: 'appDetails',
                name: 'appDetails',
                component: () => import(/* webpackChunkName: "appDetails" */ '../views/bookApp/details.vue'),
                meta: { title: '文书审批', keepAlive: true }
            },
            {
                path: 'IssList',
                name: 'IssList',
                component: () => import(/* webpackChunkName: "IssList" */ '../views/bookIss/list.vue'),
                meta: { title: '文书签发', keepAlive: false }
            },
            {
                path: 'IssDetails',
                name: 'IssDetails',
                component: () => import(/* webpackChunkName: "IssDetails" */ '../views/bookIss/details.vue'),
                meta: { title: '文书签发', keepAlive: true }
            },
            {
                path: 'bookPrint',
                name: 'bookPrint',
                component: () => import(/* webpackChunkName: "bookPrint" */ '../views/bookPrint/list.vue'),
                meta: { title: '表单验证', keepAlive: false }
            },
        ],
    }
]

export default routes;