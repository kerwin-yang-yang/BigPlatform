<template>
    <el-main>
        <el-row class="logo2">
            <img src="../../assets/大创logo.png" alt="logo" style="width: 460px;height: 150px;" />
        </el-row>
        <el-row style=" width: 350px;">
            <el-input placeholder="请输入目标项目" v-model="address" clearable style="border: spx;">
                <template slot="prepend" left>目标仓库：</template>
            </el-input>
        </el-row>
        <el-row style="margin-top: 20px;">
            <!-- <router-link to="/result/simple" class="tab-item">
                <el-button @click="postID()" icon="el-icon-search" circle></el-button>
            </router-link> -->
            <el-button @click="Turn()" v-loading.fullscreen.lock="fullscreenLoading" icon="el-icon-search" circle>
            </el-button>
        </el-row>
    </el-main>
</template>

<script>
// Vue 代码逻辑
import Public from '../../public.js'
export default {
    data() {
        return {
            address: '',
            theData: '',
            fullscreenLoading: false
        }
    },
    methods: {
        postID: function () {
            this.$axios.get('http://10.133.60.67:1234/post', { params: { "address": this.address } }).then(red => {

                // this.$store.commit('saveShowData',red.data)
                this.$store.dispatch('saveShowDataAction', red.data);

                console.log(this.$store.state.showData)
                const loading = this.$loading({
                    lock: true,
                    text: '仓管扫描中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.8)'
                });
                setTimeout(() => {
                    loading.close();

                }, 5000);

            })
        },
        Turn() {
            this.fullscreenLoading = true;
            const timejump = 30;
            if (!this.timer) {
                this.count = timejump;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= timejump) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        this.fullscreenLoading = false;
                        //跳转的页面写在此处
                        this.$router.push({ path: '/result/simple' });
                    }
                }, 100)
            }

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
    margin: 20px;
}

.logo2 {
    margin: 50px auto 30px;
}
</style>