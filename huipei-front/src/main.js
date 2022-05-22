import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import axios from "axios"
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons-vue'
import commonData from "@/data/commonData";
import qs from 'qs'

var app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.use(ElementPlus);
app.mount('#app');
app.use(commonData)

Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
})
axios.defaults.baseURL = "/api";
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$qs = qs;
