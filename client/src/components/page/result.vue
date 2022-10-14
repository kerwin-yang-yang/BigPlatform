<template>
    <div id="result">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="grid-content bg-purple" style="float: left;height: 60px;"
                            separator-class="el-icon-arrow-right">

                            <router-link to="/result/simple" class="tab-item">exercism/python</router-link>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple" style="height: 60px;width:100%">
                            <el-input placeholder="请输入内容" v-model="address" style="width: 90%;">
                                <template slot="prepend">目标仓库：</template>
                            </el-input>
                            <router-link to="/result/simple" class="tab-item">
                                <el-button icon="el-icon-search" circle class="borderNone" @click="postID()">
                                </el-button>
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <router-link to="/start" class="tab-item">ConnectUs</router-link>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <router-link to="/start" class="tab-item">Quit</router-link>
                        </div>
                    </el-col>
                </el-row>
            </el-header>

            <el-container>
                <el-aside width="auto">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
                        @close="handleClose" :collapse="isCollapse">
                        <el-menu-item index="1" v-model="isCollapse">
                            <el-row>
                                <i class="el-icon-s-unfold" v-on:click="collapseChange"></i>
                            </el-row>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-s-marketing"></i>
                            <span>
                                <router-link to="/result/simple">总览</router-link>
                            </span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-s-order"></i>
                            <span>
                                <router-link to="/result/simple/simpleDetail">细节</router-link>
                            </span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-s-custom"></i>
                            <span>
                                <router-link to="/result/professional">社区</router-link>
                            </span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="main">
                    <keep-alive>
                        <div>Welcome</div>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>

export default {
    name: 'result',
    data() {
        return {
            isCollapse: true,
            address: '',
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        collapseChange() {
            this.isCollapse = !this.isCollapse;
        },
        postID: function () {

            this.$axios.get('http://127.0.0.1:1234/post', { params: { "address": this.address } }).then(red => {
                const loading = this.$loading({
                    lock: true,
                    text: '仓管扫描中',
                    target: '.main',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 40000);
            })

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

.el-aside {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #F5F6FA;
    color: #333;
    text-align: center;
}

.el-row {
    margin-bottom: 20px;
    height: 60px;
}

.el-col {
    border-radius: 4px;
    height: 60px;
}

.el-input__inner {
    border: none;
}

.div {
    background-color: aliceblue;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
}

.router-link-active {
    text-decoration: none;
    color: #6ae184;
}

.a:visited {
    text-decoration: none;
    color: #ad00004d;
}
</style>