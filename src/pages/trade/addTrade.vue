<template>
    <div class="addTrade">
        <h3>欢迎您 admin</h3>
        <div class="topNav">
          <p>1.你可以在这里添加新的商品或者编辑已有的商品 2.添加新的商品的同时可以进入入库（入库必须有数量和进价）3.带<span>*</span>必填</p>
            <el-tabs type="border-card">
                <el-tab-pane label="商品管理" class="lefttex" @click="goToTrades('/trades')">              
                <router-view></router-view> 
                <!-- 商品管理 -->
                 </el-tab-pane>
                <el-tab-pane label="添加商品" class="lefttex" @click="goToAddTrades('/addtrade')">
                    <p><span>*</span>所属分类：</p>
                     <template>
                        <el-select v-model="value" clearable placeholder="选择分类">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                    <div style="margin: 20px 0;"></div>
                    <p><span>*</span>商品名称：</p>
                    <el-input  v-model="input" clearable class="w200"></el-input>
                    <div style="margin: 20px 0;"></div>
                    <p><span>*</span>商品售价：</p>
                    <el-input  v-model="input" clearable class="w200"></el-input> 元
                    <div style="margin: 20px 0;"></div>
                    <p>市场价：</p>
                    <el-input  v-model="input" clearable class="w200"></el-input> 元
                    <div style="margin: 20px 0;"></div>       
                    <p class="fontS12">默认市场价为售价的1.2倍</p>
                    <p>商品进价：</p>
                    <el-input v-model="input" clearable class="w200"></el-input> 元
                    <div style="margin: 20px 0;"></div>
                    <p>入库数量：</p>
                    <el-input  v-model="input" clearable class="w200"></el-input> 
                    <div style="margin: 20px 0;"></div>
                    <p class="fontS12">记量商品单位为千克</p>
                    <p>商品重量：</p>
                    <el-input v-model="input" clearable class="w200"></el-input> 
                    <div style="margin: 20px 0;"></div>
                    <p>商品单位：</p>
                    <el-input v-model="input" clearable class="w200"></el-input> 
                    <div style="margin: 20px 0;"></div>

                    <p>会员优惠：</p>
                    <p><template>
                    <el-radio v-model="radio" label="1">享受</el-radio>
                    <el-radio v-model="radio" label="2">不享受</el-radio>
                    </template>
                    </p>
                    <p>是否促销：</p>
                    <p><template>
                    <el-radio v-model="radio1" label="2">启用</el-radio>
                    <el-radio v-model="radio1" label="1">禁用</el-radio>
                    </template>
                    </p>
                    <p>商品简介：</p>
                    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="textarea2"></el-input><div style="margin: 20px 0;"></div>
                    <p class="fontS12">不超过200个汉字</p>
                    <el-button type="success">添加</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        radio: '1',
        radio1: '1',
        input: "",
       textarea2: '',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: ""
    };
  },
  methods: {
    goToTrade(hash,index){               
        this.$router.history.push(hash)
        this.curr = index
        console.log('111')
    },
    goToAddTrades(hash,index){
       this.$router.history.push(hash)
        this.curr = index
      }
    }
};
</script>

<style lang="less" scoped>
.addTrade {
  p {
    font-size: 14px;
    margin-top: -10px;
    span {
      color: red;
    }
  }
  .fontS12 {
    font-size: 12px;
    color: #ccc;
  }
  .topNav {
    p {
      margin-bottom: 20px;
    }
    .w200 {
      width: 300px;
    }
  }
}
</style>