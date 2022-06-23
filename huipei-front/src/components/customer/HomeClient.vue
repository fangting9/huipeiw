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
            <div class="block text-center" style="width: 100%;height: 180px">
                <el-carousel class="elCarousel">
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
                        <p class="text_right more" @click="toCourseList">了解更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotTopic.detail" :key="i" style="text-align: left;">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1" style="padding-left: 16px">
                            <img class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                                <el-row :gutter="10" >
                                    <span class="courseName">{{item.courseName}}</span>
                                </el-row>
                                <el-row :gutter="10">
                                    <span class="courseDesc" style="margin-top: 1%; margin-bottom: 2%">{{item.desc}}</span>
                                </el-row>
                                <el-row :gutter="10" >
                                    <el-col :span="12">
                                        <span style="margin-left: -5px;" class="courseNum">{{item.applyNum}}人报名</span>
                                    </el-col>
                                    <el-col :span="12" style="padding-right: 16px">
                                        <el-button @click="signUpDialogVisible=true" class="signUpButton" round>报名</el-button>
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
            <div class="center Top30">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1" style="padding-left: 16px">
                        <p class="title">{{this.form.examContest.title}}</p>
                    </el-col>
                    <el-col :span="13" style="padding-right: 16px">
                        <p class="text_right more" @click="chatVisible=true" style="padding-right: 16px">查看详情<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.examContest.detail" :key="i">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1" style="padding-left: 16px">
                            <img class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="10">
                                <span class="examContestName" style="margin-top: 1%">{{item.desc}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span class="price" style="margin-top: 6%; margin-bottom: 3%" >¥{{item.price}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <span class="courseNum">{{item.status}}</span>
                                </el-col>
                                <el-col :span="12" style="padding-right: 16px">
                                    <el-button @click="yyDialogVisible=true" class="signUpButton" style="padding-right: 16px" round>预约</el-button>
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
            <div style="width: 100%; text-align: left;">
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
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: left;">
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
            <div style="width: 100%;text-align: left;">
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
                    }
                }
            }
        },
        created(){
            this.detail();

        },
        methods:{
            toCourseList(){
                router.push({path:"/ccourseList", query:{activeIndex:'1'}})
            },
            detail(){
                axios.get("/admin/home/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
                    }
                }).catch(()=>{
                    ElMessage.error("请重新加载");
                })
            },
            toGo(code){
                if (code === '1'){
                    router.push('/ceducation');
                }else if (code === '2'){
                    router.push('/caccount');
                }else if (code === '3'){
                    router.push('/cgraduate');
                }else if (code === '4'){
                    router.push('/construction');
                }else if (code === '5'){
                    router.push('/textual');
                }

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