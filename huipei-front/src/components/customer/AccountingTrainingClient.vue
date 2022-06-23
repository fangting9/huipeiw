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
            <div class="block text-center" style="width: 100%;height: 230px">
                <el-carousel class="elCarousel">
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i" >
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
            <div  v-for="(item,i) in this.form.introductionPicUrl" :key="i">
                <img style="width: 85%" :src="item.url">
            </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1">
                        <p class="title">{{this.form.hotCourse.title}}</p>
                    </el-col>
                    <el-col :span="12">
                        <p @click="toCourseList" class="text_right more">查看更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotCourse.detail" :key="i">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1">
                            <img class="hotImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.courseName}}</span>
                            </el-row>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.courseDesc}}</span>
                            </el-row>
                            <el-row :gutter="20" >
                                <div style="width:100%; text-align: right">
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
            <div style="width: 100%;text-align: center">
                <img style="width: 100%" @click="handlePictureCardPreview(form.learningGroup.groupQR.url)" :src="form.learningGroup.displayImage.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="20" :offset="1">
                        <p class="title">{{this.form.financeLaboratory.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.financeLaboratory.picUrls" :key="i" style="text-align: center">
                    <el-col :span="12">
                        <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>


            </div>
        </el-row>
        <div style="width: 100%;text-align: center;margin-bottom: 15px;margin-top: -10px">
            <el-row :gutter="20">
                    <el-col :span="12">
                        <el-button @click="chatVisible=true" class="leftTry" round>申请免费试用</el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="chatVisible=true" class="rightTry" round>申请免费试用</el-button>
                    </el-col>
            </el-row>
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <img style="width: 100%"  :src="form.banner1.url">
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p class="title">{{this.form.professionalTeacher.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.professionalTeacher.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>
                <div style="width: 100%;text-align: center">
                    <el-col :span="8">
                        <img style="width: 70%;" :src="form.professionalTeacher.banner.url"/>
                    </el-col>
                    <el-col :span="14">
                        <div style="text-align: center; margin-top: 20%">
                            <span style="color: #3D81EF; font-size: 12px">阅读更多培训课程</span><br>
                            <span style="color: #161616 ;font-size: 10px">随时掌握更多课程</span>
                        </div>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <div style="text-align: right;margin-top: 20%;">
                            <el-button @click="yyDialogVisible=true" class="subscription" round>立即订阅</el-button>
                        </div>
                    </el-col>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p class="title">{{this.form.specialTeaching.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.specialTeaching.picUrls" :key="i" >
                    <el-col :span="12">
                        <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <img style="width: 100%"  :src="form.banner2.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p class="title">{{this.form.careerProgression.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img  style="width: 90%" :src="form.careerProgression.banner.url">
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;height: 36px;">立即规划</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p class="title">{{this.form.employmentServices.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 90%" :src="form.employmentServices.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-col :span="24">
                    <img style="width: 100%" :src="form.advisoryService.url">
                </el-col>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input prefix-icon="Iphone" style="text-align: center; width: 80%; height: 38px" v-model="chatPhone" placeholder="请输入手机号" oninput="value=value.replace(/[^\d]/g,'')"
                                  maxlength="11" @blur="telTest"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-button style="margin-top:5%;width: 60%;background-color: #456ced;color: white;height: 36px;" @click="chatVisible=true">点击咨询</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p class="title">{{this.form.hotActivity.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.hotActivity.picUrls" :key="i">
                    <el-row :gutter="10">
                    <el-col :span="24">
                        <img @click="signUpDialogVisible=true" style="width: 90%;" :src="item.url">
                    </el-col>
                    </el-row>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 5px;margin-bottom: 10px">
                    <el-button @click="chatVisible=true" style=" width: 60%;background-color: #456ced;color: white;height: 36px;">咨询更多优惠</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;background: #2F3130; color: white; text-align:center;height:80%">
                <div v-for="(item, i) in form.bottom.columnList" :key="i" >
                    <el-col :span="12" :offset="2" >
                        <h4 class="bottom-column">{{item.title}}</h4>
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
            <SignUp :subjectCode="'2'" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :subjectCode="'2'"  @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :subjectCode="'2'" :phone="chatPhone" :containDisplay="true"></Chat>
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
        name: "AccountingTrainingClient",
        components:{
            Chat,
            SignUp,
            Appointment
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                signUpDialogVisible:false,
                yyDialogVisible:false,
                chatVisible:false,
                chatPhone:'',
                form: {
                    rollingPicUrl: [],
                    introductionPicUrl:[],
                    financeLaboratory: {
                        title: '',
                        picUrls: [],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    banner1:{url:''},
                    banner2:{url:''},
                    hotCourse:{
                        title:'',
                        detail:[
                            {picUrl:'',courseName:'',courseDesc:''},
                        ]
                    },
                    professionalTeacher: {
                        title: '',
                        picUrls: [],
                        banner:{url:''}
                    },
                    specialTeaching:{
                        title: '',
                        picUrls: [],
                    },
                    careerProgression:{
                        title: '',
                        banner:{url:''}
                    },
                    employmentServices:{
                        title: '',
                        banner:{url:''}
                    },

                    advisoryService:{url:''},
                    hotActivity:{
                        title:'',
                        picUrls: [],
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
                router.push({path:"/ccourseList", query:{activeIndex:'2'}})
            },
            detail(){
                axios.get("/admin/accountant/detail").then((response) => {
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
                    ElMessage.error("手机号码错误");
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
    .leftTry{
        height: 18px;
        color:white;
        border-color: #2D9BF6;
        --el-button-border-color:#2D9BF6;
        background-color:#2D9BF6;
        font-size: 10px;
        font-family: PingFang SC-Regular;
        text-align: center;
        width: 60%;
    }
    .rightTry{
        height: 18px;
        color:white;
        border-color: #5A90FF;
        --el-button-border-color:#5A90FF;
        background-color:#5A90FF;
        font-size: 10px;
        font-family: PingFang SC-Regular;
        text-align: center;
        width: 60%;
    }
    .subscription{
        color: white;
        height: 24px;
        font-size: 10px;
        background: #456CED;
        border-color: #456CED;
        --el-button-border-color:#456CED;
        margin-top: 15px;
    }

</style>