<template>
    <div class="login">
        <div class="input-box">
            <el-input  style="margin-top:50px" placeholder="请输入账号" v-model="acc" clearable> </el-input>
            <el-input style="margin-top:20px; margin-bottom: 20px"  placeholder="请输入密码" v-model="pwd" clearable show-password> </el-input>
            <p class="fail" v-show="fail">密码或账号错误</p>
            <el-button @click="goToMange" type="success">登录</el-button>
        </div>
    </div>
</template>

<script>
import { login } from "../api/apis.js";
import { constants } from "fs";
import { setTimeout, clearTimeout } from "timers";
export default {
  data() {
    return {
      acc: "",
      pwd: "",
      fail: false,
      flag: true
    };
  },
  methods: {
    goToMange() {
      if (this.flag) {
        login(this.acc, this.pwd).then(res => {
          //   console.log(res.data)
          if (res.data.msg == "ok") {
            this.fail = false;
            localStorage.token = res.data.token;
            localStorage.acc = this.acc;
            localStorage.userGroup = res.data.userGroup;
            this.$router.history.push("/index/trades");
          } else {
            this.fail = true;
          }
        });
        this.flag = false;
        setTimeout(() => {
          this.flag = true;
        }, 5000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  background-color: #eee;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #cde9f4;

  .input-box {
    width: 200px;
    height: 350px;
    margin-right: 50px;
    background-color: #5d94d4;
    padding: 50px;
    text-align: center;
    .fail {
      color: red;
      font-size: 14px;
      margin-bottom: 20px;
    }
    button {
      width: 100px;
    }
  }
}
</style>