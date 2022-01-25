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
        path: "/error",
        component: Error
    },

    {
        path: "/api",
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
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASH_URL),
    routes: routes
})

export default router