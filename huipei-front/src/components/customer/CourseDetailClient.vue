<template>
    <div>
        <div style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="9" :offset="8">
                    <h3 style="text-align: center"> <p>{{pageTitle}}</p></h3>
                </el-col>
                <el-col :span="7" >
                    <img @click="goHome" style="width: 100%;margin-top: 10%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </div>

        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 180px;">
                <el-carousel>
                    <el-carousel-item v-for="(item,i) in form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <div style="width: 100%;">
            <el-row :gutter="20">
                <div style="width: 100%;text-align: center;">
                    <img style="width: 90%" :src="form.coupon.url">
                </div>
            </el-row>
            <el-row :gutter="20">
                <div style="width: 100%;text-align: left;">
                    <el-row :gutter="10">
                    <el-col :span="5" :offset="1">
                        <p >{{form.courseName.name}}</p>
                    </el-col>
                    <el-col :span="9">
                        <p style="color: #8c939d">{{form.courseName.subName}}</p>
                    </el-col>
                    <el-col :span="8">
                        <el-button @click="yyDialogVisible=true" round style="background-color: #28c444;color: white;margin-top: 11%; ">咨询入学习群</el-button>
                    </el-col>
                        <span style="font-size: x-small; color: #8c939d;margin-left: 6%; margin-top: -10px; ">{{this.form.courseName.desc}}</span>
                    </el-row>
                </div>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="6" :offset="1">
                    <p style="color: red">¥ {{form.coursePrice}}</p>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <div v-for="(item, index) in form.courseClassification" :key="index" style="width: 100%">
                    <el-row :gutter="10">
                        <el-col :span="10" :offset="1">
                            <span class="majorName" style="font-size: smaller">{{item.name}}</span>
                        </el-col>
                        <el-col :span="6">
                            <span class="majorDesc" style="color: red">¥ {{item.price}}</span>
                        </el-col>

                        <el-col :span="6" >
                            <p class="text_right more">查看更多<el-icon><ArrowRight /></el-icon></p>
                        </el-col>
                    </el-row>
                </div>

            </el-row>

        </div>

        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img @click="contactCopy" class="imgPhone" :src="form.hotline.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: left">
                <el-row :gutter="10">
                    <el-col :span="9" :offset="1">
                        <p>{{this.form.courseDetail.title}}</p>
                    </el-col>
                    <el-col :span="12" :offset="1">
                        <p style="text-align: right">
                            <el-button @click="yyDialogVisible=true" round style="background-color: #456ced;color: white;">预约课程</el-button>
                        </p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseDetail.detail" :key="i" style="width: 100%; ">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="20" :offset="1">
                            <p class="majorName" style="font-size: xx-small;color: #8c939d">{{item.desc}}</p>
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
            <div style="width: 100%;">
                <el-row :gutter="10">
                    <el-col :span="9" :offset="1">
                        <p>{{this.form.courseSchedule.title}}</p>
                    </el-col>
                    <el-col :span="12" :offset="1">
                        <p style="text-align: right">
                            <el-button @click="yyDialogVisible=true" round style="background-color: #456ced;color: white;">预约课程</el-button>
                        </p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseSchedule.detail" :key="i" style="width: 100%; text-align: left">
                    <div style="width: 100%; background: #e9f1fe; ">
                        <el-row :gutter="10">
                            <el-col :span="20" :offset="1">
                                <p style="font-size: smaller">{{item.name}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="width: 100%;">
                        <el-row :gutter="10">
                            <el-col :span="20" :offset="2">
                                <p style="font-size: small"><el-icon><Star /></el-icon> {{item.desc}}</p>
                            </el-col>
                        </el-row>
                    </div>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
            <el-row :gutter="10">
                <el-col :span="9">
                    <p>{{this.form.consultTeacher.title}}</p>
                </el-col>
            </el-row>

        <div style="width: 100%; text-align: center">
            <el-row :gutter="10">
                <el-col
                        v-for="(item, index) in form.consultTeacher.detail"
                        :key="index"
                        :span="8"
                        :offset="index > 0 ? 1 : 0"
                >
                    <el-card :body-style="{ padding: '0px',background:'#e9f1fe',overflow:'hiden'}">
                        <div >
                            <el-avatar  style="margin-top: 10px" :size="50" :src="item.url" />
                        </div>
                        <div style="padding: 14px">
                            <span>{{item.name}}</span>
                            <div style="margin-top: 5px;">
                                <el-button @click="chatVisible=true" style="background-color: #e9f1fe;color: #3374ff;border-color: #3374ff;" >在线咨询</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 99%" :src="form.courseBook.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="10">
            <el-col :span="9">
                <p>{{form.teacherProfile.title}}</p>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <div v-for="(item,i) in form.teacherProfile.picUrl" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <el-col :span="6" :offset="1">
                <p >{{form.courseComment.title}}</p>
            </el-col>
            <el-col :span="16">
                <p style="color: #8c939d; font-size: xx-small;margin-top: 20px;margin-left: -20px;">
                    (累计
                <span class="red">{{form.courseComment.count}}</span>
                    条，包含往期同班型评价)
                </p>
            </el-col>
        </el-row>
        <el-divider class="divider1"/>

        <div v-for="(item, index) in form.courseComment.detail" :key="index" style="width: 100%; text-align: left">
            <el-row :gutter="10">
                <el-col :span="4" :offset="1">
                    <p style="color: #4484f2; font-size: small;">{{item.userName}}</p>
                </el-col>
                <el-col :span="10">
                    <p style="color: #8c939d; font-size: x-small;margin-top: 15px;margin-left: -10px;">{{item.time}}</p>
                </el-col>
                <el-col :span="8">
                    <div style="width: 100%; text-align: right">
                        <img v-if="item.visble" @click="item.visble = false" style="width: 30px; height: 30px;margin-top: 6px;" src="../../../static/blue-like.jpg">
                        <img @click="item.visble = true" v-else style="width: 30px; height: 30px;margin-top: 6px;" src="../../../static/white-like.jpg">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24" :offset="1">
                    <p>{{item.content}}</p>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24" :offset="1">
                <el-form-item>
                    <el-tag
                            v-for="(tag, index) in item.label"
                            :key="index"
                            class="mx-1"
                            :disable-transitions="false"
                    >
                        {{ tag }}
                    </el-tag>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24" :offset="1">
                    <span style="color: #8c939d">该学员评价来自&nbsp;<span style="color: #2f3130">{{item.fromTeacher}}</span>&nbsp;老师课程</span>
                </el-col>
            </el-row>
            <el-divider class="divider1"/>
        </div>


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
        <div style="width: 100%; text-align: center">
            <el-row :gutter="20">
                <el-divider class="divider1" style="margin-bottom: -2px;"/>
                <div style="width: 30%" @click="chatVisible=true">
                    <el-icon size="large" style="margin-top: 6px;" ><ChatDotRound /></el-icon>
                    <p>在线咨询</p>
                </div>
                <el-divider direction="vertical" style="height: 70px"/>
                <div style="width: 25%" @click="signUpDialogVisible=true">
                    <el-icon size="large" style="margin-top: 6px;" ><EditPen /></el-icon>
                    <p>点击报名</p>
                </div>
                <div style="width: 40%; background: #608cff" @click="contactCopy">
                    <el-icon size="large" style="margin-top: 25px;"><PhoneFilled /></el-icon>
                    电话咨询
                </div>
            </el-row>
        </div>

        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp :courseId="courseId" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :courseId="courseId"  @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" :courseId="courseId" :phone="chatPhone" :containDisplay="true"></Chat>
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
    import SignUp from './SignUp'
    import Appointment from './Appointment'
    import { useRoute } from "vue-router"

    export default {
        name: "HomeClient",
        components:{
            Chat,
            SignUp,
            Appointment
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                pageTitle:"成人高考",
                courseId:1,
                signUpDialogVisible:false,
                yyDialogVisible:false,
                chatVisible:false,
                chatPhone:'',
                form: {
                    rollingPicUrl: [],
                    coupon:{url:''},
                    courseName:{
                        name:'',
                        subName:'',
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
                    teacherProfile:{
                        title:'',
                        picUrl:[]
                    },
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
                this.courseId = useRoute().query.id;
                this.pageTitle = useRoute().query.name;
                axios.get("/admin/course/detail/"+this.courseId).then((response) => {
                    let res = response.data
                    if(res) {
                        this.form.rollingPicUrl = this.stringToJson(res.rollingPicUrl);
                        this.form.coupon = this.stringToJson(res.coupon);
                        this.form.courseName = this.stringToJson(res.courseName);
                        this.form.coursePrice = this.stringToJson(res.coursePrice);
                        this.form.courseClassification = this.stringToJson(res.courseClassification);
                        this.form.hotline = this.stringToJson(res.hotline);
                        this.form.courseDetail = this.stringToJson(res.courseDetail);
                        this.form.learningGroup = this.stringToJson(res.learningGroup);
                        this.form.courseSchedule = this.stringToJson(res.courseSchedule);
                        this.form.consultTeacher = this.stringToJson(res.consultTeacher);
                        this.form.courseBook = this.stringToJson(res.courseBook);
                        this.form.teacherProfile = this.stringToJson(res.teacherProfile);
                        this.form.courseComment = this.stringToJson(res.courseComment);
                        this.form.advisoryService = this.stringToJson(res.advisoryService);
                        this.form.banner = this.stringToJson(res.banner);
                        this.form.returnRules = this.stringToJson(res.returnRules);
                    }
                }).catch(()=>{
                    ElMessage.error("返回重新查询");
                })
            },
            stringToJson(val){
                return val ? JSON.parse(val) : val
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
            },
            contactCopy(){
                let cInput = document.createElement("input");
                cInput.value = this.form.hotline.phone;
                document.body.appendChild(cInput);
                cInput.select();
                document.execCommand("copy");
                ElMessage("电话号复制成功");
                // 复制成功后再将构造的标签 移除
                document.body.removeChild(cInput);
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
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

</style>