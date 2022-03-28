<template>
    <el-main>
        <el-row class="logo2">
            <img src="../../assets/logo.svg" alt="病毒总数" style="width: 400px;height: 80px;" />
        </el-row>
        <el-row style=" width: 300px;">
            <el-input placeholder="请输入内容" v-model="address" clearable>
                <template slot="prepend" left>目标仓库：</template>
            </el-input>
        </el-row>
        <el-row>
            <el-button @click="postID()" icon="el-icon-search" circle></el-button>
        </el-row>
    </el-main>
</template>

<script>
// Vue 代码逻辑
export default {
    data() {
        return {
            address: ''
        }
    },
    methods: {
        postID: function () {
            this.$axios.get('http://127.0.0.1:1234/post', { params: { "address": this.address } }).then(red => {
                console.log(red.data);
                alert(red.data.msg); 显示返回的值

            })
        }
    },
}
</script>
<style scoped>
.el-select .el-input {
    width: 200px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}

.el-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.el-row {
    margin: 15px;
}
.logo2 {
    margin: 50px auto 120px;
}
</style>