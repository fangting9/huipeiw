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
            <swiper style="width: 100%; text-align: center">
                <swiper-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                    <a :href="item.url">
                        <img :src="item.url" alt="" class="rollingPic">
                    </a>
                </swiper-item>
            </swiper>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.tutorial.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.tutorial.picUrls" :key="i">
                    <img style="width: 90%" :src="item.url">
                </div>
                <div style="width: 100%; text-align: center">
                    <el-button round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;">科学诊断测试</el-button>
                    <el-button round style="width: 35%;border-color: #ffa900;background-color: #ffa900;color: white;">1对1课程详情</el-button>
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
        <div style="width: 100%;text-align: center">
            <img style="width: 100%"  :src="form.bannerFirst.url">
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.coursePlan.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.coursePlan.picUrls" :key="i">
                    <el-col :span="12">
                    <img style="width: 100%" :src="item.url">
                    </el-col>
                </div>
                <div style="width: 100%; text-align: center">
                    <el-button style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;">定制我的复习方案</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.courseConsult.title}}</p>
                    </el-col>
                </el-row>
                <img style="width: 100%" :src="form.courseConsult.banner.url">
                <div style="width: 90%; margin-left: 5%">
                    <el-input placeholder="请输入手机号我们将严格保障您的信息安全"></el-input>
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;background-color: #456ced;color: white;">立即获取</el-button>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <div style="width: 100%;text-align: center">
            <img style="width: 95%"  :src="form.bannerSecond.url">
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.coursePurchase.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 95%" :src="form.coursePurchase.banner.url">
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <div style="width: 100%;text-align: center">
            <img style="width: 95%"  :src="form.courseBook.url">
        </div>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.signUp.title}}</p>
                    </el-col>
                </el-row>
                <div style="width: 100%">
                    <img style="width: 90%" :src="form.signUp.banner.url">
                </div>
                <div style="width: 100%; text-align: center;margin-top: 10px;">
                    <el-button style="width: 60%;border-color: #ffa900;background-color: #ffa900;color: white;">马上报名学习</el-button>
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
                    <el-button style="width: 60%;background-color: #456ced;color: white;">点击咨询</el-button>
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
    </div>
</template>

<script>
    import axios from "axios"
    import { ElMessage, } from 'element-plus'
    import router from "@/router";
    export default {
        name: "PostGraduateClient.vue",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                form: {
                    rollingPicUrl: [],
                    tutorial:{
                        title: '',
                        picUrls: [],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    bannerFirst:{url:''},
                    coursePlan: {
                        title: '',
                        picUrls: [],
                    },
                    courseConsult:{
                        title: '',
                        banner:{url:''}
                    },
                    bannerSecond:{url:''},
                    coursePurchase:{
                        title: '',
                        banner:{url:''}
                    },
                    courseBook:{url:''},
                    signUp:{
                        title: '',
                        banner:{url:''}
                    },
                    advisoryService:{url:''},
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
                axios.get("/admin/graduate/detail").then((response) => {
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
        }
    }
</script>

<style scoped>

</style>