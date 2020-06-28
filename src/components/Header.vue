<template>
  <div class="contanier">
    <div class="Header">
    <div class="hidden-md-and-up Header_brunb ">
      面包屑
    </div>
    <div class="hidden-sm-and-down Header_container ">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">选项1</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div class="Header_log">
      <el-link @click="toLogin(1)">登录</el-link>
      <el-link>注册</el-link>
    </div>
    <el-drawer style="min-width:300px" title="我是标题" :visible.sync="isShow" :direction="`rtl`" :before-close="handleClose">
      <span>我来啦!</span>
      <Login />
    </el-drawer>
  </div>
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
.contanier{
  background: linear-gradient(#fff,#d4d7db);
}
.Header {
  position: relative;
  
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  &_brunb{
     height: 60px;
    line-height: 60px;
  }
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
<style>
.el-drawer{
  min-width: 300px;
}
</style>