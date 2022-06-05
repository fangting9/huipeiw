<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="9" :offset="8">
                    <h3 style="text-align: center"> <p>{{this.form.courseName.name}}</p></h3>
                </el-col>
                <el-col :span="7" >
                    <img @click="goHome" style="width: 100%;margin-top: 10%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 180px;">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img class="imgPhone" :src="form.coupon.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        //课程名称, 课程介绍, 课程价格, 课程分类  ----找不到类似样式
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img class="imgPhone" :src="form.hotline.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="9">
                        <p>{{this.form.courseDetail.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseDetail.detail" :key="i" style="width: 100%">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="14">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.desc}}</span>
                            </el-row>
                        </el-col>
                    </el-row>
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
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="9">
                        <p>{{this.form.courseSchedule.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseSchedule.detail" :key="i" style="width: 100%">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-divider class="divider"/>
                        <el-col :span="14">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.name}}</span>
                            </el-row>
                            <el-divider class="divider"/>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.desc}}</span>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <el-row :gutter="10">
                <el-col :span="9">
                    <p>{{this.form.consultTeacher.title}}</p>
                </el-col>
            </el-row>
            <el-divider class="divider2"/>
            <div style="width: 100%;text-align: center;">
                <img class="imgPhone" :src="form.consultTeacher.detail.url">
            </div>
            <el-divider class="divider2"/>
            <el-row :gutter="10">
                <el-col :span="9">
                    <p>{{this.form.consultTeacher.detail.name}}</p>
                </el-col>
            </el-row>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 99%" :src="form.courseBook.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <div v-for="(item,i) in form.teacherProfile" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        //课程评价实在找不到类似样式, 里面有标签这些也不会弄.
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <div style="width: 100%;text-align: center;">
                    <img class="imgPhone" :src="form.advisoryService.url">
                </div>
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
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%"  :src="form.banner.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
            <div style="width: 100%">
                <el-row :gutter="10">
                    <el-col :span="9">
                        <p>退换课程规则</p>
                    </el-col>
                </el-row>
                <el-divider class="divider"/>
                <div style="width: 100%;text-align: center;">
                    <img style="width: 100%"  :src="form.returnRules.url">
                </div>
            </div>
        <el-divider class="divider2"/>


        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" :subjectCode="'4'" :phone="chatPhone" :containDisplay="true"></Chat>
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

    export default {
        name: "HomeClient",
        components:{
            Chat
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                uploadUrl: "/api/admin/course/detail/",
                pageTitle:"成人高考",
                courseDesc:["请输入课程起止日期","请输入课时总数","请输入课程形式","请输入配套资料","请输入团队老师姓名"],
                inputVisible:false,
                inputValue:'',
                courseId:'',
                yyDialogVisible:false,
                form: {
                    rollingPicUrl: [],
                    coupon:{url:''},
                    courseName:{
                        name:'',
                        desc:'',
                    },
                    coursePrice:'',
                    courseClassification:[{name:'', price:''}],
                    hotline: {url:'', phone:''},
                    courseDetail:{
                        title:'',
                        detail:[{desc:''},{desc:''},{desc:''},{desc:''},{desc:''}],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    courseSchedule:{
                        title:'',
                        detail:[{name:'', desc:''}],
                    },
                    consultTeacher:{
                        title:'',
                        detail:[{
                            url:'',
                            name:''}]

                    },
                    courseBook:{url:''},
                    teacherProfile:[],
                    courseComment:{
                        title:'',
                        count:'',
                        detail:[{userName:'', time:'', content:'',label:[],fromTeacher:''}]
                    },
                    advisoryService:{url:''},
                    banner:{url:''},
                    returnRules:{url:''},

                }
            }
        },
        created(){
            this.detail();
        },
        methods:{
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