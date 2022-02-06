import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index"
import BigIndex from "../views/bigIndex"
import Error from "../views/error"
import Api from "../views/api/md"
import ApiImg from "../views/api/img"
import ApiPixiv from "../views/api/pixiv"
import ApiSkln from "../views/api/skln"
import ApiBilibili from "../views/api/bilibili"
import ApiInfo from "../views/api/info"
import Tools from "../views/tools/md"
import ToolsSkln from "../views/tools/skln"
import Blhx from "../views/dynamic/blhx"


const routes = [
    {
        path: "/",
        component: BigIndex,
        title:"SakuraTools"
    },

    {
        path: "/index",
        component: Index,
        title:"SakuraTools"
    },

    {
        path: "/dynamic/blhx",
        component: Blhx
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
        path: "/api/info",
        component: ApiInfo
    },

    {
        path: "/tools/md",
        component: Tools
    },

    {
        path: "/tools/skln",
        component: ToolsSkln
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
    // 让页面回到顶部
    document.documentElement.scrollTop = 0
    
    // 如果未匹配到路由
    if (to.matched.length === 0) {
        next('/error') 
    }

    next()
})

export default router