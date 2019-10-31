<template>
    <div class="account">
        <h3>欢迎您 admin</h3>
        <p>查看所有管理员账号</p>
        <el-tabs type="border-card">
            <el-tab-pane label="账号管理">
            </el-tab-pane>
        </el-tabs>
            <template>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="用户名称"
                width="300">
            </el-table-column>
            <el-table-column
                prop="name"
                label="用户组"
                width="300">
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
            <el-button size="small" round>尾页</el-button>
        </div>
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
                        date: 'admin',
                        name: '超级管理员',
                        operation:'编辑|删除'
                    }, 
                    ]
            }
        }  
    }
</script>

<style lang="less" scoped>
    .account{
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