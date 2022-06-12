<template>
    <div class="common-layout">
        <el-container class="home_container">
            <el-aside width="200px">
                <div>
                    <img src="../../static/logo.jpg"/>
                </div>
                <el-menu default-active="2"
                         class="el-menu-vertical-demo" router>
                    <el-menu-item index="/dateReport" >
                        <el-icon><histogram/></el-icon>
                        <span>数据报表</span>
                    </el-menu-item>
                    <el-menu-item index="/consultList" >
                        <el-icon><ChatRound /></el-icon>
                        <span>咨询列表</span>
                    </el-menu-item>
                    <el-menu-item index="/homeUpload">
                        <el-icon><upload-filled /></el-icon>
                        <span>首页区域上传</span>
                    </el-menu-item>
                    <el-menu-item index="/subjectList">
                        <el-icon><expand /></el-icon>
                        <span>专题页区域上传</span>
                    </el-menu-item>
                    <el-menu-item index="/courseList">
                        <el-icon><reading /></el-icon>
                        <span>详情页区域上传</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                        <div style="width: 100%">
                            <el-dropdown trigger="click" style="float: right">
                                <span class="el-dropdown-link">
                                  管理员 <el-icon class="el-icon--right"><CaretBottom /></el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                            <div style="float: right">

                                <el-badge is-dot class="item" v-if="unread > 0">
                                    <el-icon @click="toConsultList()" color="black"><BellFilled /></el-icon>
                                </el-badge>
                                <el-icon v-else @click="toConsultList()" color="black"><BellFilled /></el-icon>
                                 &#12288;
                            </div>

                        </div>
                </el-header>
                <el-main class="el-main-div">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
   import router from "@/router";
   import axios from "axios"
   import { ElMessage, } from 'element-plus'
   import commonData from "@/data/commonData";
    export default {
        name: "HomePage",
        components:{
        },
        data() {
            return {
                unread:this.$store.state.unread,
                murmur:'',
            }
        },
        created(){
            this.getAdminSid()
            this.localSocket()
        },
        activated(){

        },
        watch:{
            "$store.state.unread": {
                // eslint-disable-next-line no-unused-vars
                handler: function (newVal, oldVal) {
                    this.unread = newVal
                }
            }

        },
        methods:{
            getAdminSid(){
                console.info(this.unread)
                if (!this.$store.state.sid){
                    if (!this.$store.state.sid){
                        axios.get("/admin/consult/sid").then((response) => {
                            this.$store.commit('SET_SID', response.data)
                        });
                    }
                }
            },
            localSocket() {
                let that = this;
                if ("WebSocket" in window) {
                    console.log("您的浏览器支持 WebSocket!");
                    if (that.ws && that.ws.readyState === 1){
                        return
                    }
                    let sid = sessionStorage.getItem("sid");
                    console.info(commonData.ws)
                    that.ws = new WebSocket(commonData.ws+sid);
                    that.$adminSocked.setWs(that.ws);
                    that.ws.onopen = function () {
                        console.info("连接成功")
                    }
                    that.ws.onclose = function() {
                        // 关闭 websocket
                        console.log("连接已关闭...");
                        setTimeout(() => {
                            that.localSocket();
                        }, 2000);
                    }
                    that.ws.onmessage = this.onmessage

                } else {
                    // 浏览器不支持 WebSocket
                    ElMessage.warn("您的浏览器不支持web聊天")
                    console.log("您的浏览器不支持 WebSocket!");
                }
            },


            loginOut(){
                let request = {account: this.$store.state.user}
                axios.post("/admin/logout/",request).then((response) => {
                    if (response.data){
                        this.$store.commit('REMOVE_INFO');
                        router.push("/login")
                    }
                }).catch(()=>{
                    ElMessage.error("退出失败");
                })
            },
            toConsultList(){
                router.push("/consultList")
            }
        }

    }
</script>

<style  scoped>
    .home_container{
        height: 50em;
    }
    .el-header{
        background-color: #ebf0ff;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;

    }
    .el-aside{
        background-color: rgba(253, 253, 254, 0);
    }

</style>

<style>
    .el-main-div{
        background-color: rgba(230, 230, 230, 0.23);

    }
</style>