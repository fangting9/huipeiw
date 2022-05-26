<template>
    <div>
        <h3 style="text-align: center">汇培网</h3>
        <el-row :gutter="20">
            <swiper style="width: 100%;text-align: center;">
                <swiper-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                    <a :href="item.url">
                        <img :src="item.url" alt="" class="rollingPic">
                    </a>
                </swiper-item>
            </swiper>
            <div style="width: 100%;text-align: center;">
                <div v-for="(item,i) in this.form.introductionPicUrl" :key="i">
                    <img class="imgPhone" :src="item.url">
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;text-align: center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.degreeProgram.title}}</p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in form.degreeProgram.picUrls" :key="i">
                    <el-col :span="12">
                        <img style="width: 90%" :src="item.url">
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
            <div style="width: 100%;text-align: center">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.hotMajor.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more">易考科目<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
                <div v-for="(item,i) in this.form.hotMajor.detail" :key="i">
                    <el-divider class="divider"/>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <img class="hotImage" :src="item.picUrl">
                        </el-col>
                        <el-col :span="14">
                            <el-row :gutter="20">
                                <span class="majorName">{{item.majorName}}</span>
                            </el-row>
                            <el-row :gutter="20">
                                <span class="majorDesc">{{item.majorDesc}}</span>
                            </el-row>
                            <el-row :gutter="20" >
                                <span style="width: 80px" class="majorType">{{item.majorType}}</span>
                                <el-button class="consultButton marginTop30" type="primary" round>考试科目咨询</el-button>
                            </el-row>
                        </el-col>
                    </el-row>

                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%; text-align: center;">
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
            <div style="width: 100%;text-align:center;">
                <el-row :gutter="10">
                    <el-col :span="6">
                        <p>{{this.form.formalService.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more">服务详情<el-icon><ArrowRight /></el-icon></p>
                    </el-col>
                </el-row>
            </div>
            <div style="width: 100%;">
                <div v-for="(item,i) in this.form.formalService.images" :key="i">
                    <img class="imgPhone" :src="item.url">
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
    import Swiper from "../../components/util/Swiper"
    import SwiperItem from "../../components/util/SwiperItem"

  //  import router from "@/router";

    export default {
        name: "HomeClient",
        components:{
            Swiper,
            SwiperItem,
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
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
        }
    }
</script>

<style scoped>
    hitConsultButton{
        width: 245px;
        background-color: #456ced;
        color: white;
    }
</style>