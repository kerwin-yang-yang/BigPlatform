<el-row>
    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img src="~examples/assets/images/hamburger.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  
  <style>
  .time {
      font-size: 13px;
      color: #999;
  }
  
  .bottom {
      margin-top: 13px;
      line-height: 12px;
  }
  
  .button {
      padding: 0;
      float: right;
  }
  
  .image {
      width: 100%;
      display: block;
  }
  
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  </style>
  
  <script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
    }
}
</script>