import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router=new Router({
    mode:"history",//1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL, //自动获取根目录路径
    scrollBehavior:(to,from,position)=>{
        if(position){
            return position
        }else{
            return {x:0,y:0}
        }
    },
    routes:[
        {
            path:"/",
            name:"home",
            redirect:'/index',
            component:()=>import("./pages/home/main"),//路由懒加载解决首屏加载慢，性能优化
            meta:{keepAlive:false},
            children:[
                {
                    path:"index",
                    name:"index",
                    component:()=>import("./pages/home/index"),
                    meta:{keepAlive:false,title:"首页"},
                },
                {
                    path:"cart",
                    name:"cart",
                    component:()=>import("./pages/home/cart"),
                    meta:{keepAlive:false,title:"购物车"},
                },
                {
                    path:"my",
                    name:"my",
                    component:()=>import("./pages/home/my"),
                    meta:{keepAlive:false,title:"我的"},
                },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("./pages/home/login"),
            meta:{keepAlive:false}
        },
        {
            path:"/ucenter",
            name:"ucenter",
            component:()=>import("./pages/user/ucenter"),
            // meta:{auth:true}
            // beforeEnter:(to,from,next)=>{
            //     if (Boolean(localStorage['isLogin'])){
            //         next();
            //     } else{
            //         next("/login");
            //     }
            //
            // }
        },

    ]
});
// router.beforeEach((to,from,next)=>{
//     // console.log(to);
//     if (to.meta.auth){
//         if (Boolean(localStorage['isLogin'])){
//             next();
//         } else {
//             next("/login");
//         }
//     } else {
//         next();
//     }
// });
export default router;