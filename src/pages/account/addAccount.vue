<template>
    <div class="addAccount">
        <h3>欢迎您 {{username}}</h3>
        <p>添加管理员账号</p>
        <el-tabs type="border-card">
        <el-tab-pane label="添加编辑账号">
            <p><span>*</span>用户名：</p>
            <el-input v-model="acc" clearable class="w200"></el-input> 
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>密码：</p>
            <el-input v-model="pwd" clearable show-password class="w200"></el-input> 
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>确认密码：</p>
            <el-input v-model="pwdex" clearable show-password class="w200"></el-input> 
            <p v-show="showpwderror">两次输入密码不一致,请检查</p>
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>选择用户组：</p>
            <el-select v-model="usergroup" clearable placeholder="选择用户组">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div style="margin: 20px 0;"></div>
            <el-button type="success" class="addBut" @click="addaccount">添加</el-button>
        </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { accoutadd } from "../../api/apis.js";
export default {
  data() {
    return {
      showpwderror: false, //显示密码错误提示
      username: "", //显示的当前用户
      acc: "", //新增的账号名
      pwd: "", //密码
      pwdex: "", //再次确认的密码
      textarea2: "",
      radio: "1",
      options: [
        {
          value: 0,
          label: "超级管理员"
        },
        {
          value: 1,
          label: "管理员"
        },
        {
          value: 2,
          label: "店员"
        }
      ],
      usergroup: 1 //当前选中的用户身份
    };
  },
  created() {
    this.username = localStorage.acc;
  },
  methods: {
    addaccount() {
        if(this.pwd !== this.pwdex){
            this.showpwderror=true;
            return
        }
      accoutadd(this.acc, this.pwd, this.usergroup).then(res=>{
          this.$message('账号添加成功')
      })
    }
  }
};
</script>

<style lang="less" scoped>
.addAccount {
  p {
    font-size: 14px;
    span {
      color: red;
    }
  }
  .w200 {
    width: 300px;
  }
  .addBut {
    margin: 40px 0 0;
  }
}
</style>