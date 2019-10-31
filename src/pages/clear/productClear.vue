<template>
    <div class="prdouctClear">
        <h3>欢迎您 admin</h3>
        <p>商品销售。带<span>*</span>为必填项目，先把商品加入订单。所有商品加入订单后<span>确认提交</span>完成!</p>
        <el-tabs type="border-card">
            <el-tab-pane label="商品销售">
                <p><span>*</span>商品条形码：</p>
                <el-input v-model="input" clearable class="w200"></el-input>
                <div style="margin: 20px 0;"></div> 
                <p><span>*</span>数量：</p>
                <el-input v-model="input" clearable class="w100"></el-input>
                <span class="font14">计量商品单位为千克</span>
                <div style="margin: 20px 0;"></div> 
                <el-button type="success">加入订单</el-button><span class="colorg">重新出库</span>
                <template>

                    <el-table :data="tableData" border height="200" :summary-method="getSummaries" show-summary style="width: 100%; margin-top: 20px">
                        <el-table-column prop="name" label="名称" width="180">
                        </el-table-column>
                        <el-table-column prop="num" label="数量">
                        </el-table-column>
                        <el-table-column prop="amount1" label="单价（元）">
                        </el-table-column>
                        <el-table-column prop="amount2" label="总价（元）">
                        </el-table-column>
                    </el-table>
                </template>

                <p>会员卡号：</p>
                <el-input v-model="input" clearable class="w200"></el-input>
                <p class="font14">填写会员卡卡号</p>
                <el-button type="success">确认提交</el-button>
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
                 tableData: [
                    {
                        name: '12987122',
                        num: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                    },
                ]
            }
        },
        methods: {
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                        return prev + curr;
                    } else {
                        return prev;
                    }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
                });

                return sums;
            }
        }
  };
</script>

<style lang="less" scoped>
    .prdouctClear{
        p{
            font-size: 14px;
            span{
                color: red;
            }
        }
        .w200{
            width: 300px;
        }
        .w100{
            width: 160px;
        }
        .font14{
            font-size: 14px;
            margin-left: 5px;
            color: #ccc;
        }
        .colorg{
            font-size: 14px;
            color: greenyellow;
            margin-left: 5px;
        }
    }
</style>