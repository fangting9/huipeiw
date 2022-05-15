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
import { ElMessage } from 'element-plus'
import Fingerprint2 from 'fingerprintjs2'
    export default {
        data() {
            return {
                formInline:{
                    account:'',
                    password:''
                },
            }
        },
        created(){
            this.createFingerprint();
        },
        activated(){
            this.createFingerprint();
        },
        methods:{
            onSubmit(){
                if (this.formInline.account == "admin" && this.formInline.password == "admin"){
                    if (!window.sessionStorage.getItem('token')){
                        window.sessionStorage.setItem('token', window.sessionStorage.getItem("murmur1"))
                        router.push("/HomePage")
                    }else if (window.sessionStorage.getItem('token') == window.sessionStorage.getItem("murmur1")){
                        router.push("/HomePage")
                    }else {
                        ElMessage('账号已被登录, 不可重复登录！')
                    }

                }else {
                    ElMessage('账号或密码错误.')
                }
            },
            createFingerprint() {
                const murmur2 = '';
                // 浏览器指纹
                Fingerprint2.get((components) => {
                    // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
                    const values = components.map((component) => component.value) // 配置的值的数组
                    this.murmur2 = Fingerprint2.x64hash128(values.join(''), 31) // 生成浏览器指纹
                    // console.log(components, values,murmur,'你好')
                    //murmur就是浏览器指纹啦
                    window.localStorage.setItem("murmur1", murmur2);
                    console.info("2222" + window.localStorage.getItem("murmur1"))
                    console.info("3333" + this.murmur2)
                })
                console.info("111111" + window.localStorage.getItem("murmur1"))
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
    }

</style>