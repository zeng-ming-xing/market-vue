import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
        path: "",
        //定义默认首页
        redirect: "/main"
    }, {
        path: '/main',
        name: 'main',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/main.vue')
    },
    {
        path: '/category',
        name: 'category',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/category.vue')
    },
    {
        path: "/cart",
        name: "cart",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/cart.vue')
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router