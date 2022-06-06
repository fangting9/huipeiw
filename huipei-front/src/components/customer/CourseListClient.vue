<template>
    <div style="width: 100%">
        <el-header style="width: 100%; height: 60px;text-align: right">
            <el-row :gutter="10">
                <el-col :span="9" :offset="8">
                    <h3 style="text-align: center">汇培网</h3>
                </el-col>
                <el-col :span="7" >
                    <img @click="goHome" style="width: 100%;margin-top: 17%;" src="../../../static/mini-logo.jpg">
                </el-col>
            </el-row>
        </el-header>
        <div style="width: 80%; margin-left: 10%">
            <el-input class="el-input" v-model="form.vague" placeholder="搜索课程关键词" suffix-icon="Search" @change="list"></el-input>
        </div>
        <div style="height: 50px; text-align: center">
            <el-menu
                    :default-active= 'activeIndex'
                    mode="horizontal"
                    @select="handleSelect"
                    class="el-menu-demo"
            >

                <el-menu-item index="0" style="margin-left: 30px;" @click="list()">
                    全部
                </el-menu-item>

             <!--   <div v-for="(item, index) in subjectList" :key="index" >
                    <el-menu-item :index="item.code" @click="list(item.code)">
                        {{item.name}}
                    </el-menu-item>
                </div>-->

                <el-menu-item index="1" @click="list()">
                    学历提升
                </el-menu-item>
                <el-menu-item index="2" @click="list()">
                    会计学习
                </el-menu-item>
                <el-menu-item index="3" @click="list()">
                    研究生
                </el-menu-item>
                <el-menu-item index="4" @click="list()">
                    建工培训
                </el-menu-item>
                <el-menu-item index="5" @click="list()">
                    职业考证
                </el-menu-item>


            </el-menu>
        </div>

        <el-main style="width: 100%">
            <div v-for="(item,i) in this.courseList" :key="i" style="width: 100%; text-align: left">
                <el-row :gutter="10">
                    <el-col :span="8" :offset="1">
                        <img style="width: 100px; height: 100px; -webkit-border-radius: 5px;" :src="item.detail.url">
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
                                    style="margin-left: 1px"
                                    :disable-transitions="false"
                            >
                                {{ tag }}
                            </el-tag>
                        </el-row>
                        <el-row :gutter="10">
                            <span class="courseNum red" style="margin-top: 20px;">¥{{item.detail.price}}</span>
                            <el-button @click="detail(item)" class="signUpButton" style="margin-top: -20px" round>查看详情</el-button>
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
                activeIndex:'0',
                subjectList:[],
                form:{
                    vague:'',
                    code:'',
                    pageSize:100,
                    pageNo:1,
                    pageTotal:0,
                },
                courseList:[]
            }
        },
        created(){
            this.activeIndex = useRoute().query.activeIndex;
           // this.search();
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
                    this.subjectList = response.data

                })
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

    .el-menu-item{
        padding: 0 3px;
        font-size:xx-small;

    }
    .el-input{
        --el-input-bg-color: #f5f5f5;
        --el-input-border-color:none
    }
</style>