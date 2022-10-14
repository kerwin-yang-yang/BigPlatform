<template>
  <el-container>
    <el-main>
      <el-row el-row :gutter="12" v-if="demo">
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
            <!-- <el-row :gutter="20">
              <el-col :span="12">
                <div style="padding-top: 30px;padding-left: 30px;">
                  <el-progress type="circle" :percentage="70" status="success"></el-progress>
                </div>
              </el-col> -->
            <!-- <el-col :span="12"> -->
            <el-row el-row :gutter="10">
              <el-col :span="14">
                <div style="margin-top: 18%;">
                  <span style="font-size: 20px">代码重复率</span>
                  <div style="font-size: 40px;height: 50%; color:#6ae184">{{
                  demo.overview_of_scanner.info_of_code_check.rate_of_code_repetition }}</div>
                </div>

              </el-col>

              <!-- <el-divider></el-divider> -->
              <el-col :span="10" class="description">

                <div style="margin-top: 50px;"> <i class="iconfont icon-xiangmu " style="font-size:30px"></i></div>
              </el-col>
            </el-row>
            <!-- <div style=" width: 100%;display: inline-block;text-align: center;line-height: 20px;padding-top: 35px;">
              <div>
                代码重复率:
                <span style="font-size: 60px;">70</span>
              </div>
              <el-divider id="one">
                <i class="el-icon-mobile-phone"></i>
              </el-divider>
              <span>描述:项目安全量化总分数</span>
              <div><i class="el-icon-mobile-phone"></i></div>
            </div> -->
            <!-- </el-col> 
             </el-row> -->
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
            <el-row el-row :gutter="10">
              <el-col :span="10">
                <div style="margin-top: 25%;">
                  <span style="font-size: 20px">致命</span>
                  <div style="font-size: 40px;height: 50%;color:#ff9898">{{
                  demo.overview_of_scanner.info_of_code_check.vulnerability.num_of_deadly_level }}</div>
                </div>

              </el-col>
              <el-col :span="4">

              </el-col>
              <!-- <el-divider></el-divider> -->
              <el-col :span="10" class="description">

                <div style="margin-top: 50px;">
                  <el-col :span="4"> <i style="font-size:33px" class="iconfont icon-bug"></i></el-col>
                </div>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
            <el-row el-row :gutter="10">
              <el-col :span="10">
                <div style="margin-top: 25%;">
                  <span style="font-size: 20px">错误</span>
                  <div style="font-size: 40px;height: 50%;color:#fdc941">{{
                  demo.overview_of_scanner.info_of_code_check.vulnerability.num_of_error_level }}</div>
                </div>

              </el-col>
              <el-col :span="4">

              </el-col>
              <!-- <el-divider></el-divider> -->
              <el-col :span="10" class="description">

                <div style="margin-top: 50px;"><i style="font-size:33px"
                    class="iconfont icon-rc-icon-contribution-statistics"></i></div>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
            <el-row el-row :gutter="10">
              <el-col :span="10">
                <div style="margin-top: 25%;">
                  <span style="font-size: 20px">警告</span>
                  <div style="font-size: 40px;height: 50%;color:#6293ef">{{
                  demo.overview_of_scanner.info_of_code_check.vulnerability.num_of_warning_level }}</div>
                </div>

              </el-col>
              <el-col :span="4">

              </el-col>
              <!-- <el-divider></el-divider> -->
              <el-col :span="10" class="description">

                <div style="margin-top: 50px;"><i class="iconfont icon-licenseicon " style="font-size:30px"></i></div>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
      </el-row>
      <el-table :data="demo.overview_of_scanner.cyclomatic_complexity" style="width: 100%"
        :row-class-name="tableRowClassName" :cell-style="styleBack">
        <el-table-column label="圈复杂度">
          <el-table-column prop="name" label="函数名" width="180">
            <template slot-scope="scope">

              <span>{{scope.row.function}}</span>

            </template>
          </el-table-column>
          <el-table-column prop="name" label="文件" width="180">
            <template slot-scope="scope">

              <span>{{scope.row.file}}</span>

            </template>
          </el-table-column>
          <el-table-column prop="address" label="圈复杂度">
            <template slot-scope="scope">

              <span>{{scope.row.complexity}}</span>

            </template>
          </el-table-column>
          <el-table-column prop="address" label="状态">
            <template slot-scope="scope">

              <span>{{scope.row.state}}</span>

            </template>
          </el-table-column>
          <!-- <el-table-column prop="address" label="建议">


            <span>圈复杂度大说明程序代码可能质量低且难于测试和维护，根据经验，程序的可能错误和高的圈复杂度有着很大关系。</span>


          </el-table-column> -->
        </el-table-column>
      </el-table>
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
      demo: '',

    };


  },
  mounted() {

    this.getJsonInfo();
    this.timer = setTimeout(this.initEcharts, 300)
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    styleBack({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 3 && row.state == '需要关注') {
        return { color: "rgb(203, 107, 11)" };
      } else if (columnIndex == 3 && row.state == '急需处理') {
        return { color: "rgb(247, 100, 105)" };
      }
    },
    initEcharts() {
      // 多列柱状图

      const mulColumnZZTData = {
        xAxis: [{
          type: 'category',
          data: this.xData_1,
          axisLabel: {
            show: this.choice[0],
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#91cc75'
            }
          }
        },
        {
          type: 'category',
          data: this.xData_2,
          position: 'bottom',
          offset: 15,
          axisTick: {
            show: false
          },
          "axisLine": {     //x轴坐标轴
            "show": false
          },
          axisLabel: {
            show: this.choice[1],
            interval: 0
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#5470c6'
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
            data: [this.demo.contributors.contributors[0].historical_contributions, this.demo.issue.each_label_info[9].amount, this.demo.issue.each_label_info[1].amount, this.demo.issue.each_label_info[28].amount, this.demo.pull_request.num_of_branch, this.demo.pull_request.num_of_version, this.demo.issue.each_label_info[5].amount],
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
              [this.demo.contributors.num_of_contributors, this.demo.dependency.num_of_dependency, this.demo.issue.num_of_issue, this.demo.liveness.num_of_star, this.demo.liveness.num_of_fork, this.demo.liveness.num_of_watch, this.demo.pull_request.num_of_pr]
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


    },

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
  flex-direction: column;
  /* 按照列column(垂直方向)排列*/
  font-size: 13px
}

.el-table .warning-row {
  background: rgb(110, 84, 34);
}

.el-table .success-row {
  background: #56ce15;
}

.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}

.el-card {

  height: 140px;
  transition: all .5s;
}

.el-card:hover {
  margin-top: -5px;
}

.el-divider {
  margin: 10px 0px
}

.title {
  font-weight: bolder;
  font-size: 14px;
  line-height: 10px
}

.p {
  display: inline-block;
  width: 100%;
  margin-top: 0px;
  height: 20px
}

#one {
  margin: 24px 0px
}

.description {
  padding-left: 30px;
  font-weight: bolder;
}

.description>div+div {
  color: #6ae184;
  font-size: 12px
}

.description>div+div:nth-child(3) {
  color: yellow
}
</style>