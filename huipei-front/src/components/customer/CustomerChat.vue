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

      </el-main>
      <el-footer style=" height: 13%; width: 100%; ">
        <el-row :gutter="10" style="width: 100%; text-align: center">
          <el-col :span="22">
            <el-input type="text" placeholder="请输入..." v-model.trim="msg" ></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" circle>
              <el-icon color="white"><Promotion /></el-icon>
            </el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>

  <ul>
    <li v-for="item in msgList" :key="item.id">
      <span>{{ item.username + "\t" }}</span>
      <span>{{ item.msg + "\t"}}</span>
      <span>{{ new Date(item.date).toLocaleString() }}</span>
    </li>
  </ul>


</template>

<script>
import {  onMounted } from "vue";
import useSocket from "/src/components/js/use-socket.js";
import router from "@/router";

export default {
  name: "CustomerChat.vue",

  data() {
    return {
      msg:'',
      msgList:[],
      username:'',
    }
  },
  methods:{
     toSendMsg(){
        if (!this.msg.value.length) {
          return;
        }

          let nowMsg={
          id: parseInt(Date.now() * Math.random()),
          username: this.username,
          msg: this.msg.value,
          date: Date.now(),
        }
        this.sendMsg(nowMsg);
      },


    sendMsg(nowMsg){
      const val = JSON.parse(nowMsg);
      this.msgList.value.push(val);
      useSocket(this.msgList.value);
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
</style>
