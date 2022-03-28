<template>
    <el-container>
        <el-main>
            <el-row el-row :gutter="12">
                <el-col :span="9">
                    <el-card shadow="always">总是显示</el-card>
                </el-col>
                <el-col :span="5">
                    <el-card shadow="hover">鼠标悬浮时显示</el-card>
                </el-col>
                <el-col :span="5">
                    <el-card shadow="never">从不显示</el-card>
                </el-col>
                <el-col :span="5">
                    <el-card shadow="never">从不显示</el-card>
                </el-col>
            </el-row>
            <el-row el-row :gutter="12">
                <el-col :span="16">
                    <el-card shadow="never" class="echart" id="mychart" :style="myChartStyle"></el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="never" style="height: 320px;background-color:aquamarine;">blue</el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import * as echarts from "echarts";
export default {
    data() {
        return {
            xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //横坐标
            yData: [23, 24, 18, 25, 27, 28, 25], //人数数据
            taskDate: [10, 11, 9, 17, 14, 13, 14],
            myChartStyle: { float: "left", width: "100%", height: "320px" } //图表样式
        };
    },
    mounted() {
        this.initEcharts();
    },
    methods: {
        initEcharts() {
            // 多列柱状图
            const mulColumnZZTData = {
                xAxis: {
                    data: this.xData
                },
                // 图例
                legend: {
                    data: ["人数", "任务数"],
                    top: "0%"
                },
                yAxis: {},
                series: [
                    {
                        type: "bar", //形状为柱状图
                        data: this.yData,
                        name: "人数", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    },
                    {
                        type: "bar", //形状为柱状图
                        data: this.taskDate,
                        name: "任务数", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    }
                ]
            };
            const myChart = echarts.init(document.getElementById("mychart"));
            myChart.setOption(mulColumnZZTData);
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }
    }
};
</script>
<style scoped>
.el-header {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 20px 20px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>