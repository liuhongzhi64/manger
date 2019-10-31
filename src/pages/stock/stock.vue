<template>
    <div class="stocks">
        <h3>欢迎您 admin</h3>
        <p>查看和管理商品库存。</p>
        <el-tabs type="border-card">
            <el-tab-pane label="库存管理">
                <p>
                <span>分类： <template>
                <el-select v-model="value" clearable placeholder="选择分类">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span>关键字：<el-input v-model="input" clearable class="w200"></el-input>(商品名称，条形码)<el-button type="success" class="but">查询</el-button> </span>
            </template>
        </span>
        </p>
            </el-tab-pane>
        </el-tabs>

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
                prop="purchasingPrice"
                label="进价（元）"
                width="100">
            </el-table-column>
            <el-table-column
                prop="storage"
                label="入库"
                width="100">
            </el-table-column>
            <el-table-column
                prop="repertory"
                label="库存"
                width="120">
            </el-table-column>
            <el-table-column
                prop="outOfPrint"
                label="已售"
                width="120">
            </el-table-column>
            <el-table-column
                prop="operation"
                label="管理">
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
                        purchasingPrice: 20.00,
                        storage:5,
                        repertory:10,
                        outOfPrint:5,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        purchasingPrice: 20.00,
                        storage:5,
                        repertory:10,
                        outOfPrint:5,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        purchasingPrice: 20.00,
                        storage:5,
                        repertory:10,
                        outOfPrint:5,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '6911989262549',
                        name: '我的优乐美',
                        purchasingPrice: 20.00,
                        storage:5,
                        repertory:10,
                        outOfPrint:5,
                        operation:'编辑|删除'
                    }, 
                    ]
                }
            }
    }
</script>

<style lang="less" scoped>
    .stocks{
        p{
            font-size: 14px;
        }
        .w200{
            width: 200px;
        }
        .block{
        margin-top:20px;
        display: flex;
        }
    }
</style>