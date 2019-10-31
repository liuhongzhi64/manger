<template>
    <div class="account">
        <h3>欢迎您 admin</h3>
        <p>会员卡用户管理</p>
        <el-tabs type="border-card">
            <el-tab-pane label="会员管理">
                <p>搜索：<el-input v-model="input" clearable class="w200"></el-input> 会员卡、会员名、电话、手机 <el-button type="success" class="but">查询</el-button></p>
            </el-tab-pane>
        </el-tabs>
                   <template>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="会员卡卡号"
                width="120">
            </el-table-column>
            <el-table-column
                prop="name"
                label="会员名字"
                width="100">
            </el-table-column>
            <el-table-column
                prop="rank"
                label="会员等级"
                width="100">
            </el-table-column>
            <el-table-column
                prop="integral"
                label="会员积分"
                width="100">
            </el-table-column>
            <el-table-column
                prop="discount"
                label="折扣"
                width="120">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="手机号"
                width="120">
            </el-table-column>
            <el-table-column
                prop="specialPlane"
                label="座机号"
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
                        date: '1111111111',
                        name: '张飞',
                        rank: '银牌会员',
                        integral:245,
                        discount:"50%",
                        phone:13547992351,
                        specialPlane:13547992351,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '1111111111',
                        name: '张飞',
                        rank: '普通会员',
                        integral:245,
                        discount:"35%",
                        phone:13547992351,
                        specialPlane:13547992351,
                        operation:'编辑|删除'
                    }, 
                    {
                        date: '1111111111',
                        name: '张飞',
                        rank: '金牌会员',
                        integral:978,
                        discount:"70%",
                        phone:13547992351,
                        specialPlane:13547992351,
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