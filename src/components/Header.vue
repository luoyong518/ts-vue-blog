<template>
  <div class="contanier">
    <div class="Header">
    <div class="hidden-md-and-up Header_brunb ">
      面包屑
    </div>
  
    <div class="hidden-sm-and-down Header_container ">
      <div class="Header_container_log">
        <img :src="require('@/assets/images/vue.jpg')" alt="">
        <div>
           <p>关注前端开发</p>
           <p>html5、Vue、React、Node</p>
        </div>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">前端开发</el-menu-item>
        <el-menu-item index="3">时光机</el-menu-item>
        <el-menu-item index="4">作品连接</el-menu-item>
        <!-- <el-menu-item index="5">生态</el-menu-item> -->
         <el-submenu index="5">
            <template slot="title">生态</template>
            <el-menu-item index="2-1">Vue+Ts版本</el-menu-item>
            <el-menu-item index="2-1">Vue3.0版本</el-menu-item>
            <el-menu-item index="2-2">Vue+Nuxt.js版本</el-menu-item>
            <el-menu-item index="2-3">React版本</el-menu-item>
            <el-menu-item index="2-3">React+Next.js版本</el-menu-item>
         </el-submenu>
        <el-menu-item index="6">关于博客</el-menu-item>
        <!-- <el-menu-item index="7">作品连接</el-menu-item> -->
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
  // background: linear-gradient(#fff,#d4d7db);
  box-shadow: 3px 3px 5px #ada9a9;
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
    justify-content: space-between;
    &_log{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        height: 60px;
      }
      div{
        display: flex;
        flex-direction: column;
        // align-items: center;
        text-align: left;
        p{
          padding-left: 20px;
          text-align: left;
          line-height: 24px;
          color: #bbb;
        }
      }
    }
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