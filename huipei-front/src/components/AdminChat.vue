<template>
    <el-container style="height: 400px; width: 100%" v-if="containDisplay">
        <el-main style="background: white;">
            <div class="message-panel">
                <div v-for="(item, index) of msgList" :key="index">
                    <div class="msg-wrapper" v-bind:class="{ self: item.fromQuizzer===1 }">

                        <el-button key="text" type="primary" v-if="item.fromQuizzer === 1" circle size="small">小培</el-button>
                        <el-button key="text" type="primary" v-if="item.fromQuizzer === 0" circle size="small" >学员</el-button>

                        <span>&#12288;</span>
                        <div class="content-self" v-if="item.fromQuizzer === 1">{{item.record}}</div>
                        <div class="content" v-else>{{item.record}}</div>
                    </div>
                </div>
            </div>
        </el-main>
        <el-footer style=" height: 13%; width: 100%; ">
            <el-row :gutter="10" style="width: 100%; text-align: center">
                <el-col :span="22">
                    <el-input type="text" placeholder="请输入..." v-model.trim="msg" ></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button @click="toSendMsg" type="primary" circle>
                        <el-icon color="white"><Promotion /></el-icon>
                    </el-button>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>

    //import commonData from "@/data/commonData";


    export default {
        name: "AdminChat",
        components:{

        },
        props:{
            consultId:Number,
            containDisplay:Boolean,
        },
        data(){
            return{
                msg:'',
                result:'',
                msgList:[]
            }
        },
        watch:{
            msgList(newVal, oldVal){
                    console.log(newVal, oldVal);
                    this.msgList = newVal
            }
        },
        created() {
            this.intSend()
            this.$adminSocked.ws.onmessage=this.onmessage;
        },

        methods:{
            intSend(){
                let message = {consultId:this.consultId,reload:true};
                this.$adminSocked.ws.send(JSON.stringify(message));
            },
            toSendMsg(){
                let that = this;
                if (!this.msg.length) {
                    return;
                }
                this.msgList.push({record:this.msg, fromQuizzer:1});
                if (that.$adminSocked.ws && that.$adminSocked.ws.readyState == 1) {
                    console.log("发送信息", this.msg);
                    let message = {consultId:this.consultId,msg:this.msg};
                    that.$adminSocked.ws.send(JSON.stringify(message));
                }
                this.msg = ''
            },
            onmessage(e){
                let data = JSON.parse(e.data)
                console.log("接收信息", data);
                if (data.logList){
                    this.msgList = data.logList
                    console.log("历史消息", data.logList);
                }
                if (data.msg){
                    this.$store.commit("SET_UNREAD", 1);
                    if (data.consultId === this.consultId){
                        this.msgList.push({record:data.msg, fromQuizzer:0})
                    }
                    console.log("接收信息", data.msg);
                }
            },

        }

    }



</script>

<style scoped>
    .message-panel {
        width: 95%;
        border-top: 1px #ebebeb solid;
        border-bottom: 1px #ebebeb solid;
        overflow-x: hidden;

        height: 90%;
    }
    .msg-wrapper {
        display: flex;
        width: 99%;
        padding: 5px;
    }

    .content {
        border: 1px solid rgba(85, 85, 85, 0.09);
        border-radius: 8px;
        padding: 5px;
    }
    .content-self{
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 8px;
        padding: 5px;
        background: #4b7ae6;
        color: white;
    }

    .self {
        flex-direction: row-reverse;
    }
</style>