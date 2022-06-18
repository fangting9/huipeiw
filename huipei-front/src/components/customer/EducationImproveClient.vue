<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="4"><p @click="this.$router.back()"><el-icon><ArrowLeft /></el-icon>返回</p></el-col>
                <el-col :span="9" :offset="4">
                    <h3 class="pageTitle">汇培网</h3>
                </el-col>
                <el-col :span="6" >
                    <img @click="goHome" class="mini-logo" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </div>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 200px">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <div v-for="(item,i) in this.form.introductionPicUrl" :key="i">
                    <img class="imgPhone" :src="item.url">
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1">
                        <p class="title">{{this.form.degreeProgram.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.degreeProgram.picUrls" :key="i" class="center">
                    <el-col :span="12">
                        <img style="width: 100%" :src="item.url">
                    </el-col>
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
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1">
                        <p class="title">{{this.form.hotMajor.title}}</p>
                    </el-col>
                    <el-col :span="12">
                        <p class="text_right more" @click="toCourseList">易考科目<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotMajor.detail" :key="i" style="width: 100%;text-align: center">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <img class="hotImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <div style="width: 100%;text-align: left">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.majorName}}</span>
                            </el-row>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.majorDesc}}</span>
                            </el-row>
                            <el-row :gutter="20" >
                                    <el-col :span="16">
                                        <span class="majorType">{{item.majorType}}</span>
                                    </el-col>
                                    <el-col :span="7">
                                            <el-button @click="chatVisible=true" class="consultButton" type="primary" round>考试科目咨询</el-button>
                                    </el-col>
                                <!--//<el-button class="consultButton marginTop30" @click="chatVisible=true" type="primary" round>考试科目咨询</el-button>-->
                            </el-row>
                            </div>
                        </el-col>
                    </el-row>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
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
                        <el-button style="width: 60%;background-color: #456ced;color: white; height: 36px;margin-top: 10px" @click="chatVisible=true">点击咨询</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-row :gutter="20">

        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align:left;">
                <el-row :gutter="10">
                    <el-col :span="10" :offset="1">
                        <p class="title"> {{this.form.formalService.title}}</p>
                    </el-col>

                    <el-col :span="12">
                        <p class="text_right more">服务详情<el-icon><ArrowRight /></el-icon></p>
                    </el-col>

                </el-row>
            </div>
            <div style="width: 100%;text-align:center;">
                <div v-for="(item,i) in this.form.formalService.images" :key="i">
                    <img style="width: 90%" class="imgPhone" :src="item.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;background: #2f3130; color: white; text-align:center;height:80%">
                <div v-for="(item, i) in form.bottom.columnList" :key="i" >
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

        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :subjectCode="'1'" :phone="chatPhone" :containDisplay="true"></Chat>
            </el-drawer>
        </div>

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

    export default {
        name: "HomeClient",
        components:{
            Chat
        },
        data() {
            return {
                chatVisible: false,
                dialogImageUrl: '',
                dialogVisible: false,
                chatPhone:'',
                form: {
                    rollingPicUrl: [],
                    introductionPicUrl: [],
                    degreeProgram: {
                        title: '',
                        picUrls: [],
                    },
                    learningGroup: {
                        displayImage: {url: ''},
                        groupQR: {url: ''}
                    },
                    banner: {url: ''},
                    hotMajor: {
                        title: '',
                        detail: [
                            {picUrl: '', majorName: '', majorDesc: '', majorType: ''},
                        ]
                    },
                    advisoryService: {url: ''},
                    formalService: {
                        title: '',
                        images: []
                    },
                    bottom: {
                        columnList: [{title: ''},],
                        image: {url: ''},
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
                axios.get("/admin/edu/detail").then((response) => {
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
            close_chat(value){
                this.chatPhone= '';
                this.chatVisible = value;
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