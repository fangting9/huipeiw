<template>
    <div class="overflow">
        <el-header style="width: 100%; height: 60px;text-align: center">
            <el-row :gutter="10">
                <el-col :span="8" ></el-col>
                <el-col :span="8" >
                    <h3 class="pageTitle">首页</h3>
                </el-col>
                <el-col :span="8" >
                    <img class="mini-logo" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;">
                <el-carousel style="height: 100%" :height="getH" v-if="form.rollingPicUrl?.[0] != null">
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                            <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-row :gutter="10">
            <div style="width: 100%;margin-inline-start: 20px;  margin-top:10px;text-align: center;">
                <div v-for="(item,i) in this.form.brandIntroductionPicUrl" :key="i">
                    <el-col :span="4" style="margin-left: 2%">
                        <img class="image50" :src="item.picUrl" alt="" @click="toGo(item.code)">
                        <p class="text-small" @click="toGo(item.code)">{{item.name}}</p>
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1"  style="padding-left: 16px">
                        <p class="title">{{this.form.hotTopic.title}}</p>
                    </el-col>
                    <el-col :span="12" style="padding-right: 16px">
                        <p class="text_right more" @click="toCourseList(1)">了解更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotTopic.detail" :key="i" style="text-align: left;">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1" style="padding-left: 16px">
                            <img @click="toCourseDetail(item.courseId)" class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                                <el-row :gutter="10" >
                                    <span @click="toCourseDetail(item.courseId)" class="courseName">{{item.courseName}}</span>
                                </el-row>
                                <el-row :gutter="10">
                                    <span class="courseDesc" style="margin-top: 1%; margin-bottom: 2%">{{item.desc}}</span>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="12">
                                        <span style="margin-left: -5px;" class="courseNum">{{item.applyNum}}人报名</span>
                                    </el-col>
                                    <el-col :span="12" style="padding-right: 16px">
                                        <el-button @click="chatVisible=true" class="signUpButton" round>咨询</el-button>
                                    </el-col>
                                </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div class="Top30" style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1"  style="padding-left: 16px">
                        <p class="title">{{this.form.examContest.title}}</p>
                    </el-col>
                    <el-col :span="12" style="padding-right: 16px">
                        <p class="text_right more" @click="chatVisible=true">查看详情<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.examContest.detail" :key="i">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1" style="padding-left: 16px">
                            <img @click="toCourseDetail(item.courseId)" class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="10">
                                <span @click="toCourseDetail(item.courseId)" class="examContestName" style="margin-top: 1%">{{item.desc}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span  style="margin-top: 4%; margin-bottom: 2%; font-size: 13px" >{{item.price}}人报名</span>
                            </el-row>
                            <el-row :gutter="10">
                                <el-col :span="17">
                                    <span class="courseNum">{{item.status}}</span>
                                </el-col>
                                <el-col :span="6">
                                    <el-button @click="chatVisible=true" class="signUpButton" style="text-align: left; margin-left: 0" round>咨询</el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;" v-if="this.form.campusEnvironment.title">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1" style="padding-left: 16px">
                        <p class="title">{{this.form.campusEnvironment.title}}</p>
                    </el-col>
                    <el-col :span="12">
                        <p @click="yyDialogVisible=true" class="text_right more" style="padding-right: 16px">立即预约<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.campusEnvironment.picUrls" :key="i" class="divFor">
                    <el-col :span="12" style="padding-bottom: 16px">
                        <img style="width: 100%; height: 100%;" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;" v-if="this.newForm.organization && this.newForm.organization.title">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1"  style="padding-left: 16px">
                        <p class="title">{{this.newForm.organization.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.newForm.organization.detail" :key="i">
                    <el-row :gutter="10">
                        <el-col :span="13" :offset="2" style="padding-left: 6px">
                            <el-row :gutter="10" style="height: 66%">
                                <span  class="examContestName" style="margin-top: 1%">{{item.content}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <el-col :span="16">
                                    <span class="courseNum">{{item.name}}</span>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="7"  >
                            <img  class="courseImage" :src="item.picUrl">
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;" v-if="this.newForm.hotConsult && this.newForm.hotConsult.title">
                <el-row :gutter="10" >
                    <el-col :span="10" :offset="1" style="padding-left: 16px">
                        <p class="title">{{this.newForm.hotConsult.title}}</p>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10" style="padding-bottom: 16px" :offset="2">
                        <img style="width: 100%; height: 100%;" :src="this.newForm.hotConsult.picUrl1.url">
                    </el-col>

                    <el-col :span="10" style="padding-bottom: 16px">
                        <img style="width: 100%; height: 100%;" :src="this.newForm.hotConsult.picUrl2.url">
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="20" style="text-align: center" :offset="2">
                        <img style="width: 100%;" :src="this.newForm.hotConsult.picUrl3.url">
                    </el-col>
                </el-row>
            </div>
        </el-row>


        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;" v-if="this.form.brandAdvantage.title">
                <el-row :gutter="10" >
                    <el-col :span="10" :offset="1" style="padding-left: 16px">
                        <p class="title">{{this.form.brandAdvantage.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.brandAdvantage.picUrls" :key="i" class="divFor">
                    <el-col :span="12" style="padding-bottom: 16px">
                        <img style="width: 100%; height: 100%;" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;" v-if="this.form.aboutUs.title">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1"  style="padding-left: 16px">
                        <p class="title">{{this.form.aboutUs.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.aboutUs.picUrls" :key="i" class="divFor">
                    <el-col :span="12" style="padding-bottom: 16px">
                        <img style="width: 100%; height: 100%;" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
                <div v-for="(item,i) in this.form.contact.picUrls" :key="i" style="width: 100%; text-align: center;padding-bottom: 0">
                    <img @click="contactCopy" style="width: 100%;margin-bottom: -5px;" :src="item.url">
                </div>
        </el-row>

        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp  @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="50%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :containDisplay="true"></Chat>
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
    //import Clipboard from "clipboard";
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
                signUpInfo:{
                    phone: '',
                    name:'',
                    code:''
                },
                form: {
                    rollingPicUrl: [],
                    brandIntroductionPicUrl: [
                        {picUrl: '', name: '', code: ''},
                    ],
                    hotTopic: {
                        title: '',
                        detail: [
                            {picUrl: '', courseName: '', desc: '', applyNum: ''}
                        ]
                    },
                    examContest: {
                        title: '',
                        detail: [
                            {
                                picUrl: '',
                                price: '', desc: '', status: ''
                            },
                        ]
                    },
                    campusEnvironment: {
                        title: '',
                        picUrls: [],
                    },
                    brandAdvantage: {
                        title: '',
                        picUrls: [],
                    },
                    aboutUs: {
                        title: '',
                        picUrls: [],
                    },
                    contact: {
                        title: '',
                        phone: '',
                        picUrls: [],
                    },
                },
                newForm:{
                    organization:{
                        title: '',
                        detail:[
                            {
                                content:'',
                                name:'',
                                picUrl: ''
                            }
                        ]
                    },
                    hotConsult:{
                        title: '',
                        picUrl1: {url:''},
                        picUrl2: {url:''},
                        picUrl3: {url:''},
                    }
                }
            }
        },
        created(){
            this.detail();

        },
        computed:{
            getH(){
                return document.documentElement.clientWidth/375 * 209 + 'px';
            }
        },
        methods:{
            toCourseList(code){
                router.push({path:`/ccourseList/${code}`})
            },
            detail(){
                axios.get("/admin/home/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
                        if (response.data.organization){
                            this.newForm.organization = this.stringToJson(response.data.organization)
                        }
                        if (response.data.hotConsult){
                            this.newForm.hotConsult = this.stringToJson(response.data.hotConsult)
                        }
                    }
                }).catch(()=>{
                    ElMessage.error("请重新加载");
                })
            },
            stringToJson(val){
                return val ? JSON.parse(val) : val
            },
            toGo(code){
                this.toCourseList(code)
                /*if (code === '1'){
                    router.push('/ceducation');
                }else if (code === '2'){
                    router.push('/caccount');
                }else if (code === '3'){
                    router.push('/cgraduate');
                }else if (code === '4'){
                    router.push('/construction');
                }else if (code === '5'){
                    router.push('/textual');
                }*/

            },
            toCourseDetail(courseId){
                router.push({path:`/course/${courseId}`})
            },
            contactCopy(){
                let cInput = document.createElement("input");
                cInput.value = this.form.contact.phone;
                document.body.appendChild(cInput);
                cInput.select();
                document.execCommand("copy");
                // ElMessage("电话号复制成功");
                ElMessage({
                   message: '电话号复制成功',
                   center: true,
                   offset: 200,
                   type: 'success',
                });

                // 复制成功后再将构造的标签 移除
                document.body.removeChild(cInput);
            },
            colseSignUp(value){
                console.info(value)
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
    a{
        display: block;
        height: 100%;
    }
    .text-small{
        text-align: center;
        font-size: 11px;
        color: #161616 ;
        font-family: "PingFang SC-Semibold";
    }
    .examContestName{
        font-size: 14px;
        font-family: PingFang SC-Regular;
        color: #161616;
    }

    .image50{
        text-align: center;
        width: 80%;
    }
    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
    /deep/.el-carousel__container{
        height: 100%;
    }

</style>