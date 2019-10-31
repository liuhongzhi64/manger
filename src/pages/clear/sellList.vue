<template>
    <div class="sellList">
        <h3>欢迎您 admin</h3>
        <p>查看商品的销售明细</p>
        <el-tabs type="border-card">
        <el-tab-pane label="销售明细">
            <p>开始时间：
                <el-input v-model="input" clearable class="w200"></el-input> 
                结束时间：
                <el-input v-model="input" clearable class="w200"></el-input> 
                <span>(格式：2012-01-01)</span>
            </p>
            <p>
                <template>
                    <span>关键字：<el-input v-model="input" clearable class="w200"></el-input>
                    <span class="mar10">商品名称，订单号、客户名字、会员卡号</span>                  
                    <el-button type="success" class="but">查询</el-button> </span>
                </template>
            </p>
                    <template>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="订单号"
                width="120">
            </el-table-column>
            <el-table-column
                prop="name"
                label="名称"
                width="160">
            </el-table-column>
            <el-table-column
                prop="num"
                label="数量"
                width="100">
            </el-table-column>
            <el-table-column
                prop="trimPrice"
                label="实际售价"
                width="100">
            </el-table-column>
            <el-table-column
                prop="discount"
                label="优惠（促销/会员）"
                width="160">
            </el-table-column>
            <el-table-column
                prop="refund"
                label="退款"
                width="100">
            </el-table-column>
            <el-table-column
                prop="time"
                label="时间"
                width="100">
            </el-table-column>

    
            </el-table>
        </template>
        <div class="block">
            <el-button size="small" round>首页</el-button>
            <el-button size="small" round>上一页</el-button>
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            <el-button size="small" round>下一页</el-button>
            <el-button size="small" round>尾页</el-button>
        </div>
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
                        date: '12478569564',
                        name: '海飞丝去屑洗发水',
                        num:3,
                        trimPrice:24,
                        discount:'2.00元/无',
                        refund:'无退款',
                        time:'2012-02-17',
                    }, 
                    {
                        date: '12478569564',
                        name: '海飞丝去屑洗发水',
                        num:3,
                        trimPrice:24,
                        discount:'2.00元/无',
                        refund:'无退款',
                        time:'2012-02-17',
                    }, 
                    {
                        date: '12478569564',
                        name: '海飞丝去屑洗发水',
                        num:3,
                        trimPrice:24,
                        discount:'2.00元/无',
                        refund:'无退款',
                        time:'2012-02-17',
                    }, 
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .sellList{
        p{
            font-size: 14px;
            span{
                font-size: 12px;
            }
        }
        .w200{
            width: 160px;
        }
        .mar10{
            margin: 0 10px;
        }
        .block{
        margin-top:20px;
        display: flex;
        }
    }
</style>