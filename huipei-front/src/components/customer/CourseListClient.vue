<template>
    <div style="width: 100%">
        <el-header style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="4"><p class="back" @click="this.$router.back()"><el-icon><ArrowLeft /></el-icon>返回</p></el-col>
                <el-col :span="9" :offset="3">
                    <h3 class="pageTitle"><p>课程列表</p></h3>
                </el-col>
                <el-col :span="6" >
                    <img @click="goHome" class="mini-logo" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>

            <el-row :gutter="20">
                <div style="width: 100%; text-align: center">
                <el-input class="el-input" v-model="form.vague" placeholder="搜索课程关键词" suffix-icon="Search" @change="list(form.code)"></el-input>

                </div>
            </el-row>


        <div style="height: 50px; text-align: center; margin-left: 5%">
            <el-menu
                    :default-active= 'activeIndex'
                    mode="horizontal"
                    @select="handleSelect"
                    class="el-menu-demo"
            >

                <el-menu-item index="0"  @click="list()">
                    全部
                </el-menu-item>

             <!--   <div v-for="(item, index) in subjectList" :key="index" >
                    <el-menu-item :index="item.code" @click="list(item.code)">
                        {{item.name}}
                    </el-menu-item>
                </div>-->

                <el-menu-item index="1" @click="list()" v-if="subjectCode.subject1">
                    {{subjectName.subject1}}
                </el-menu-item>
                <el-menu-item index="2" @click="list()" v-if="subjectCode.subject2">
                    {{subjectName.subject2}}
                </el-menu-item>
                <el-menu-item index="3" @click="list()" v-if="subjectCode.subject3">
                    {{subjectName.subject3}}
                </el-menu-item>
                <el-menu-item index="4" @click="list()" v-if="subjectCode.subject4">
                    {{subjectName.subject4}}
                </el-menu-item>
                <el-menu-item index="5" @click="list()" v-if="subjectCode.subject5">
                    {{subjectName.subject5}}
                </el-menu-item>

            </el-menu>
        </div>

        <el-main style="width: 100%">
            <div v-for="(item,i) in this.courseList" :key="i" style="width: 100%; text-align: left">
                <el-row :gutter="10">
                    <el-col :span="8" >
                        <img style="width: 100%; -webkit-border-radius: 5px;" :src="item.detail.url">
                    </el-col>
                    <el-col :span="14">
                        <el-row :gutter="10">
                            <p style="margin-top: -1px">{{item.name}}</p>
                        </el-row>
                        <el-row :gutter="10">
                            <el-tag
                                    v-for="(tag, index) in item.detail.label"
                                    :key="index"
                                    class="mx-1"
                                    style="margin-left: 1px; margin-top: -10px; margin-bottom: 5px"
                                    :disable-transitions="false"
                            >
                                {{ tag }}
                            </el-tag>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span class="price" >¥{{item.detail.price}}</span>
                            </el-col>
                            <el-col :span="12">
                                <el-button @click="detail(item)" class="signUpButton"  round>查看详情</el-button>
                            </el-col>


                        </el-row>
                    </el-col>
                </el-row>
                <el-divider class="divider1" />
            </div>

        </el-main>
    </div>
</template>

<script>
    import axios from "axios"
    import router from "@/router";
    import { useRoute } from "vue-router"
    export default {
        name: "CourseListClient",
        components:{

        },
        data() {
            return {
                subjectCode:{
                    subject1:false,
                    subject2:false,
                    subject3:false,
                    subject4:false,
                    subject5:false,
                },
                subjectName:{
                    subject1:'',
                    subject2:'',
                    subject3:'',
                    subject4:'',
                    subject5:'',
                },
                activeIndex:'0',
                subjectList:[],
                subjectMap:'',
                form:{
                    vague:'',
                    code:'',
                    enable:1,
                    pageSize:100,
                    pageNo:1,
                    pageTotal:0,
                },
                courseList:[]
            }
        },
        created(){
            this.activeIndex = useRoute().query.activeIndex;
            this.code = useRoute().query.activeIndex;
            this.search();
            this.list(useRoute().query.activeIndex);
        },

        methods:{
            handleSelect (key, keyPath) {
                //key: string, keyPath: string[]
                console.log(key, keyPath)
                this.form.code = key;
            },
            async search(){
                await axios.get("/admin/subject/list?enable=1" ).then((response) => {
                    if (response.data){
                        this.subjectList = response.data
                    }
                });

                for (const data in this.subjectList){
                   // console.info(this.subjectList[data])
                    if (this.subjectList[data].code === '1'){
                        this.subjectName.subject1 = this.subjectList[data].name;
                        this.subjectCode.subject1 = this.subjectList[data].code;
                    }else if (this.subjectList[data].code === '2'){
                        this.subjectName.subject2 = this.subjectList[data].name;
                        this.subjectCode.subject2 = this.subjectList[data].code;
                    }else if (this.subjectList[data].code === '3'){
                        this.subjectName.subject3 = this.subjectList[data].name;
                        this.subjectCode.subject3 = this.subjectList[data].code;
                    }else if (this.subjectList[data].code === '4'){
                        this.subjectName.subject4 = this.subjectList[data].name;
                        this.subjectCode.subject4 = this.subjectList[data].code;
                    }else if (this.subjectList[data].code === '5'){
                        this.subjectName.subject5 = this.subjectList[data].name;
                        this.subjectCode.subject5 = this.subjectList[data].code;
                    }
                }

            },

            async list(code){
                if (code){
                    this.form.code = code;
                }
                this.form.code = this.form.code === '0' ? '' : this.form.code;
                await axios.post("/admin/course/list",this.form).then((response) => {
                    this.courseList = response.data.list
                    this.courseList.forEach(item=> {
                        item.detail = this.stringToJson(item.detail)
                    });

                }).catch((e)=>{
                    console.info(e)
                })
            },
            stringToJson(val){
                return val ? JSON.parse(val) : val
            },
            detail(row){
                router.push({path:"/course", query:{id:row.id, name:row.name}})
            },
            goHome(){
                router.push("/home")
            },
        }
    }
</script>

<style scoped>
    .el-menu{
        text-align: center;
    }
    .el-menu-item{
        padding: 0 6px;
        font-size:small;

    }
    .el-input{
        --el-input-bg-color: #f5f5f5;
        --el-input-border-color:none;
        width: 90%;
        text-align: center;
    }
</style>