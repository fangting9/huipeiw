<template>
    <div class="overflow">
        <el-header style="width: 100%; height: 60px;text-align: center">
            <el-row :gutter="10">
                <el-col :span="8" >
                    <div style="text-align: left">
                        <h3 ><el-icon @click="this.$router.back()" style="vertical-align: -30%"><CloseBold /></el-icon></h3>
                    </div>
                </el-col>
                <el-col :span="8" >
                    <h3 class="pageTitle">汇培网</h3>
                </el-col>
                <el-col :span="8" >
                    <img class="mini-logo" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;">
                <el-carousel class="elCarousel" :height="getH" v-if="form.rollingPicUrl?.[0] != null">
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.tutorial.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.tutorial.picUrls" :key="i" style="width: 100%; ">
                    <div style="width: 100%;padding-left:0;padding-right: 32px;" v-if="i===0">
                        <img style="width: 90%;"  :src="item.url">
                    </div>
                    <div style="width: 100%;padding-left:15px;padding-right: 15px;" v-else>
                        <img style="width: 92%;"  :src="item.url">
                    </div>


                </div>
                <div style="width: 100%; text-align: center">
                    <el-button @click="chatVisible=true" round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;height: 34px; ">科学诊断测试</el-button>
                    <el-button @click="chatVisible=true" round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;height: 34px;margin-left: 25px;">1对1课程详情</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <img style="width: 100%; margin-top:20px;" @click="handlePictureCardPreview(form.learningGroup.groupQR.url)" :src="form.learningGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
        <div style="width: 100%;text-align: center">
            <img style="width: 98%"  :src="form.bannerFirst.url">
        </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.coursePlan.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.coursePlan.picUrls" :key="i" class="divFor">
                    <el-col :span="12">
                    <img style="width: 100%; margin-bottom: 16px;" :src="item.url">
                    </el-col>
                </div>
                <div style="width: 100%; text-align: center">
                    <el-button @click="chatVisible=true" style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;height: 36px">定制我的复习方案</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-col :span="24">
                    <img style="width: 100%; margin-top:30px;" :src="form.advisoryService.url">
                </el-col>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input prefix-icon="Iphone" style="text-align: center; width: 80%; height: 38px" v-model="chatPhone" placeholder="请输入手机号我们将严格保障您的信息安全" oninput="value=value.replace(/[^\d]/g,'')"
                                  maxlength="11" @blur="telTest"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-button class="button1" @click="chatVisible=true">立即获取</el-button>
                    </el-col>
                </el-row>
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
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="7" :offset="1" style="padding-left: 16px">
                        <p class="title">{{this.form.coursePurchase.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%; text-align: center">
                    <el-row :gutter="10">
                        <el-col :span="24" style="padding-left: 16px;padding-right: 16px">
                            <img style="width: 90%" :src="form.coursePurchase.banner.url">
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 95%;margin-top: 30px;" :src="form.courseBook.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.signUp.title}}</p>
                    </el-col>
                </el-row>

                <div style="width: 100%; text-align: center">
                    <el-row :gutter="10">
                        <el-col :span="24" style="padding-left: 16px;padding-right: 16px">
                            <img style="width: 90%" :src="form.signUp.banner.url">
                        </el-col>
                    </el-row>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;height: 36px;" @click="signUpDialogVisible=true">马上报名学习</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-col :span="24">
                    <img style="width: 100%; margin-top:30px;" :src="form.advisoryService.url">
                </el-col>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input prefix-icon="Iphone" style="text-align: center; width: 80%; height: 38px" v-model="chatPhone" placeholder="请输入手机号" oninput="value=value.replace(/[^\d]/g,'')"
                                  maxlength="11" @blur="telTest"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-button class="button1" @click="chatVisible=true">点击咨询</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%;background: #2F3130; color: white; text-align:center;height:80%">
                <div v-for="(item, i) in form.bottom.columnList" :key="i" >
                    <el-col :span="12" :offset="2" style="padding-left: 20px">
                        <h4 class="bottom-column" v-if="item.title.length === 3">{{item.title}}&#12288;&#12288;</h4>
                        <h4 class="bottom-column" v-else>{{item.title}}</h4>
                    </el-col>
                </div>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%;text-align:center">
                <img style="width: 100%;margin-bottom: -5px;" :src="form.bottom.image.url">
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
        computed:{
            getH(){
                return document.documentElement.clientWidth/434 * 222 + 'px';
            }
        },
        methods:{
            toCourseList(){
                router.push({path:`/ccourseList/3`})
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
                this.chatPhone = '';
            },
            telTest () {
                const reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (this.chatPhone=== '' || this.chatPhone.length <= 10 || !reg.test(this.chatPhone)) {
                    ElMessage({
                        message: '请输入正确的手机号',
                        center: true,
                        offset: 200,
                        type: 'error',
                    });
                }
            },
        }
    }
</script>

<style scoped>
    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
    .button1{
        width: 60%;background-color: #456ced;color: white;height: 36px;margin-top: 5%; margin-bottom: 5%;
    }
</style>