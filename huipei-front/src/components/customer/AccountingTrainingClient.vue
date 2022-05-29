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
            <div class="block text-center" style="width: 100%;height: 180px">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div style="width: 100%;text-align: center">
                <div style="width: 100%;text-align: center" v-for="(item,i) in this.form.introductionPicUrl" :key="i">
                    <img class="imgPhone" :src="item.url">
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <el-row :gutter="10">
                    <el-col :span="6" :offset="1">
                        <p>{{this.form.hotCourse.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more">查看更多<el-icon><ArrowRight /></el-icon></p>
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
                                <span style="width: 80px" class="majorType"></span>
                                <el-button class="consultButton marginTop30" type="primary" round>查看详情</el-button>
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
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6" :offset="1">
                        <p>{{this.form.financeLaboratory.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.financeLaboratory.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <div style="width: 100%;text-align: center">
            <img style="width: 100%"  :src="form.banner1.url">
        </div>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.professionalTeacher.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.professionalTeacher.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
                <div style="width: 100%;text-align: center">
                    <el-col :span="10">
                        <img style="width: 60px;height: 60px" :src="form.professionalTeacher.banner.url"/>
                    </el-col>
                    <el-col :span="14">
                        <div style="text-align: center">
                            <span style="color: dodgerblue; font-size: small">阅读更多培训课程</span><br>
                            <span style="color: darkgrey;font-size: xx-small">随时掌握更多课程</span>
                        </div>

                    </el-col>
                    <el-col :span="8" :offset="1">
                        <el-button @click="yyDialogVisible=true" class="consultButton" style="color: white;margin-top: 15px;" round>立即订阅</el-button>
                    </el-col>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.specialTeaching.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.specialTeaching.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
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
                        <p>{{this.form.careerProgression.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img  style="width: 100%" :src="form.careerProgression.banner.url">
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;">立即规划</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.employmentServices.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.employmentServices.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>

        <el-row :gutter="20">
            <div style="width: 100%;">
                <img style="width: 100%" :src="form.advisoryService.url">
                <div style="width: 90%; margin-left: 5%">
                    <el-input :suffix-icon="Iphone" placeholder="请输入手机号"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;">点击咨询</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.hotActivity.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.hotActivity.picUrls" :key="i">
                    <el-row :gutter="10">
                        <img @click="signUpDialogVisible=true" style="width: 90%; margin-left: 6%;" :src="item.url">
                    </el-row>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button @click="chatVisible=true" style="width: 60%;background-color: #456ced;color: white;">咨询更多优惠</el-button>
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
        <el-dialog v-model="dialogVisible" >
            <img  :src="dialogImageUrl" class="dialog-img"/>
        </el-dialog>
        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp :origin="'1'" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :origin="'1'" @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer v-model="chatVisible" direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat></Chat>
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
            }
        }
    }
</script>

<style scoped>
    /deep/.el-drawer{
        --el-drawer-bg-color: white;
        --el-drawer-padding-primary:white;
    }
</style>