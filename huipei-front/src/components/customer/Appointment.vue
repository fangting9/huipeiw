<template>
    <div>
        <el-form class="dialog-form">
            <el-form-item label="姓名">
                <el-input v-model="signUpInfo.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="signUpInfo.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signUpSave('预约成功')" style="width: 100%;height:40px;color: white" round>立即预约</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { ElMessage} from 'element-plus'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Appointment",
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
            origin:String,
        },
        methods:{
            signUpSave(str){
                console.info(this.origin)
                this.$emit('change', false)
                ElMessage(str)

            },
        }
    }
</script>

<style scoped>

</style>