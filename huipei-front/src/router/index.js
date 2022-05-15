
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        meta: { title: '登录页面' },
        component: () => import('../components/LoginPage')
    },
    {
        path: '/homePage',
        component: () => import('../components/HomePage'),
        children:[
            {
                path:'/dateReport',
                name:'dateReport',
                component:()=>import('../components/DateReport'),
            },
            {
                path:'/homeUpload',
                name:'homeUpload',
                component:()=>import('../components/HomeUpload'),
            },
            {
                path:'/subjectUpload',
                name:'subjectUpload',
                component:()=>import('../components/SubjectUpload'),
            },
            {
                path:'/courseUpload',
                name:'courseUpload',
                component:()=>import('../components/CourseUpload'),
            },
        ]
    },

];


const router = createRouter({
   history: createWebHashHistory(),  // hash路由模式
 //    history: createWebHistory(),  // history路由模式
    routes
});

export default router;


