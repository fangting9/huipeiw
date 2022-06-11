<template>
    <div>
        <el-header style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="9" :offset="8">
                    <h3 style="text-align: center">汇培网</h3>
                </el-col>
                <el-col :span="7" >
                    <img style="width: 100%;margin-top: 17%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 180px">
                <el-carousel style="height:100%">
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                            <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-row :gutter="10">
            <div style="width: 100%; margin-inline-start: 15px;margin-top:10px;text-align: center;">
                <div v-for="(item,i) in this.form.brandIntroductionPicUrl" :key="i">
                    <el-col :span="14" style="margin-left: 10px">
                        <img class="image50" :src="item.picUrl" alt="" @click="toGo(item.code)">
                        <p class="text-small" @click="toGo(item.code)">{{item.name}}</p>
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.hotTopic.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more" @click="toCourseList">了解更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotTopic.detail" :key="i">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1">
                            <img class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="10">
                                <span class="courseName">{{item.courseName}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span class="courseDesc">{{item.desc}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span class="courseNum">{{item.applyNum}}人报名</span>
                                <el-button @click="signUpDialogVisible=true" class="signUpButton" round>报名</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.examContest.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more" @click="chatVisible=true">查看详情<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.examContest.detail" :key="i">
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1">
                            <img class="courseImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="10">
                                <span class="courseName">{{item.desc}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span class="courseDesc red">¥{{item.price}}</span>
                            </el-row>
                            <el-row :gutter="10">
                                <span class="courseNum">{{item.status}}</span>
                                <el-button @click="yyDialogVisible=true" class="signUpButton" round>预约</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.campusEnvironment.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p @click="yyDialogVisible=true" class="text_right more">立即预约<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.campusEnvironment.picUrls" :key="i">
                        <el-col :span="12">
                            <img :src="item.url">
                        </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.brandAdvantage.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.brandAdvantage.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.aboutUs.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.aboutUs.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <div v-for="(item,i) in this.form.contact.picUrls" :key="i">
                    <img @click="contactCopy" class="imgPhone" :src="item.url">
                </div>
            </div>
        </el-row>

        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp  @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <div class="drawer-div">
                <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                    <Chat @close_chat="close_chat" v-if="chatVisible" :containDisplay="true"></Chat>
                </el-drawer>
            </div>
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
                ElMessage("电话号复制成功");
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
        font-size: xx-small;
    }

    .image50{
        text-align: center;
        width: 45px;
        height: 45px;
    }
    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
    /deep/.el-carousel__container{
        height: 100%;
    }

</style>