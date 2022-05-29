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

export default {
  name: "CustomerChat.vue",
  components: {
    msgBox,
  },

  mounted() {

  },
  data() {
    return {
      content: 'hahhahaha',
      userName: '',
      msg: '',
      msgList: [{
        name:'',
        msg:'您好',
        isCustom:false
      }],
    }
  },
  sockets: {
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
        this.sendMsg(nowMsg);
       this.msg = '';
      },


    sendMsg(nowMsg){
      this.msgList.push(nowMsg);
      useSocket(this.msgList);
    }
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
