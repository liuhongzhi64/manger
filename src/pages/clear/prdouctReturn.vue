<template>
    <div class="prdouctReturn">
        <h3>欢迎您 admin</h3>
        <p class="topp">商品退货!</p>
        <el-tabs type="border-card">
        <el-tab-pane label="商品退货">
            <P>订单号：<el-input v-model="input" clearable class="w200"> </el-input><el-button type="success" class="but">查询</el-button></P>
        </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: "",
                textarea2: '',
                radio: '1',
            }
        }
    }
</script>

<style lang="less" scoped>
    .prdouctReturn{
        .topp{
            font-size: 14px;color: #ccc
        }
        .w200{
            width: 300px;
        }
        .but{
            margin-left: 10px;
        }
    }
</style>