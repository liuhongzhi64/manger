<template>
    <div class="sellStatistics">
        <h3>欢迎您 admin</h3>
        <p>数据统计。本统计使用的插件：jqPlot</p>
        <el-tabs type="border-card">
            <el-tab-pane label="销售数据统计">
                <p>时间：
                    <el-input v-model="input" clearable class="w200" placeholder="2010-02-01"></el-input>--<el-input v-model="input" clearable class="w200" placeholder="2018-02-17"></el-input>
                    <template>
                <el-select v-model="value" clearable placeholder="销售情况统计">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <span><el-button type="success" class="but">提交</el-button> </span>
            </template>
                </p>
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
                }
        }
    }
</script>

<style lang="less" scoped>
    .sellStatistics{
        p{
            font-size: 14px;
        }
        .w200{
            width: 120px;
            font-size: 12px;
        }
        .but{
            margin: 0 10px;
        }
    }
</style>