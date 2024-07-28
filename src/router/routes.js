import Layout from '../views/layout.vue'
const routes = [
    {
        path: '/',
        redirect: '/book/bookMake/details',
    },
    {
        path: '/book',
        name: 'book',
        component: Layout,
        redirect: '/book/bookMake/details',
        children: [
            {
                path: 'bookMake/list',
                name: 'makeList',
                component: () => import(/* webpackChunkName: "makeList" */ '../views/bookMake/list.vue'),
                meta: { title: '文书制作', keepAlive: false }
            },
            {
                path: 'bookMake/details',
                name: 'makeDetails',
                component: () => import(/* webpackChunkName: "makeDetails" */ '../views/bookMake/details.vue'),
                meta: { title: '文书制作', keepAlive: true }
            },
            {
                path: 'bookExa/list',
                name: 'exaList',
                component: () => import(/* webpackChunkName: "makeList" */ '../views/bookExa/list.vue'),
                meta: { title: '文书审核', keepAlive: false }
            },
            {
                path: 'bookExa/details',
                name: 'exaDetails',
                component: () => import(/* webpackChunkName: "exaDetails" */ '../views/bookExa/details.vue'),
                meta: { title: '文书审核', keepAlive: true }
            },
            {
                path: 'bookApp/list',
                name: 'appList',
                component: () => import(/* webpackChunkName: "appList" */ '../views/bookApp/list.vue'),
                meta: { title: '文书审批', keepAlive: false }
            },
            {
                path: 'bookApp/details',
                name: 'appDetails',
                component: () => import(/* webpackChunkName: "appDetails" */ '../views/bookApp/details.vue'),
                meta: { title: '文书审批', keepAlive: true }
            },
            {
                path: 'bookIss/list',
                name: 'IssList',
                component: () => import(/* webpackChunkName: "IssList" */ '../views/bookIss/list.vue'),
                meta: { title: '文书签发', keepAlive: false }
            },
            {
                path: 'bookIss/details',
                name: 'IssDetails',
                component: () => import(/* webpackChunkName: "IssDetails" */ '../views/bookIss/details.vue'),
                meta: { title: '文书签发', keepAlive: true }
            },
            {
                path: 'bookPrint/list',
                name: 'bookPrintList',
                component: () => import(/* webpackChunkName: "bookPrintList" */ '../views/bookPrint/list.vue'),
                meta: { title: '文书打印', keepAlive: false }
            },
            {
                path: 'bookPrint/details',
                name: 'bookPrintDetails',
                component: () => import(/* webpackChunkName: "bookPrintDetails" */ '../views/bookPrint/details.vue'),
                meta: { title: '文书打印', keepAlive: true }
            },
        ],
    }
]

export default routes;