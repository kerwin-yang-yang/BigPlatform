<template>
    <el-container  >
        <el-main>
            <el-row el-row :gutter="12" v-if="demo.basic">
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div style="padding-top: 30px;padding-left: 30px;">
                                    <el-progress type="circle" :percentage="75" status="success"></el-progress>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div
                                    style=" width: 100%;display: inline-block;text-align: center;line-height: 20px;padding-top: 35px;"
                                >
                                    <span>
                                        总分数:
                                        <span style="font-size: 60px;">75</span>
                                    </span>
                                    <el-divider id="one">
                                        <i class="el-icon-mobile-phone"></i>
                                    </el-divider>
                                    <span>描述:项目安全量化总分数</span>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
                      <div class="title"><p>Vitality</p></div>
                       <el-divider></el-divider>
                       <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-xingxing" ></i> </el-col><el-col :span="20" class="description"><div> Star</div> <div>  {{ demo.liveness.num_of_star }}</div></el-col></el-row>
                       <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-fork"></i> </el-col><el-col :span="20" class="description"><div> Fork</div> <div>   {{ demo.liveness.num_of_fork }}</div></el-col></el-row>
                       <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-watch"></i> </el-col><el-col :span="20" class="description"><div> Watch</div> <div>   {{ demo.liveness.num_of_watch }}</div></el-col></el-row>
                       
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
                    <div class="title"><p> Issue</p></div>
                     <el-divider></el-divider>
                     <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-issue" ></i></el-col><el-col :span="20" class="description"><div> Issue_number:</div> <div>  {{ demo.issue.num_of_issue }}</div></el-col></el-row>
                    <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-bug"></i></i></el-col><el-col :span="20" class="description"><div>bug_issue:</div> <div>{{ demo.issue.each_label_info[1].amount }}</div> </el-col></el-row>
                     <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-enhance"></i></el-col><el-col :span="20" class="description"><div>enhance_issue</div> <div>{{ demo.issue.each_label_info[9].amount  }}</div></el-col></el-row>
                
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
                     <div class="title"><p>pull-request</p></div>
                      <el-divider></el-divider>
                         
                         <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-git-pull-request"></i></el-col><el-col :span="20" class="description" ><div> pr_number</div> <div>   {{ demo.pull_request.num_of_pr }}</div></el-col></el-row>
                          <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-Branches"></i></el-col><el-col :span="20" class="description" ><div> branch_number</div> <div>   {{ demo.pull_request.num_of_branch }}</div></el-col></el-row>
                           <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-versions"></i></el-col><el-col :span="20" class="description" ><div> Version_change</div> <div>   {{ demo.pull_request.num_of_version }}</div></el-col></el-row>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
                    <div class="title"><p> contributors</p></div>
                     <el-divider></el-divider>
                     <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-ic-gongxianrenyuan "></i> </el-col><el-col :span="20" class="description"><div> People</div> <div>  {{ demo.contributors.num_of_contributors }}</div></el-col></el-row>
                     <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-person"></i></el-col><el-col :span="20" class="description"><div> MostOne</div> <div>  {{ demo.contributors.contributors[0].contributor_name }}</div></el-col></el-row>
                     <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-rc-icon-contribution-statistics"></i></el-col><el-col :span="20" class="description" ><div> Contributions</div> <div>   {{ demo.contributors.contributors[0].historical_contributions }}</div></el-col></el-row>

                    </el-card>
                </el-col>
            </el-row>
            <el-row el-row :gutter="12" >
                <el-col :span="16">
                    <el-card
                        shadow="never"
                        class="echart"
                        id="mychart"
                        :style="myChartStyle"
                        style="width:auto"
                    ></el-card>
                </el-col>
                <el-col :span="8" >
                    <el-card shadow="never" style="height: 320px;background-color:#FFFFFF;">
                    <p ><i class="iconfont icon-xiangmu " style="font-size:30px"></i></p>
                    <p class="title">{{demo.basic.repo_name}}</p>
                     <el-divider ></el-divider>
 
                    
                    <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-licenseicon " style="font-size:30px"></i></el-col><el-col :span="20" class="description" > <div style="line-height:30px">  {{demo.basic.license}}</div></el-col></el-row>
                    <el-row el-row :gutter="12" ><el-col :span="4"> <i class="iconfont icon-shuju  " style="font-size:30px"></i></el-col><el-col :span="20" class="description" > <div style="line-height:30px"> {{demo.basic.language}}</div></el-col></el-row>
                    <div style="border: 2px solid #73AD21;border-radius: 25px;"><div class="title">项目描述</div>
                    <div>{{demo.description}}</div></div>
                    
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
import Public from '../../../public.js'
export default {
    data() {
        return {
            xData_1: ["Contributor", "RelyOn", "Issue", "Star", "Fork", "Watch", "PullRequest"], //横坐标
            xData_2: ["MostContribute", "EnhanceIssue", "BugIssue", "new exercise", "Branch", "Version", "discussion"], //横坐标
            

            myChartStyle: { float: "left", width: "100%", height: "320px" }, //图表样式
            choice:[1,1],
            demo: ''


        };


    },
    mounted() {

        this.getJsonInfo();
        this.timer=setTimeout(this.initEcharts,300)  
    },
     beforeDestroy() {
        clearTimeout(this.timer);
    },
    methods: {
        initEcharts() {
            // 多列柱状图
            
            const mulColumnZZTData = {
                xAxis: [{
                    type:'category',
                    data: this.xData_1,
                    axisLabel:{
					show: this.choice[0],
                     interval:0
				},
                    axisLine:{
                        lineStyle:{
                            color:'#91cc75'
                        }
                    }
                },
                {
                    type:'category',
                    data:this.xData_2,
                     position: 'bottom',
                     offset: 15,
                     axisTick:{
                        show: false
                    },
                   "axisLine":{     //x轴坐标轴
					"show":false
				},
				axisLabel:{
					show: this.choice[1],
                    interval:0
				},
                    axisLine:{
                         show:false,
                        lineStyle:{
                            color:'#5470c6'
                        }
                    }
                }
                ],
                // 图例
                legend: {
                    data: ["1", "2"],
                    top: "0%",
                   
                },
                yAxis: {},
                series: [
                    {
                        type: "bar", //形状为柱状图
                        data: [this.demo.contributors.contributors[0].historical_contributions,this.demo.issue.each_label_info[9].amount,this.demo.issue.each_label_info[1].amount,this.demo.issue.each_label_info[28].amount,this.demo.pull_request.num_of_branch,this.demo.pull_request.num_of_version,this.demo.issue.each_label_info[5].amount],
                        name: "1", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    },
                    {
                        type: "bar", //形状为柱状图
                        data: 
            [this.demo.contributors.num_of_contributors,this.demo.dependency.num_of_dependency,this.demo.issue.num_of_issue,this.demo.liveness.num_of_star,this.demo.liveness.num_of_fork,this.demo.liveness.num_of_watch,this.demo.pull_request.num_of_pr]
        ,
                        name: "2", // legend属性
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
            
        },
        getJsonInfo() {
            this.$axios.get('../../../../static/data/exercism-python.json').then((res) => {
                this.demo = res.data 
                console.log(this.demo) //打印看看数据吧
            })
            // this.demo=this.$store.state.showData;
    //         setTimeout(() => {
    //   // 提交同步    
    //           this.data=this.$store.state.showData
    //         console.log(this.data) 
    //         }, 300)
           
          
        }
    }

};
</script>
<style scoped>
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;

    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    flex-direction: column; /* 按照列column(垂直方向)排列*/
    font-size:13px
}
.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
}

  .el-card {
   
    height:180px;
    transition: all .5s;
  }
  .el-card:hover{
    margin-top: -5px;
  }

.el-divider {
    margin:10px 0px
}
.title{
    font-weight :bolder;
 font-size:14px;
    line-height:10px
}
.p{
    display:inline-block;
    width:100%;
    margin-top:0px;
    height:20px
}
#one {
    margin:24px 0px
}
.description{
    padding-left:30px;
    font-weight :bolder;
}
.description>div+div {
    color:#6ae184;
    font-size:12px
}
.description>div+div:nth-child(3) {
    color:yellow
}
</style>