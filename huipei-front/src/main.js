import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import axios from "axios"
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons-vue'
import commonData from "@/data/commonData";
import Swiper from './components/util/Swiper'
import SwiperItem from './components/util/SwiperItem'
import '../public/index.css'
import Chat from './components/customer/CustomerChat'
import store from './store'
import Vuex from 'vuex'
import adminSocked from '@/socket/socket'



var app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.use(ElementPlus);
app.use(commonData);
app.use(store)
app.use(Vuex)
app.use(adminSocked)
app.mount('#app');

Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
})
axios.defaults.baseURL = "/api";
axios.defaults.headers.common['token'] = store.state.token;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$adminSocked = adminSocked;


//钩子函数，访问路由前调用
router.beforeEach((to, from, next) => {
        //路由需要认证
        if (to.meta.requireAuth) {
            //判断store里是否有token
            console.info("token====")
            console.info(store.state.token)
            if (store.state.token) {
                next()
            } else {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                })
            }
        } else {
            next()
        }
    }
)
export {
    Swiper, SwiperItem, Chat
}

