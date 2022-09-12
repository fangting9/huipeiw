<template xmlns:el-col="http://www.w3.org/1999/html">
    <el-container style="height: 95%; width: 100%" v-if="containDisplay">
      <el-header class="el-header">
          <el-col :span="6">
            <img style="width: 80px;margin-top: 20%" src="../../../static/zx-logo.jpg"/>
          </el-col>
          <el-col :span="18" :offset="1">
            <h5 style="color: white">汇培网教育,专注成人学历提升培训</h5>
          </el-col>

          <div style="width: 100%; text-align: right">
              <el-icon size="50" color="white" @click="close_chat"><Close /></el-icon>
          </div>

      </el-header>
      <el-main style="background: white;">
        <div class="message-panel">
        <msg-box v-for="(item, index) of msgList" :key="index+Math.random()" :username="item.username" :content="item.msg" :isCustom="item.isCustom"></msg-box>
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

import msgBox from './msgBox.vue';
import axios from "axios"
import Fingerprint2 from 'fingerprintjs2'
import commonData from "@/data/commonData";
export default {
    name: "CustomerChat.vue",
    components: {
        msgBox,
    },
    props:{
        phone:String,
        subjectCode:String,
        courseId:Number,
        containDisplay:Boolean,
    },
  data() {
    return {
      userName: '',
      msg: '',
      msgList: [{
        msg:'您好',
        isCustom:false
      }],
        sid:'',
        // ws是否启动
        wsIsRun: false,
        // 定义ws对象
        webSocket: null,
        // ws请求链接（类似于ws后台地址）
        ws: '',
        // ws定时器
        wsTimer: null,
    }
  },

    created() {
        //this.wsInit()
    },
    methods:{
        close_chat(){
            this.$emit('close_chat', false)
            this.webSocket.close();
        },
        toSendMsg(){
          if (!this.msg.length) {
             return;
          }
          console.info(this.msg)
         this.msgList.push({ msg:this.msg, isCustom:true });
         if (this.wsIsRun && this.webSocket.readyState === 1){
             this.webSocket.send(this.msg)
         }else {
             this.wsInit().then(()=>{
                 this.webSocket.send(this.msg);
             });
         }
            this.msg = '';
      },

      /**
       * 初始化ws
       */
      async wsInit() {
          // 浏览器指纹
          Fingerprint2.get((components) => {
              // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
              const values = components.map((component) => component.value) // 配置的值的数组
              sessionStorage.setItem("stoken", Fingerprint2.x64hash128(values.join(''), 31));
          });

          this.sid = sessionStorage.getItem(sessionStorage.getItem("stoken"))
          if (!this.sid){
              let req = {phone: this.phone, subjectCode: this.subjectCode, courseId: this.courseId, type:2, createSid:true};
              await axios.post("/consult/sid", req).then((res)=>{
                  sessionStorage.setItem(sessionStorage.getItem("stoken"), res.data);
                  this.sid = res.data;
              })
          }

          if (this.sid){
              this.ws = commonData.ws+this.sid;
              console.info(this.ws)
              if (!this.webSocket || this.webSocket.readyState != 1) {
                // 初始化ws
                  this.webSocket = new WebSocket(this.ws)
                  // ws连接建立时触发
                  this.webSocket.addEventListener('open', this.wsOpenHanler)
                  // ws服务端给客户端推送消息
                  this.webSocket.addEventListener('message', this.wsMessageHanler)
                  // ws通信发生错误时触发
                  this.webSocket.addEventListener('error', this.wsErrorHanler)
                  // ws关闭时触发
                  this.webSocket.addEventListener('close', this.wsCloseHanler)

                  // 检查ws连接状态,readyState值为0表示尚未连接，1表示建立连接，2正在关闭连接，3已经关闭或无法打开
                  clearInterval(this.wsTimer)
                  this.wsTimer = setInterval(() => {
                      if (this.webSocket.readyState === 1) {
                          clearInterval(this.wsTimer)
                          this.wsIsRun = true
                      } else {
                          console.log('ws建立连接失败')
                          this.wsInit()
                      }
                  }, 300)
              }
          }
      },
      // eslint-disable-next-line no-unused-vars
      wsOpenHanler(event) {
          console.log('ws建立连接成功')
      },
      wsMessageHanler(e) {
          let data = JSON.parse(e.data)
          if (data.logList){
              data.logList.forEach(item=>{
                  this.msgList.push({msg:item.record, isCustom:!item.fromQuizzer})
              })
            //  console.log("历史消息", data.logList);
          }
          if (data.msg){
              this.msgList.push({ msg:JSON.parse(e.data).msg, isCustom:false });
             // console.log("接收信息", data.msg);
          }

      },
      /**
       * ws通信发生错误
       */
      wsErrorHanler(event) {
          console.log(event, '通信发生错误')
       //   this.wsInit()
      },
      /**
       * ws关闭
       */
      wsCloseHanler(event) {
          console.log(event, 'ws关闭')
         // this.wsInit()
      },
  }
}

</script>

<style scoped>
  .el-header{
    background: #4b7ae6;
    width:100%;
    height: 15%;
  }
  .message-panel {
    width: 85%;
    border-top: 1px #ebebeb solid;
    border-bottom: 1px #ebebeb solid;
    overflow: scroll;
    overflow-x: hidden;
    padding: 10px;

  }
</style>
