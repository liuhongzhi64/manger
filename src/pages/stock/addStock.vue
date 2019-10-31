<template>
    <div class="stock">
        <h3>欢迎您 admin</h3>
        <P>商品入库。带<span>*</span>为必填</P>
        <el-tabs type="border-card">
        <el-tab-pane label="商品入库">
            <p><span>*</span>商品条形码：</p>
            <el-input v-model="input" clearable class="w200"></el-input> 
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>数量：</p>
            <el-input v-model="input" clearable class="w200"></el-input> 
            <p class="font14">记量商品单位为千克</p>
            <div style="margin: 20px 0;"></div>

            <p><span>*</span>进价：</p>
            <el-input v-model="input" clearable class="w200"></el-input> 元
            <div style="margin: 20px 0;"></div>
            <el-button type="success">入库</el-button>
        </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
          data() {
            return {
                radio: '1',
                input: "",
            textarea2: '',
            }
        }
    }
</script>

<style lang="less" scoped>
    .stock{
        p{
            font-size: 14px;
            span{
            color: red;
            }
        }
        .w200{
            width: 300px;
        }
        .font14{
            font-size: 12PX;
        }
    }
</style>