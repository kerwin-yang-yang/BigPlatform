<template>
<el-container>
<el-main>
  <el-row :gutter="20" style="height:200px">
  <el-col :span="8"><el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
  <div style="padding-left: 16px;
    padding-top: 16px;
    color: #202d40;
    font-size: 14px;
    font-weight: 500;
    height: 20px;
    letter-spacing: 0;">质量评分</div>
  <div>75</div></el-card>
  </el-col>
  <el-col :span="16"><el-card shadow="hover" :body-style="{ padding: '0px', height: '180px' }">
  <div >质量评分</div>
  <div>75</div></el-card></el-col>
  
</el-row>

  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </el-main>
</el-container>


</template>
<script>export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
<style scoped>
.el-header {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  } 
  .el-main {
    background-color: #F5F6FA;
    color: #333;
    text-align: center;

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

</style>