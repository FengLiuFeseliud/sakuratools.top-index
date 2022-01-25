import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index"
import Error from "../views/error"
import Api from "../views/api/md"
import ApiImg from "../views/api/img"
import ApiPixiv from "../views/api/pixiv"
import ApiSkln from "../views/api/skln"
import ApiBilibili from "../views/api/bilibili"


const routes = [
    {
        path: "/",
        component: Index
    },

    {
        path: "/api/md",
        component: Api
    },

    {
        path: "/api/img",
        component: ApiImg
    },

    {
        path: "/api/pixiv",
        component: ApiPixiv
    },

    {
        path: "/api/skln",
        component: ApiSkln
    },

    {
        path: "/api/bilibili",
        component: ApiBilibili
    },

    {
        path: "/error",
        component: Error
    },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASH_URL),
    routes: routes

});

router.beforeEach((to, from, next) => {
    // 如果未匹配到路由
    if (to.matched.length === 0) {
        next('/error') 
    } else {
        next()
    }
})

export default router