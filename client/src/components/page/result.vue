<template>
    <div id="result">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="grid-content bg-purple" style="float: left;">
                            <router-link to="/result/professional" class="tab-item">Professional</router-link>
                            <router-link to="/result/simple" class="tab-item">Simple</router-link>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-input placeholder="请输入内容" v-model="input1" style="width: auto;">
                                <template slot="prepend">Http://</template>
                            </el-input>
                            <el-button icon="el-icon-search" circle></el-button>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <router-link to="/start" class="tab-item">ConnectWe</router-link>
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
                    <el-menu
                        default-active="1-4-1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        :collapse="isCollapse"
                    >
                        <el-menu-item index="1" v-model="isCollapse">
                            <el-row>
                                <i class="el-icon-s-unfold" v-on:click="collapseChange"></i>
                            </el-row>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-s-marketing"></i>
                            <span>
                                <router-link to="/result/professional">总览</router-link>
                            </span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-s-order"></i>
                            <span>
                                <router-link to="/result/professional/professionDetail">细节</router-link>
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
                <el-main>
                    <keep-alive>
                        <router-view />
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
        }
    }
}
</script>
<style scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-row {
    margin-bottom: 20px;
    height: 60px;
}
.el-col {
    border-radius: 4px;
}
.div {
    background-color: aliceblue;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
}
</style>