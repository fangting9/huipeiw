<template>
    <div>
        <el-form class="dialog-form">
            <el-form-item label="姓名">
                <el-input v-model="signUpInfo.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="signUpInfo.phone" placeholder="请输入手机号" oninput="value=value.replace(/[^\d]/g,'')"
                          maxlength="11" @blur="telTest"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signUpSave()" style="width: 100%;height:40px;color: white" round>立即报名</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { ElMessage } from 'element-plus'
    import commonData from "@/data/commonData";
    export default {
        name: "SignUp",
        data(){
            return{
                signUpInfo:{
                    phone: '',
                    name:'',
                    code:''
                },
            }
        },
        props:{
            subjectCode:String,
            courseId:Number
        },
        methods:{
            signUpSave(){
                if (!this.signUpInfo.name){
                    ElMessage("请输入姓名");
                    return
                }
                if (!this.signUpInfo.phone){
                    ElMessage("请输入手机号")
                }
                let req = {name: this.signUpInfo.name, phone: this.signUpInfo.phone, subjectCode: this.subjectCode, courseId: this.courseId, type:1, createSid:false};
                commonData.getSid(req);
                this.$emit('change', false)
                ElMessage.success("报名成功")
            },
            telTest () {
                const reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (this.chatPhone=== '' || this.chatPhone.length <= 10 || !reg.test(this.chatPhone)) {
                    ElMessage.error("手机号码错误");
                }
            },
        }
    }
</script>

<style scoped>

</style>