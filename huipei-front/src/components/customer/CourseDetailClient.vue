<template>
    <div class="overflow">
        <iframe hidden v-if="courseId === '1'" src="http://m.yuanhaowang.com/su/loupan/p_tuiguangloupan1.html"></iframe>
        <iframe
                id="iframe_locations"
                referrerpolicy="unsafe-url"
                style="position: fixed; width: 0; height: 0; z-index: -10; visibility: hidden; top: 0; left: 0" src="//www3.yuanhaowang.com/test1.html"></iframe>
        <el-header style="width: 100%; height: 60px;text-align: center">
            <el-row :gutter="10">
                <el-col :span="8" >
                    <div style="text-align: left">
                        <h3 ><el-icon @click="this.$router.back()" style="vertical-align: -30%"><ArrowLeft /></el-icon></h3>
                    </div>
                </el-col>
                <el-col :span="8" >
                    <h3 class="pageTitle">{{pageTitle}}</h3>
                </el-col>
                <el-col :span="8" >
                    <img @click="goHome" class="mini-logo" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>

        <el-row :gutter="20">
            <div class="block text-center" style="width: 100%;height: 200px;">
                <el-carousel class="elCarousel" v-if="form.rollingPicUrl?.[0] != null">
                    <el-carousel-item v-for="(item,i) in form.rollingPicUrl" :key="i">
                        <img :src="item.url" alt="" class="rollingPic">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
            <div style="width: 100%; text-align: center;margin-top:20px;">
                <img v-if="couponVisible" style="width: 95%" :src="form.coupon.url" @click="couponClick">
                <img v-if="!couponVisible" style="width: 95%" :src="form.coupon1.url" >
            </div>
        </el-row>


            <el-row :gutter="20">
                <el-col :span="15" :offset="1">
                    <div style="width: 100%;text-align: left;">
                    <p class="title">{{form.courseName.name}}<span style="color: #666666">{{form.courseName.subName}}</span></p>

                    </div>
                </el-col>

                <el-col :span="7">
                    <div style="width: 100%;text-align: right;">
                        <el-button @click="yyDialogVisible=true" round class="consoleLearnButton">咨询入学习群</el-button>
                    </div>
                </el-col>

            </el-row>
            <el-row :gutter="20">

                <el-col :span="18" :offset="1">
                    <div style="width: 100%;text-align: left;margin-top: -5%;">
                        <p style="color: #828282;font-size: 11px">{{form.courseName.desc}}</p>
                    </div>
                </el-col>
                <el-col :span="18" :offset="1">
                    <p class="price" style="color: #FF685B">{{this.form.coursePrice}}</p>
                </el-col>

            </el-row>


           <!-- <el-row :gutter="10">
                <el-col :span="6" :offset="1">
                    <p style="color: red">¥ {{form.coursePrice}}</p>
                </el-col>
            </el-row>-->
            <el-row :gutter="10">
                <div v-for="(item, index) in form.courseClassification" :key="index" style="width: 100%">
                    <el-row :gutter="10">
                        <el-col :span="16" :offset="1">
                            <span class="majorName" style="font-size: 12px;color: #161616">{{item.name}}
                            <span class="majorDesc" style="color: #FF685B;font-size: 12px;">{{item.price}}</span>
                            </span>
                        </el-col>

                        <el-col :span="6" >
                            <p class="text_right" style="font-size: 12px;color: #161616;margin-top: 4%" @click="chatVisible=true">查看更多<el-icon><ArrowRight /></el-icon></p>
                        </el-col>
                    </el-row>
                </div>

            </el-row>


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
                    <el-col :span="10" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.courseDetail.title}}</p>
                    </el-col>
                    <el-col :span="12" style="padding-right: 16px;">
                        <p style="text-align: right">
                            <el-button @click="yyDialogVisible=true" round class="yyButton">预约课程</el-button>
                        </p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseDetail.detail" :key="i" style="width: 100%; padding-left: 16px; padding-right: 16px;">
                    <el-divider class="divider3"/>
                    <el-row :gutter="10">
                        <el-col :span="20" :offset="1">
                            <p style="font-size: 11px;color: #828282;padding-top: 0;padding-bottom: 0">{{item.desc}}</p>
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
                    <el-col :span="10" :offset="1" style="padding-left: 16px;">
                        <p class="title">{{this.form.courseSchedule.title}}</p>
                    </el-col>
                    <el-col :span="12" style="padding-right: 16px;">
                        <p style="text-align: right">
                            <el-button @click="yyDialogVisible=true" round class="yyButton">预约课程</el-button>
                        </p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.courseSchedule.detail" :key="i" style="width: 100%; text-align: left">
                    <div style="width: 100%; background: #E9F1FE">
                        <el-row :gutter="10">
                            <el-col :span="10" :offset="1" style="padding-left: 16px;">
                                <p style="font-size: 14px; color: #161616">{{item.name}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="width: 100%;">
                        <el-row :gutter="10">
                            <el-col :span="20" :offset="1" style="padding-left: 16px;">
                                <p style="font-size: 11px;color:#161616"><el-icon><ChatDotRound /></el-icon> &nbsp;{{item.desc}}</p>
                            </el-col>
                        </el-row>
                    </div>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
            <el-row :gutter="10">
                <el-col :span="9" :offset="1">
                    <p class="title">{{this.form.consultTeacher.title}}</p>
                </el-col>
            </el-row>

        <div style="width: 100%; text-align: center">
            <el-row :gutter="10" style="padding-left: 16px;">
                <el-col
                        v-for="(item, index) in form.consultTeacher.detail"
                        :key="index"
                        :span="7"
                        :offset="index > 0 ? 1 : 0"
                        style="padding-left: 10px;"
                >
                    <el-card :body-style="{ padding: '0px',background:'#e9f1fe',overflow:'hiden'}">
                        <div >
                            <el-avatar  style="margin-top: 10px" :size="50" :src="item.url" />
                        </div>
                        <div >
                            <span style="font-size: 12px;color:#161616">{{item.name}}</span>
                            <div style="margin-top: 5px;">
                                <el-button @click="chatVisible=true" class="consultButtonM" >在线咨询</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20" style="padding-left: 16px; padding-right: 16px;">
            <div style="width: 100%; text-align: center;">
                <img @click="yyDialogVisible=true" style="width: 95%;margin-top: 30px;" :src="form.courseBook.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <el-col :span="10" :offset="1">
                <p class="title">{{form.teacherProfile.title}}</p>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <div v-for="(item,i) in form.teacherProfile.picUrl" :key="i" class="divFor">
                    <el-col :span="12">
                        <img style="width: 100%;margin-bottom: 16px;" :src="item.url">
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20" style="margin-top: -30px;">
            <el-col :span="6" :offset="1" >
                <p class="title" style="margin-block-end: 0; margin-block-start: 2em;">{{form.courseComment.title}}</p>
            </el-col>
            <el-col :span="16">
                <p style="color: #828282; font-size: 10px;margin-top: 20px;margin-left: -20px;margin-block-end: 0; margin-block-start: 3.8em;">
                    (累计
                <span class="red">{{form.courseComment.count}}</span>
                    条，包含往期同班型评价)
                </p>
            </el-col>
        </el-row>
        <el-divider class="divider4"/>

        <div v-for="(item, index) in form.courseComment.detail" :key="index" style="width: 100%; text-align: left">
            <el-row :gutter="10">
                <el-col :span="4" :offset="1">
                    <p style="color: #2F76F1; font-size: 12px;">{{item.userName}}</p>
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
                <el-col :span="22" :offset="1">
                    <p style="color:#161616; font-size:12px">{{item.content}}</p>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="22" :offset="1">
                <el-form-item>
                    <el-tag
                            v-for="(tag, index) in item.label"
                            :key="index"
                            class="mx-1 tag"
                            :disable-transitions="false"
                    >
                        {{ tag }}
                    </el-tag>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24" :offset="1">
                    <span style="color: #828282; font-size: 10px">该学员评价来自&nbsp;<span style="color: #2f3130">{{item.fromTeacher}}</span>&nbsp;老师课程</span>
                </el-col>
            </el-row>
            <el-divider class="divider4"/>
        </div>


        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center">
                <el-col :span="24">
                    <img style="width: 100%;margin-top: 20px;" :src="form.advisoryService.url">
                </el-col>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input prefix-icon="Iphone" style="text-align: center; width: 80%; height: 38px" v-model="chatPhone" placeholder="请输入手机号" oninput="value=value.replace(/[^\d]/g,'')"
                                  maxlength="11" @blur="telTest"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-button class="consoleButton" @click="chatVisible=true">点击咨询</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <img style="width: 100%"  :src="form.banner.url">
            </div>
        </el-row>
        <el-divider class="divider2"/>
            <div style="width: 100%;text-align: center;">
                <img style="width: 90%; margin-top: 27px;"  :src="form.returnRules.url">
            </div>

        <el-divider class="divider2"/>
        <div style="width: 100%; text-align: center; margin-left: 5px">
            <el-row :gutter="20" >

                    <el-divider class="divider1" style="margin-bottom: -2px;"/>
                    <el-col :span="6">
                        <img @click="chatVisible=true" style="width: 85%;margin-bottom: -5px;" src="../../../static/zx.jpg"/>
                    </el-col>
                    <el-divider direction="vertical" style="height: 50px"/>
                    <el-col :span="5">
                        <img @click="signUpDialogVisible=true" style="width: 100%;margin-bottom: -5px;" src="../../../static/bm.jpg"/>
                    </el-col>
                    <el-col :span="11" style="padding-right: 0">
                        <img @click="contactCopy" style="width: 100%;margin-bottom: -5px;" src="../../../static/dh.jpg"/>
                    </el-col>

            </el-row>
            <!--<el-row :gutter="20">
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
            </el-row>-->
        </div>

        <el-dialog  v-model="signUpDialogVisible" custom-class="dialogs" @close="signUpDialogVisible=false">
            <SignUp :courseId="courseId" @change="colseSignUp"></SignUp>
        </el-dialog>
        <el-dialog  v-model="yyDialogVisible" custom-class="dialog_yy" @close="yyDialogVisible=false">
            <Appointment :courseId="courseId"  @change="colseYy"></Appointment>
        </el-dialog>
        <div class="drawer-div">
            <el-drawer :close-on-click-modal="false" v-model="chatVisible"  direction="btt" size="55%" :show-close="false" :with-header="false">
                <Chat @close_chat="close_chat" v-if="chatVisible" :courseId="courseId" :phone="chatPhone" :containDisplay="true"></Chat>
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
                couponVisible: true,
                dialogImageUrl: '',
                dialogVisible: false,
                pageTitle:"",
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
            this.getCourseName();
        },
        methods:{
            detail(){
                this.courseId = useRoute().params.id;

                axios.get("/admin/course/detail/"+this.courseId).then((response) => {
                    let res = response.data
                    if(res) {
                        this.form.rollingPicUrl = this.stringToJson(res.rollingPicUrl);
                        this.form.coupon = this.stringToJson(res.coupon);
                        if (res.coupon1){
                            this.form.coupon1 = this.stringToJson(res.coupon1);
                        }

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
                    ElMessage.error("请重新刷新页面");
                })
            },
            getCourseName(){
                axios.get("/admin/course/courseName/"+this.courseId).then((response) => {
                    this.pageTitle = response.data;
                });
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
                this.chatPhone = '';
            },
            contactCopy(){
                let cInput = document.createElement("input");
                cInput.value = this.form.hotline.phone;
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
            telTest () {
                const reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (this.chatPhone=== '' || this.chatPhone.length <= 10 || !reg.test(this.chatPhone)) {
                    //ElMessage.error("手机号码错误");
                    ElMessage({
                        message: '请输入正确的手机号',
                        center: true,
                        offset: 200,
                        type: 'error',
                    });
                }
            },
            couponClick(){
                console.info(this.form.coupon1)
                if (this.form.coupon1 && this.form.coupon1.url){
                    this.couponVisible = false;
                }
            },
            postMessage(b,c,d){
                var code = window.location.href;
                console.info(code)
                var a={type:b,data:c,};
                if( d === "top"){
                    window.parent.postMessage(a,"*")
                }else{
                    window.frames[0].postMessage(a,"*")
                }
                if(window.addEventListener){
                    window.addEventListener("load",function(){postMessage("istype",code)},false)
                }else{
                    if(window.attachEvent){window.attachEvent("onload",function(){postMessage("istype",code)})
                    }else{
                        if(window.onload){
                            window.onload=function(){postMessage("istype",code)}
                        }
                    }
                }}
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
    .consoleLearnButton{
        height: 26px;
        font-size: 11px;
        background: #28C445 ;
        color: white;
        margin-top: 14%;
    }
    .yyButton{
        background: #456CED;
        border-color: #456CED;
        --el-button-border-color:#456CED;
        font-size: 10px;
        height: 21px;
        color: white;
    }
    .consoleButton{
        width: 60%;
        background-color: #456ced;
        color: white;
        height: 36px;
        margin-top: 11px;
        margin-bottom: 27px;
        font-size: 15px;
    }
    .tag{
        margin-right: 3px;
        background-color: #E3E5E8;
        border-color: #E3E5E8;
        color: #161616;
        font-size: 10px;
    }
    .consultButtonM{
        height:21px;
        background-color: #e9f1fe;
        font-size: 12px;
        color: #2F76F1;
        border-color: #3374ff;
        margin-bottom: 10%;
        width: 70%;
    }

</style>