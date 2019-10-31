<template>
    <div class="trades">
        <h3>欢迎您 admin</h3>
        <p>查看和管理所有已有的商品</p>
        <template>
        <el-select v-model="value" clearable placeholder="选择分类">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <span>关键字：<el-input v-model="input" clearable class="w200"></el-input>(商品名称，条形码)<el-button type="success" class="but">查询</el-button> </span>
        </template>
       
         <template>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="商品条形码"
                width="140">
            </el-table-column>
            <el-table-column
                prop="name"
                label="商品名称"
                width="100">
            </el-table-column>
            <el-table-column
                prop="address"
                label="所属分类"
                width="100">
            </el-table-column>
            <el-table-column
                prop="sellingPrice"
                label="售价（元）"
                width="100">
            </el-table-column>
            <el-table-column
                prop="promotionPrice"
                label="促销价（元）"
                width="120">
            </el-table-column>
            <el-table-column
                prop="marketPrice"
                label="市场价（元）"
                width="120">
            </el-table-column>
            <el-table-column
                prop="repertory"
                label="库存"
                width="100">
            </el-table-column>
            <el-table-column
                prop="allRepertory"
                label="库存总额（元）"
                width="120">
            </el-table-column>
            <el-table-column
                prop="rental"
                label="销售总额（元）"
                width="120">
            </el-table-column>
            <el-table-column
                prop="operation"
                label="管理">
            </el-table-column>
            </el-table>
        </template>
        <div class="block">
            <el-button size="small" round>上一页</el-button>
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            <el-button size="small" round>下一页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
          data() {
                return {
                    radio: '1',
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
                value: "",
                 tableData: [
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        address: '优乐美',
                        sellingPrice:2.00,
                        promotionPrice:'未促销',
                        marketPrice:2.40,
                        repertory:'0(缺)',
                        allRepertory:0.00,
                        rental:0.00,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        address: '优乐美',
                        sellingPrice:2.00,
                        promotionPrice:'未促销',
                        marketPrice:2.40,
                        repertory:'0(缺)',
                        allRepertory:0.00,
                        rental:0.00,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        address: '优乐美',
                        sellingPrice:2.00,
                        promotionPrice:'未促销',
                        marketPrice:2.40,
                        repertory:'0(缺)',
                        allRepertory:0.00,
                        rental:0.00,
                        operation:'编辑|删除'
                    }, 
                    ]
                };
            },
            methods: {
            goToTrade(hash,index){               
                this.$router.history.push(hash)
                this.curr = index
                // console.log('111')
            },
        }
    }
</script>

<style lang="less" scoped>
    span{
        font-size: 14px;
    }
    .w200{
        width: 200px;
    }
    .block{
        margin-top:20px;
        display: flex;
    }
</style>