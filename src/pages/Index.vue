<template>
    <div class="manage">
      <!-- 左边导航条 -->
        <div class="nav">
            <div class="leftNav">
                <el-col :span="12">
                    <h2>光辉超市管理系统</h2>
                    <p @click="clickUserName">
                      <img 
                      @click="changeImg"
                      src="http://cdn.duitang.com/uploads/blog/201412/10/20141210221908_GJQjc.thumb.700_0.jpeg" >
                      <span>{{ username }}</span></p>
                    <p v-show="username !=='请登录'" class="topLogin">
                        <span>管理首页</span>|<span @click="goToLogin">退出登录</span>
                    </p>
                    <el-menu 
                    default-active="/index/trades" 
                    class="el-menu-vertical-demo" 
                    @open="handleOpen" 
                    @close="handleClose" 
                    background-color="#545c64" 
                    text-color="#fff" 
                    active-text-color="#ffd04b" 
                    unique-opened 
                    router>  
                    <!-- 循环创建导航条内容 -->
                    <el-submenu v-for="(item,i) in list" :key="i" :index="item.index">
                        <template slot="title">
                        <span>{{ item.text }}</span>
                        </template>
                        <el-menu-item-group v-for="(obj,k) in item.child" :key="k">
                        <el-menu-item :index="obj.indexs">{{ obj.texts }}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-col>
            </div>
    
        </div>
        <!-- 右边内容 -->

        <div class="content">
            <router-view></router-view>    
        </div>
    </div>
</template>

<script>
import tree from "../json/tree.json";
import { getToken } from "../api/apis.js";
export default {
  data() {
    return {
      username: "请登录",
      curr: 1,
      list: []
    };
  },

  components: {},
  created() {
    // this.list = tree;
    getToken(localStorage.token).then(res => {
      // console.log(localStorage.acc, res.data);
      this.username = res.data == "timeout" ? "请登录" : localStorage.acc;
      if (res.data != "timeout") {
        let arr = [];
        // arr.includes 返回true false
        // arr.indexOf  返回元素的索引
        for (let obj of tree) {
          //检查此数组有没有当前的权限
          // console.log(obj.userGroup,localStorage.userGroup)
          if (obj.userGroup.includes(localStorage.userGroup)) {
            arr.push(obj);
          }
        }
        this.list = arr;
        // console.log(
        //   tree.filter(item => item.userGroup.includes(localStorage.userGroup))
        // );
        // this.list = tree.filter(item =>
        //   item.userGroup.includes(localStorage.userGroup)
        // );
      }
    });
  },
  methods: {
    //跳转到登录页面
    goToLogin() {
      this.$router.history.push("/");
    },
    // 跳转到头像上传页面
    changeImg() {
      this.$router.history.push("/index/changeimg");
    },
    clickUserName() {
      if (this.username == "请登录") {
        this.$router.history.push("/");
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.manage {
  display: flex;
  .nav {
    width: 260px;
    height: auto;
    text-align: center;
    background: #000;
    padding-top: 20px;
    .leftNav {
      height: 800px;
      color: #ccc;
      h2 {
        width: 260px;
        padding: 20px 0;
      }
      p {
        width: 260px;
        font-size: 14px;
        margin-left: 40px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .el-menu-vertical-demo {
        background: #000;
        width: 200px;
        margin-left: 60px;
        .el-menu-item {
          font-size: 12px;
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 20px;
  }
}
</style>