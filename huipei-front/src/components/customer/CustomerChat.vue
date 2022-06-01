<template>
    <el-container style="height: 95%; width: 100%">
      <el-header class="el-header">
          <el-col :span="6">
            <img style="width: 80px;margin-top: 20%" src="../../../static/zx-logo.jpg"/>
          </el-col>
          <el-col :span="18" :offset="1">
            <h5 style="color: white">汇培网教育,专注成人学历提升培训</h5>
          </el-col>
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
import {  onMounted } from "vue";
import useSocket from "/src/components/js/use-socket.js";
import router from "@/router";
import msgBox from './msgBox.vue';
import axios from "axios"

export default {
    name: "CustomerChat.vue",
    components: {
        msgBox,
    },
    props:{
        phone:String,
        subjectCode:String,
        courseId:Number,
    },
  data() {
    return {
      userName: '',
      msg: '',
      msgList: [{
        name:'',
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
 /* sockets: {
    connect: function () {
      console.log('socket connected')
    },
    message: function (data) {
      console.log(data)
      // this.msgList.push(`${data.name}说:${data.msg}`)
      this.msgList.push({
        username: data.username === this.userName ? '我' : data.username,
        msg: data.msg,
        isCustom: data.username === this.userName
      })
    }
  },*/
    /*async mounted() {
        this.wsInit()
    },*/
    created(){
        this.wsInit()
    },
    methods:{
     toSendMsg(){
          if (!this.msg.length) {
             return;
          }
          console.info(this.msg)
          let nowMsg={
          id: parseInt(Date.now() * Math.random()),
          username: this.username,
          msg: this.msg,
          date: Date.now(),
              isCustom:true
        }
            console.info(nowMsg)
         this.sendDataToServer(nowMsg);
            this.msg = '';
      },


    sendMsg(nowMsg){
      this.msgList.push(nowMsg);
      useSocket(this.msgList);
    },
      sendDataToServer(nowMsg) {
          this.msgList.push(nowMsg);
          if (this.webSocket.readyState === 1) {
              this.webSocket.send(this.msgList)
          } else {
              throw Error('服务未连接')
          }
      },

      /**
       * 初始化ws
       */
      async wsInit() {
          if (!this.sid){
              let req = {phone: this.phone, subjectCode: this.subjectCode, courseId: this.courseId, type:2, createSid:true};
              await axios.post("/consult/sid", req).then((res)=>{
                  this.sid = res.data
                  console.info(this.sid)
              })

              console.info("=====================sid")
              console.info(this.sid)

          }
          console.info("------------------sid")
          console.info(this.sid)
          if (this.sid){
              console.info(this.sid)
              const wsuri = `ws://localhost:8081/api/socket/${this.sid}`;
              this.ws = wsuri
              if (this.wsIsRun) return
              // 销毁ws
              /*this.wsDestroy()*/
              // 初始化ws
              this.webSocket = new WebSocket(this.ws)
          }

          // ws连接建立时触发
         /*this.webSocket.addEventListener('open', this.wsOpenHanler)*/
      /*    // ws服务端给客户端推送消息
          this.webSocket.addEventListener('message', this.wsMessageHanler)
          // ws通信发生错误时触发
          this.webSocket.addEventListener('error', this.wsErrorHanler)
          // ws关闭时触发
          this.webSocket.addEventListener('close', this.wsCloseHanler)*/

          // 检查ws连接状态,readyState值为0表示尚未连接，1表示建立连接，2正在关闭连接，3已经关闭或无法打开
      /*    clearInterval(this.wsTimer)
          this.wsTimer = setInterval(() => {
              if (this.webSocket.readyState === 1) {
                  clearInterval(this.wsTimer)
                  this.wsIsRun = true
              } else {
                  console.log('ws建立连接失败')
                  this.wsInit()
              }
          }, 3000)*/
      },
      // eslint-disable-next-line no-unused-vars
      wsOpenHanler(event) {
          console.log('ws建立连接成功')
      },
      wsMessageHanler(e) {
          console.log('wsMessageHanler')
          console.log(e)
          //const redata = JSON.parse(e.data)
          //console.log(redata)
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
      /**
       * 销毁ws
       */
      wsDestroy() {
          if (this.webSocket !== null) {
              this.webSocket.removeEventListener('open', this.wsOpenHanler)
              this.webSocket.removeEventListener('message', this.wsMessageHanler)
              this.webSocket.removeEventListener('error', this.wsErrorHanler)
              this.webSocket.removeEventListener('close', this.wsCloseHanler)
              this.webSocket.close();
              this.webSocket = null;
              this.wsIsRun = false;
              clearInterval(this.wsTimer)
          }
      },
  }
}

// life onMounted
onMounted(() => {
  this.username = window.sessionStorage.getItem("username");

  if (!this.username) {
    router.push({ path: "/" });
  }
});

// function
// eslint-disable-next-line no-unused-vars


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
