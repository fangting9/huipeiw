<template>
    <div style="width: 100%">
        <!--<el-header>


            <el-menu
                    :default-active="'1'"
                    mode="horizontal"
                    @select="handleSelect"
                    collapse-transition="false"

            >

                <el-menu-item :index="item.code" v-for="(item, index) in subjectList" :key="index" :v-show="true">
                   {{ item.name }}
                </el-menu-item>

            </el-menu>
        </el-header>-->


            <div v-for="(item,i) in this.courseList" :key="i" style="width: 100%">
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


    </div>
</template>

<script>
    import axios from "axios"
    import router from "@/router";
    export default {
        name: "CourseListClient",
        data() {
            return {
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
           // this.search();
            this.list();
        },

        methods:{
            handleSelect (key, keyPath) {
                //key: string, keyPath: string[]
                console.log(key, keyPath)
            },
            async search(){
                await axios.get("/admin/subject/list?enable=1" ).then((response) => {
                    this.subjectList = response.data

                })
            },
            async list(){
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
            }
        }
    }
</script>

<style scoped>

</style>