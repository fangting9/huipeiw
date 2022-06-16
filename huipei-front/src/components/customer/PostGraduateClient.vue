<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="4"><p @click="this.$router.back()"><el-icon><ArrowLeft /></el-icon>返回</p></el-col>
                <el-col :span="9" :offset="4">
                    <h3 style="text-align: center">汇培网</h3>
                </el-col>
                <el-col :span="7" >
                    <img @click="goHome" style="width: 100%;margin-top: 10%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </div>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 200px;">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.tutorial.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.tutorial.picUrls" :key="i">
                    <img style="width: 95%" :src="item.url">
                </div>
                <div style="width: 100%; text-align: center">
                    <el-button @click="chatVisible=true" round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;height: 34px">科学诊断测试</el-button>
                    <el-button @click="chatVisible=true" round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;height: 34px">1对1课程详情</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <img style="width: 100%" @click="handlePictureCardPreview(form.learningGroup.groupQR.url)" :src="form.learningGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
        <div style="width: 100%;text-align: center">
            <img style="width: 100%"  :src="form.bannerFirst.url">
        </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.coursePlan.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.coursePlan.picUrls" :key="i" style="margin-left: 2%">
                    <el-col :span="12">
                    <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>
                <div style="width: 100%; text-align: center">
                    <el-button @click="chatVisible=true" style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;height: 36px">定制我的复习方案</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.courseConsult.title}}</p>
                    </el-col>
                </el-row>
                <img style="width: 100%" :src="form.courseConsult.banner.url">
                <div style="width: 90%; margin-left: 5%">
                    <el-input v-model="chatPhone" placeholder="请输入手机号我们将严格保障您的信息安全"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;background-color: #456ced;color: white;height: 36px" @click="chatVisible=true">立即获取</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <img style="width: 100%"  :src="form.bannerSecond.url" >
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.coursePurchase.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 90%" :src="form.coursePurchase.banner.url" >
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <div style="width: 100%;text-align: center">
            <img style="width: 100%"  :src="form.courseBook.url" @click="yyDialogVisible=true">
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.signUp.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 90%" :src="form.signUp.banner.url">
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;height: 36px;" @click="signUpDialogVisible=true">马上报名学习</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <img style="width: 100%" :src="form.advisoryService.url">
                <div style="width: 90%; margin-left: 5%">
                    <el-input v-model="chatPhone" placeholder="请输入手机号"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;background-color: #456ced;color: white;height: 36px;" @click="chatVisible=true">点击咨询</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;background: #2f3130; color: white; text-align:center;height:80%">
                <div v-for="(item, i) in form.bottom.columnList" :key="i" style="text-align:center">
                    <el-col :span="120" :offset="2" >
                        <h4 style="margin-bottom: -5%">{{item.title}}</h4>
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align:center">
                <img style="width: 100%;" :src="form.bottom.image.url">
            </div>
        </el-row>

        <el-dialog v-model="dialogVisible" >
            <img  :src="dialogImageUrl" class="dialog-img"/>
        </el-dialog>

        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp :subjectCode="'3'" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :subjectCode="'3'" @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :subjectCode="'3'" :phone="chatPhone" :containDisplay="true"></Chat>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import { ElMessage, } from 'element-plus'
    import router from "@/router";
    import SignUp from './SignUp'
    import Appointment from './Appointment'
    import Chat from './CustomerChat'
    export default {
        name: "PostGraduateClient.vue",
        components:{
            Chat,
            SignUp,
            Appointment
        },
        data() {
            return {
                signUpDialogVisible:false,
                yyDialogVisible:false,
                chatVisible:false,
                dialogImageUrl: '',
                dialogVisible: false,
                chatPhone:'',
                form: {
                    rollingPicUrl: [],
                    tutorial:{
                        title: '',
                        picUrls: [],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    bannerFirst:{url:''},
                    coursePlan: {
                        title: '',
                        picUrls: [],
                    },
                    courseConsult:{
                        title: '',
                        banner:{url:''}
                    },
                    bannerSecond:{url:''},
                    coursePurchase:{
                        title: '',
                        banner:{url:''}
                    },
                    courseBook:{url:''},
                    signUp:{
                        title: '',
                        banner:{url:''}
                    },
                    advisoryService:{url:''},
                    bottom:{
                        columnList:[{title:''},],
                        image:{url:''},
                    }
                }
            }
        },
        created(){
            this.detail();
        },
        methods:{
            toCourseList(){
                router.push({path:"/ccourseList", query:{activeIndex:'3'}})
            },
            detail(){
                axios.get("/admin/graduate/detail").then((response) => {
                    if (response.data){
                        this.form = response.data;
                    }
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            handlePictureCardPreview(url) {
                this.dialogImageUrl= url
                this.dialogVisible = true
            },
            goHome(){
                router.push("/home")
            },
            colseSignUp(value){
                this.signUpDialogVisible = value;
            },
            colseYy(value){
                this.yyDialogVisible = value
            },
            close_chat(value){
                this.chatVisible = value;
            }
        }
    }
</script>

<style scoped>
    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
</style>