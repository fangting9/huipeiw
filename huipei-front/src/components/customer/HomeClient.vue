<template>
    <div>
        <el-header style="width: 100%">
            <h3 style="text-align: center">首页</h3>
        </el-header>
        <el-row :gutter="20">
            <swiper style="width: 100%;">
                <swiper-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                    <a :href="item.url">
                   <img :src="item.url" alt="" class="rollingPic">
                    </a>
                </swiper-item>
            </swiper>
        </el-row>
        <el-row :gutter="10">
            <div style="width: 100%; margin-inline-start: 15px;text-align: center;">
                <div v-for="(item,i) in this.form.brandIntroductionPicUrl" :key="i">
                    <el-col :span="14" style="margin-left: 10px">
                        <img class="image50" :src="item.picUrl" alt="" @click="toGo(item.code)">
                        <p class="text-small">{{item.name}}</p>
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
                        <p class="text_right more" @click="toEducationImprove">了解更多<el-icon><ArrowRight /></el-icon></p>
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
                                <el-button @click="signUp" class="signUpButton" round>报名</el-button>
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
                        <p class="text_right more">查看详情<el-icon><ArrowRight /></el-icon></p>
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
                                <el-button @click="yySignUp" class="signUpButton" round>预约</el-button>
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
                        <p @click="yySignUp" class="text_right more">立即预约<el-icon><ArrowRight /></el-icon></p>
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
            <el-form class="dialog-form">
                <el-form-item label="姓名">
                    <el-input v-model="signUpInfo.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="signUpInfo.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="signUpSave('报名成功')" style="width: 100%;height:40px;color: white" round>立即报名</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <el-form class="dialog-form">
                <el-form-item label="姓名">
                    <el-input v-model="signUpInfo.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="signUpInfo.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="signUpSave('预约成功')" style="width: 100%;height:40px;color: white" round>立即预约</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios"
    import { ElMessage, } from 'element-plus'
    import Swiper from "../../components/util/Swiper"
    import SwiperItem from "../../components/util/SwiperItem"
    import router from "@/router";
    //import Clipboard from "clipboard";
        export default {
        name: "HomeClient",
        components:{
            Swiper,
            SwiperItem,
        },
        data() {
            return {
                signUpDialogVisible:false,
                yyDialogVisible:false,
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
            detail(){
                axios.get("/admin/home/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
                    }
                }).catch(()=>{
                    ElMessage.error("请重新加载");
                })
            },
            signUp(){
                this.signUpDialogVisible = true;
                this.signUpInfo.name='';
                this.signUpInfo.phone='';
            },
            yySignUp(){
                this.yyDialogVisible = true;
                this.signUpInfo.name='';
                this.signUpInfo.phone='';
            },
            signUpSave(str){
                this.signUpDialogVisible = false;
                this.yyDialogVisible = false;
                ElMessage(str)
            },
            toGo(code){
                if (code === '1'){
                    router.push('/ceducation');
                }else if (code === '2'){
                    router.push('/caccount');
                }else if (code === '3'){
                    router.push('/ceducation');
                }else if (code === '4'){
                    router.push('/ceducation');
                }else if (code === '5'){
                    router.push('/ceducation');
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

</style>