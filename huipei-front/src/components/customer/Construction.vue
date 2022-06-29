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
            <div class="block text-center" style="width: 100%;height: 180px;">
                <el-carousel class="elCarousel">
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.constructionEngineerTraining.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.constructionEngineerTraining.picUrls" :key="i" class="divFor">
                    <el-col :span="12">
                        <img @click="chatVisible=true" style="width: 100%" :src="item.url">
                    </el-col>
                </div>
            </div>
            <el-divider class="divider1" border-style="dashed" />
            <div style="width: 100%;text-align: center;">
                <el-col :span="6">
                    <img @click="chatVisible=true" style="width: 60%" :src="form.constructionEngineerTraining.banner.url"/>
                </el-col>
                <el-col :span="10">
                    <div style="text-align: center">
                        <span style="color: #456CED; font-size: 12px">工作年限不够，专业不符能否报考二建</span>
                    </div>

                </el-col>
                <el-col :span="8" :offset="1">
                    <el-button @click="chatVisible=true" class="consultButton" style="color: white;margin-top: 15px;" round>立即咨询</el-button>
                </el-col>

            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%; margin-top: 16px;" @click="handlePictureCardPreview(form.learningGroup.groupQR.url)" :src="form.learningGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%" :src="form.banner.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1" style="padding-left: 16px">
                        <p class="title" style="margin-block-end: 0; margin-block-start: 2em;">{{this.form.titleAppraisal.title}}</p>
                    </el-col>
                    <el-col :span="12">
                        <p @click="toCourseList" class="text_right more" style="margin-block-end: 0; margin-block-start: 2.5em;padding-right: 16px">查看更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.titleAppraisal.detail" :key="i">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1" style="padding-left: 16px;">
                            <img class="hotImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14" style="padding-right: 16px">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.titleName}}</span>
                            </el-row>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.titleDesc}}</span>
                            </el-row>
                            <el-row :gutter="20" >
                                <div style="width: 95%; text-align: right">
                                    <el-button @click="chatVisible=true" class="consultButton marginTop30" type="primary" round>查看详情</el-button>
                                </div>

                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%" @click="handlePictureCardPreview(form.discussGroup.groupQR.url)" :src="form.discussGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%"  :src="form.banner.url">
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="18" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.operator.title}}</p>
                    </el-col>
                </el-row>

                <div v-for="(item,i) in form.operator.picUrls" :key="i" class="divFor">
                    <el-col :span="12">
                        <img style="width: 100%; margin-bottom: 16px;" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="10" style="padding-left: 16px; padding-top: 0;margin-top: -16px;">
            <el-col :span="20">
                <p style="color: #FF2020; font-size: 12px">考试提醒: 错过本次报考, 将延误一年考证</p>
            </el-col>
        </el-row>

        <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
            <div style="width: 100%; text-align: center;">
                 <img @click="yyDialogVisible=true" style="width: 95%" :src="form.appointmentCourse.url">
            </div>
        </el-row>
        <el-row :gutter="10">
            <div style="width: 100%;text-align:left;">

                    <el-col :span="20" :offset="1" style="padding-left: 16px">
                        <p class="title"> {{this.form.examinationConditions.title}}</p>
                    </el-col>

            </div>
        </el-row>
        <el-divider class="divider4" style="margin-top: 0;margin-bottom: 16px;"/>
        <el-row :gutter="10">
            <div style="width: 100%;text-align:center;">
            <el-col :span="24" style="padding-left: 16px;padding-right: 16px">
                <img style="width: 90%; margin-bottom: 16px;" :src="form.examinationConditions.banner.url">
            </el-col>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.fireEngineer.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%; text-align: center">
                    <el-row :gutter="10">
                        <el-col :span="24" >
                            <img style="width: 100%" :src="form.fireEngineer.banner.url">
                        </el-col>
                    </el-row>

                </div>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input prefix-icon="Iphone" style="text-align: center; width: 80%; height: 38px" v-model="chatPhone" placeholder="请输入手机号我们将严格保障您的信息安全" oninput="value=value.replace(/[^\d]/g,'')"
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
                        <h4 class="bottom-column" v-if="item.title.length === 3">{{item.title}}&#12288;</h4>
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
                <Chat @close_chat="close_chat" v-if="chatVisible" :subjectCode="'4'" :phone="chatPhone" :containDisplay="true"></Chat>
            </el-drawer>
        </div>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :subjectCode="'4'"  @change="colseYy"></Appointment>
        </el-dialog>

        <el-dialog v-model="dialogVisible" >
            <img  :src="dialogImageUrl" class="dialog-img"/>
        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios"
    import { ElMessage, } from 'element-plus'
    import router from "@/router";
    import Chat from './CustomerChat'
    import Appointment from './Appointment'

    export default {
        name: "HomeClient",
        components:{
            Chat,
            Appointment
        },
        data() {
            return {
                chatVisible: false,
                dialogImageUrl: '',
                dialogVisible: false,
                chatPhone:'',
                yyDialogVisible:false,
                form: {
                    rollingPicUrl: [],
                    constructionEngineerTraining:{
                        title: '',
                        picUrls: [],
                        banner:{url:''}
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    titleAppraisal:{
                        title:'',
                        detail:[
                            {picUrl:'',titleName:'',titleDesc:''},
                        ]
                    },
                    discussGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    banner:{url:''},
                    operator: {
                        title: '',
                        picUrls: [],
                    },
                    appointmentCourse:{url:''},
                    examinationConditions:{
                        title: '',
                        banner:{url:''}
                    },
                    fireEngineer:{
                        title: '',
                        banner:{url:''}
                    },

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
                router.push({path:`/ccourseList/4`})
            },
            detail(){
                axios.get("/admin/construction/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
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