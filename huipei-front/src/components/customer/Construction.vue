<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="4"><p @click="this.$router.back()"><el-icon><ArrowLeft /></el-icon>返回</p></el-col>
                <el-col :span="9" :offset="4">
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
            <div style="width: 100%; text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.constructionEngineerTraining.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.constructionEngineerTraining.picUrls" :key="i">
                    <el-col :span="12">
                        <img @click="chatVisible=true" style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
            <el-divider class="divider1" border-style="dashed" />
            <div style="width: 100%;text-align: center;">
                <el-col :span="10">
                    <img @click="chatVisible=true" style="width: 60px;height: 60px" :src="form.constructionEngineerTraining.banner.url"/>
                </el-col>
                <el-col :span="10">
                    <div style="text-align: center">
                        <span style="color: dodgerblue; font-size: small">工作年限不够，专业不符能否报考二建</span>
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
                    <el-col :span="6">
                        <p>{{this.form.titleAppraisal.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p @click="toCourseList" class="text_right more">查看更多<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.titleAppraisal.detail" :key="i">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="8" :offset="1">
                            <img class="hotImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.titleName}}</span>
                            </el-row>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.titleDesc}}</span>
                            </el-row>
                            <el-row :gutter="20" >
                                <span style="width: 90px" class="majorType"></span>
                                <el-button @click="chatVisible=true" class="consultButton marginTop30" type="primary" round>查看详情</el-button>
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
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="9">
                        <p>{{this.form.operator.title}}</p>
                    </el-col>
                </el-row>

                <div v-for="(item,i) in form.operator.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="20">
                <p style="color: red; font-size: x-small">考试提醒: 错过本次报考, 将延误一年考证</p>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 99%" :src="form.appointmentCourse.url">
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="9">
                        <p>{{this.form.examinationConditions.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.examinationConditions.banner.url">
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="7">
                        <p>{{this.form.fireEngineer.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 100%" :src="form.fireEngineer.banner.url">
                </div>
            </div>
        </el-row>
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
                router.push({path:"/ccourseList", query:{activeIndex:'4'}})
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