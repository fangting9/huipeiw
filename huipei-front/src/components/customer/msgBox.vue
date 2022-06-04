<template>

    <div class="msg-wrapper" v-bind:class="{ self: isCustom }">

        <el-button key="text" type="primary" v-if="isCustom" circle size="large">朕</el-button>
        <el-button key="text" type="primary" v-if="!isCustom" circle size="large" >小培</el-button>

        <!--<div class="block">
            <el-avatar :size="50" :src="circleUrl" />
        </div>-->
        <span>&#12288;</span>
        <div class="content-self" v-if="isCustom">{{content}}</div>
        <div class="content" v-else>{{content}}</div>
    </div>
 
</template>

<script>
export default {
  name: 'msgBox',
  props: {
      username: String,
      content: String,
      isCustom: Boolean
  },
  data() {
    return {
      userName: '',
      msg: '',
      msgList: [],
    }
  },
  mounted() {

  },

    methods: {
       
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.msg-wrapper {
    display: flex;
    width: 99%;
    flex-direction: row;
    padding: 10px;
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