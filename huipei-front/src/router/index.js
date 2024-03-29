
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/login',
        meta: { title: '登录页面' },
        component: () => import('../components/LoginPage')
    },
    {
        path: '/',
        meta: { title: '汇培网' },
        component: () => import('../components/customer/HomeClient')
    },
    {
        path: '/homePage',
        component: () => import('../components/HomePage'),
        meta: {
            requireAuth: true
        },
        children:[
            {
                path:'/dateReport',
                name:'dateReport',
                component:()=>import('../components/DateReport'),
            },
            {
                path:'/consultList',
                name:'consultList',
                component:()=>import('../components/ConsultList'),
            },
            {
                path:'/homeUpload',
                name:'homeUpload',
                component:()=>import('../components/HomeUpload'),
            },
            {
                path:'/subjectList',
                name:'subjectList',
                component:()=>import('../components/SubjectList'),
            },
            {
                path:'/courseList',
                name:'courseList',
                component:()=>import('../components/CourseList'),
            },
            {
                path:'/educationImprove',
                name:'educationImprove',
                component:()=>import('../components/subject/EducationImprove'),
            },
            {
                path:'/accountingTraining',
                name:'accountingTraining',
                component:()=>import('../components/subject/AccountingTraining'),
            },
            {
                path:'/constructionEngineerTraining',
                name:'constructionEngineerTraining',
                component:()=>import('../components/subject/ConstructionEngineerTraining'),
            },
            {
                path:'/textualCriticism',
                name:'textualCriticism',
                component:()=>import('../components/subject/TextualCriticism'),
            },
            {
                path:'/graduate',
                name:'graduate',
                component:()=>import('../components/subject/Postgraduate'),
            },
            {
                path:'/courseUpload',
                name:'courseUpload',
                component:()=>import('../components/courseDetail/CourseUpload'),
            },
            {
                path:'/textEdit',
                name:'textEdit',
                component:()=>import('../components/TextEdit')
            }

        ]
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../components/customer/HomeClient'),
    },
    {
        path:'/ceducation',
        name:'ceducation',
        component:()=>import('../components/customer/EducationImproveClient'),
    },
    {
        path:'/caccount',
        name:'caccount',
        component:()=>import('../components/customer/AccountingTrainingClient'),
    },
    {
        path:'/cgraduate',
        name:'cgraduate',
        component:()=>import('../components/customer/PostGraduateClient'),
    },
    {
        path:'/construction',
        name:'construction',
        component:()=>import('../components/customer/Construction'),
    },
    {
        path:'/textual',
        name:'textual',
        component:()=>import('../components/customer/TextualCriticismClient'),
    },
    {
        path:'/course/:id',
        name:'course',
        component:()=>import('../components/customer/CourseDetailClient'),
    },
    {
        path:'/ccourseList/:activeIndex',
        name:'ccourseList',
        component:()=>import('../components/customer/CourseListClient'),
    },



];


const router = createRouter({
 //  history: createWebHashHistory(),  // hash路由模式
    history: createWebHistory(),  // history路由模式
    routes
});

export default router;


