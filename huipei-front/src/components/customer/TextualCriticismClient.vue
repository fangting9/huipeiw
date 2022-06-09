<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="9" :offset="8">
                    <h3 style="text-align: center">汇培网</h3>
                </el-col>
                <el-col :span="7" >
                    <img @click="goHome" style="width: 100%;margin-top: 10%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>

        </div>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 180px;">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.teacherCertification.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.teacherCertification.banner.url">
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="signUpDialogVisible=true" round style="width: 40%;background-color: #456ced;color: white;">非师范生报名</el-button>
                    <el-button @click="signUpDialogVisible=true" round style="width: 40%;background-color: #456ced;color: white;">报名条件查询</el-button>
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
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="7">
                        <p>{{this.form.psychologists.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.psychologists.picUrls" :key="i">
                    <el-col :span="8">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.courseConsultation.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.courseConsultation.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <div style="width: 90%; margin-left: 5%">
                    <el-input v-model="chatPhone" placeholder="请输入手机号"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;">点击咨询</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="8" :offset="1">
                        <p>{{this.form.HRMD.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.HRMD.banner.url">
                </div>
                <el-row :gutter="20">
                    <el-col :span="30" :offset="1">
                        <p style="color: red; font-size: x-small;">重要提示: 避免以后受政策影响, 错过本次报名, 明年或从助理级逐级报考</p>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 100%" :src="form.courseReservation.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.healthManager.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.healthManager.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" @click="chatVisible = true" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.purchaseCourseService.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.purchaseCourseService.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <img style="width: 100%" :src="form.advisoryService.url">
                <div style="width: 90%; margin-left: 5%">
                    <el-input placeholder="请输入手机号"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;">点击咨询</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;background: #2f3130; color: white; text-align:center;height:80%">
                <div v-for="(item, i) in form.bottom.columnList" :key="i" >
                    <el-col :span="120" :offset="2" >
                        <h4>{{item.title}}</h4>
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align:center">
                <img style="width: 100%;" :src="form.bottom.image.url">
            </div>
        </el-row>

        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" :subjectCode="'2'" :phone="chatPhone" :containDisplay="true"></Chat>
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
        methods:{
            toCourseList(){
                router.push({path:"/ccourseList", query:{activeIndex:'5'}})
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
            }

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

</style>