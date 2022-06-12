<template >
    <div>
        <el-card class="box-card">
            <el-form :inline="true" :model="formInline" style="text-align: center;padding-top: 50px;">
                <el-row :gutter="20">
                    <el-col :span="20" :offset="3">
                    <el-form-item label="账户：">
                        <el-input v-model="formInline.account" placeholder="账户名"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="20" :offset="3">
                    <el-form-item label="密码：">
                        <el-input v-model="formInline.password" placeholder="密码"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="20" :offset="3">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登陆</el-button>
                    </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>

</template>

<script>
    import router from "@/router";
    import axios from "axios"
    import { ElMessage } from 'element-plus'
    export default {
        data() {
            return {
                formInline:{
                    account:'',
                    password:''
                },
            }
        },
        methods:{
            async onSubmit(){
                await axios.post("/admin/login/", this.formInline).then((resp) => {
                    if (resp.data){
                        console.info(123);
                        if(resp.data.validate){
                            console.info(resp.data.validate);
                            //存储token
                            this.$store.commit('SET_TOKENN', resp.data.token);
                            //存储user，
                            this.$store.commit('SET_USER', resp.data.account);
                            //获取sid
                            console.info("获取sid");
                            router.push("/homePage")
                        }
                    }else {
                        ElMessage.error("账户或密码错误");
                    }
                }).catch(()=>{
                    ElMessage.error("登录失败");
                });

            },

        },



    }
</script>

<style scoped>
    .box-card {
        width: 50%;
        margin-left: 25%;
        margin-top: 5%;
        background: #ebf0ff;
        height: 90%;
    }

</style>