<template>
    <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
        <div class="logo" :class="{'collapse-logo': isCollapse}">
            LOGO
        </div>
        <el-menu
                :default-active="onRoutes"
                class="el-menu-vertical"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#10B9D3"
                mode="vertical"
                :collapse="isCollapse"
                unique-opened
                router
        >
            <el-menu-item index="dashboard">
                <i class="fa fa-tachometer fa-fw"></i>
                <span slot="title">控制面板</span>
            </el-menu-item>
            <el-menu-item index="markdown">
                <i class="fa fa-calculator fa-fw"></i>
                <span slot="title">markdown</span>
            </el-menu-item>
            <el-menu-item index="form">
                <i class="fa fa-book fa-fw"></i>
                <span slot="title">form表单</span>
            </el-menu-item>
            <el-menu-item index="table">
                <i class="fa fa-book fa-fw"></i>
                <span slot="title">table表格</span>
            </el-menu-item>
            <el-menu-item index="tabs">
                <i class="fa fa-book fa-fw"></i>
                <span slot="title">tabs标签页</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            },
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
.fa {
    margin-right: 5px;
}
.collapse-width {
    width: 64px !important;
}
.collapse-logo {
    font-size: 18px !important;
}

.sidebar-container {
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: width 0.28s;
    z-index: 1001;
    overflow: hidden;
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 180px;
    }
    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
        overflow-y: auto;
    }
    .logo {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        text-align: center;
        background-color: rgb(48, 65, 86);
        color: #fff;
    }
}
</style>