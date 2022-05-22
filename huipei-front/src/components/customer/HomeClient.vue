<template>
    <div>
        <h3 style="text-align: center">首页</h3>
        <el-row :gutter="20">
            <swiper style="width: 100%;">
                <swiper-item v-for="(item,i) in this.form.rollingPicUrl" :key="i">
                   <img :src="item.url" alt="">
                </swiper-item>
            </swiper>
        </el-row>
        <el-row :gutter="10">
            <div style="width: 100%; margin-inline-start: 15px;">
                <div v-for="(item,i) in this.form.brandIntroductionPicUrl" :key="i">
                    <el-col :span="4">
                        <img class="image50" :src="item.picUrl" alt="">
                        <p class="text-small">{{item.name}}</p>
                    </el-col>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <el-row :gutter="10">
                    <el-col :span="6" :offset="1">
                        <p>{{this.form.hotTopic.title}}</p>
                    </el-col>
                    <el-col :span="16">
                        <p class="text_right more">了解更多<el-icon><ArrowRight /></el-icon></p>
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
                                <el-button class="signUpButton" round>报名</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-divider class="divider2"/>
        <el-row :gutter="20">
            <div style="width: 100%;">
                <el-row :gutter="10">
                    <el-col :span="6" :offset="1">
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
                                <el-button class="signUpButton" round>预约</el-button>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-divider class="divider"/>
                </div>
            </div>
        </el-row>
        <el-row :gutter="20">

        </el-row>
        <el-row :gutter="20">

        </el-row>
        <el-row :gutter="20">

        </el-row>
        <el-row :gutter="20">

        </el-row>

        <el-dialog title="考试报名" v-model="signUpDialogVisible">

        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios"
    import { ElMessage, } from 'element-plus'
    import Swiper from "../../components/util/Swiper"
    import SwiperItem from "../../components/util/SwiperItem"
        export default {
        name: "HomeClient",
        components:{
            Swiper,
            SwiperItem,
        },
        data() {
            return {
                signUpDialogVisible:false,
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
        width: 65px;
        height: 65px;
    }

</style>