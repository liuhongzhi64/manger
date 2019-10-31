<template>
    <div class="addAccount">
        <h3>欢迎您 admin</h3>
        <p>添加和编辑会员账号。带<span>*</span>为必填</p>
        <el-tabs type="border-card">
        <el-tab-pane label="添加编辑账号">
            <p><span>*</span>真实名字：</p>
            <el-input v-model="input" clearable class="w200"></el-input> 
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>会员卡卡号：</p>
            <el-input v-model="input" clearable class="w200"></el-input> 
            <div style="margin: 20px 0;"></div>
            <p><span>*</span>用户组：</p>
            <el-select v-model="value" clearable placeholder="选择分类">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div style="margin: 20px 0;"></div>
            <p>身份证号：<el-input v-model="input" clearable class="w200"></el-input></p>
             <p>用户状态：</p>
               <template>
                <el-radio v-model="radio" label="2">启用</el-radio>
                <el-radio v-model="radio" label="1">禁用</el-radio>
                </template>
            <div style="margin: 20px 0;"></div>
            <p>手机号码：<el-input v-model="input" clearable class="w200"></el-input></p>
            <p>座机号码：<el-input v-model="input" clearable class="w200"></el-input></p>
            <p>邮箱地址：<el-input v-model="input" clearable class="w200"></el-input></p>
            <p>地区选择：
                <el-select v-model="value1" clearable placeholder="选择分类">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
                <el-select v-model="value2" clearable placeholder="选择分类">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
            </p>
            <p>详细地址：<el-input v-model="input" clearable class="w200"></el-input></p>
            <p>邮政编码：<el-input v-model="input" clearable class="w200"></el-input></p>
            <el-button type="success">添加</el-button>
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
                options: [
                    {
                    value: "选项1",
                    label: "普通会员-99%"
                    },
                    {
                    value: "选项2",
                    label: "--请选择省份--"
                    },
                    {
                    value: "选项3",
                    label: "--请选择城市--"
                    }
                ],
                value: "选项1",
                value1: "选项2",
                value2: "选项3",
            }
        }
    }
</script>

<style lang="less" scoped>
    .addAccount{
        p{
            font-size: 14px;
            span{
                color: red;
            }
        }
        .w200{
            width: 300px;
        }
    }
</style>