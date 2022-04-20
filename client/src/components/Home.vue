<template>
    <div id="home">
        <video src="../assets/backgroundVideo.mp4" class="bjVideo" autoplay loop muted></video>
        <el-container>
            <el-header>
                <el-menu
                    :default-active="'/index'"
                    class="NavBar"
                    router
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <router-link to="/start" class="tab-item">
                        <img
                            class="logo1"
                            src="../assets/part1.png"
                            alt="SECOP"
                            style="width: 80px;height: 80px;"
                        />
                    </router-link>

                    <el-menu-item class="first-menu">
                        <router-link to="/start" class="tab-item">START</router-link>
                    </el-menu-item>

                    <el-menu-item class="first-menu">
                        <router-link to="/result" class="tab-item">RESULT</router-link>
                    </el-menu-item>
                    <el-menu-item class="first-menu">
                        <router-link to="/about" class="tab-item">ABOUT</router-link>
                    </el-menu-item>
                    <el-menu-item class="first-menu">
                        <a
                            href="https://github.com/kerwin-yang-yang/BigPlatform"
                            target="_Blank"
                        >GITHUB</a>
                    </el-menu-item>
                    <!-- <el-submenu index="2">
                        <template slot="title">SERVICES</template>
                        <el-menu-item class="second-menu">Information</el-menu-item>
                        <el-menu-item class="second-menu">Prediction</el-menu-item>
                        <el-menu-item class="second-menu">More</el-menu-item>
                    </el-submenu>-->
                </el-menu>
            </el-header>
            <el-main>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </el-main>
            <el-footer class="bottom-footer">
                <p>© 2022 finish by bean-paste group</p>
            </el-footer>
        </el-container>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
       
    }
}
</script>

<style >
.el-container {
    min-height: 100vh;
}

a {
    text-decoration: none;
    text-decoration-color:#1d1d1d;
}

.router-link-active {
    text-decoration: none;
    color: black;
}
.bottom-footer {
    background-color: transparent;
    line-height: 30px;
    color: #8a8686;
    text-align: center;
}
.bjVideo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
}
#home {
    /* background: url("../assets/background.png") no-repeat center; */
    /* background: url("../assets/bg.webp") no-repeat center; */
    /* background-color: rgb(239, 239, 247); */

    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}

.logo1 {
    width: 60px;
    height: 60px;
    position: fixed;
    float: left;
    left: 6%;
    top: 8px;
}
.itemName {
    font-size: 15px;
    color: #cccccc;
    text-align: center;
    line-height: 60px;
    position: fixed;
    left: 9.5%;
    top: 30px;
}
.el-menu.el-menu--horizontal {
    border-bottom: 0;
    background-color: transparent;
    position: absolute;
    float: right;
    right: 5%;
    top: 15px;
}
li.el-menu-item.first-menu {
    color: #cccccc;
    font-size: 20px;
    width: 120px;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: transparent;
    color: white;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
    color: #cccccc;
    font-size: 16px;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    color: white;
}

li.el-menu-item.second-menu {
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0;
    padding: 60px 35px 15px 35px;
}
body {
    margin: 0;
}
</style>
