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
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="20">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.teacherCertification.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%;text-align: center">
                    <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
                        <div style="width: 100%; text-align: center;">
                            <img style="width: 90%" :src="form.teacherCertification.banner.url">
                        </div>
                    </el-row>

                </div>

                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="signUpDialogVisible=true" round style="width: 35%;background-color: #2D9BF6;color: white;height: 36px;font-size: 14px;">非师范生报名</el-button>
                    <el-button @click="signUpDialogVisible=true" round style="width: 35%;background-color: #5A90FF;color: white;height: 36px;font-size: 14px;margin-left: 40px">报名条件查询</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%" @click="handlePictureCardPreview(form.learningGroup.groupQR.url)" :src="form.learningGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img class="imgPhone" :src="form.banner.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.psychologists.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.psychologists.picUrls" :key="i" class="divFor">
                    <el-col :span="8" style="padding-left: 0;padding-right: 0;">
                        <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.courseConsultation.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%; text-align: center">
                    <img style="width: 100%" :src="form.courseConsultation.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
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
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.HRMD.title}}</p>
                    </el-col>
                </el-row>

                <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
                    <div style="width: 100%; text-align: center;">
                        <img style="width: 90%" :src="form.HRMD.banner.url">
                    </div>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="22" :offset="1" style="padding-left: 16px;">
                        <p style="color: #FF2020; font-size: 12px;">重要提示: 避免以后受政策影响, 错过本次报名, 明年或从助理级逐级报考</p>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 95%" :src="form.courseReservation.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.healthManager.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.healthManager.picUrls" :key="i" class="divFor">
                    <el-col :span="12">
                        <img style="width: 100%" @click="chatVisible = true" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.purchaseCourseService.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%; text-align: center">
                    <el-row :gutter="10">
                        <el-col :span="24" style="padding-left: 16px;padding-right: 16px">
                            <img style="width: 90%" :src="form.purchaseCourseService.banner.url">
                        </el-col>
                    </el-row>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-col :span="24">
                    <img style="width: 100%;margin-top: 16px;" :src="form.advisoryService.url">
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
                    <el-col :span="12" :offset="2" >
                        <h4 class="bottom-column" v-if="item.title.length === 4">{{item.title}} &#12288;</h4>
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

        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :subjectCode="'2'" :phone="chatPhone" :containDisplay="true"></Chat>
            </el-drawer>
        </div>
        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp :subjectCode="'5'" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :subjectCode="'5'"  @change="colseYy"></Appointment>
        </el-dialog>
        <el-dialog v-model="dialogVisible" >
            <img  :src="dialogImageUrl" class="dialog-img"/>
        </el-dialog>
    </div>
</template>

<script>
    import { ElMessage, } from 'element-plus'
    import axios from "axios"
    import router from "@/router";
    import SignUp from './SignUp'
    import Appointment from './Appointment'
    import Chat from './CustomerChat'

    export default {
        name: "HomeClient",
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
                chatPhone:'',
                dialogImageUrl: '',
                dialogVisible: false,
                form: {
                    rollingPicUrl: [],
                    teacherCertification:{
                        title: '',
                        banner:{url:''}
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    banner:{url:''},
                    psychologists: {
                        title: '',
                        picUrls: [],
                    },
                    courseConsultation:{
                        title: '',
                        banner:{url:''}
                    },
                    HRMD:{
                        title: '',
                        banner:{url:''}
                    },

                    courseReservation:{url:''},

                    healthManager:{
                        title: '',
                        picUrls: [],
                    },
                    purchaseCourseService:{
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
                router.push({path:`/ccourseList/5`})
            },
            detail(){
                axios.get("/admin/exam/detail").then((response) => {
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
    .hitConsultButton{
        width: 245px;
        background-color: #456ced;
        color: white;
    }

    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
    .button1{
        width: 60%;background-color: #456ced;color: white;height: 36px;margin-top: 5%; margin-bottom: 5%;
    }
</style>