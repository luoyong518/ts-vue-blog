<template>
  <div class="Header">
    <div class="hidden-md-and-up Header_brunb ">
      面包屑
    </div>
    <div class="hidden-md-and-down Header_container ">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div class="Header_log">
      <el-link @click="toLogin(1)">登录</el-link>
      <el-link>注册</el-link>
    </div>
    <el-drawer title="我是标题" :visible.sync="isShow" :direction="`rtl`" :before-close="handleClose">
      <span>我来啦!</span>
      <Login />
    </el-drawer>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "./Login.vue";
@Component({
  components: { Login }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private activeIndex!: string;
  private isShow = false;
  private isLogin = 1;
  public handleSelect(key: number, keyPath: []) {
    console.log(key, keyPath);
  }
  public handleClose(done: any) {
    this.$confirm("确认关闭？")
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
      });
  }
  public toLogin(index: number) {
    this.isShow = true;
    this.isLogin = index;
  }
}
</script>
<style lang="scss" scoped>
.Header {
  color: #fff;
  position: relative;
  &_container {
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }
  &_log {
    position: absolute;
    top: 0;
    right: 20px;
    height: 60px;
    line-height: 60px;
    bottom: 0;
  }
}
</style>