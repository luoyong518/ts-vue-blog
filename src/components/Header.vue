<template>
  <div class="contanier">
    <div class="Header">
      <div class="hidden-md-and-up Header_brunb">面包屑</div>

      <div class="hidden-sm-and-down Header_container">
        <div class="Header_container_log">
          <img :src="require('@/assets/images/vue.jpg')" alt />
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
          <!-- <div v-for="(item,index) in routerList" :key="index" style="float:left;height:62px">
            <el-submenu :index="index+''" :key="index" v-if="item.child">
              <template slot="title">{{item.title}}</template>
              <el-menu-item :index="index1+''" v-for="(items,index1) in item.child" :key="index1" >{{items.title}}</el-menu-item>
            </el-submenu>
             <el-menu-item :index="index+''" v-else>{{item.title}}</el-menu-item>
          </div> -->

           <el-menu-item index="0">首页</el-menu-item>
           <el-submenu index="1">
              <template slot="title">前端</template>
              <el-menu-item index="1-0">Vue</el-menu-item>
              <el-menu-item index="1-1">Css</el-menu-item>
              <el-menu-item index="1-2">Html</el-menu-item>
              <el-menu-item index="1-3">React</el-menu-item>
            </el-submenu>
           <el-menu-item index="2">Nodejs</el-menu-item>

           <el-menu-item index="3">时光机</el-menu-item>
           <el-submenu index="4">
              <template slot="title">生态</template>
              <el-menu-item index="4-0">Vue</el-menu-item>
              <el-menu-item index="4-1">Css</el-menu-item>
              <el-menu-item index="4-2">Html</el-menu-item>
              <el-menu-item index="4-3">React</el-menu-item>
            </el-submenu>
           <el-menu-item index="5">关于博客</el-menu-item>

        </el-menu>
      </div>
      <div class="Header_log">
        <el-link @click="toLogin(1)">登录</el-link>
        <el-link>注册</el-link>
      </div>
      <el-drawer
        style="min-width:300px"
        title="我是标题"
        :visible.sync="isShow"
        :direction="`rtl`"
        :before-close="handleClose"
      >
        <span>我来啦!</span>
        <Login />
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts">
import { ROUTER_CONFIG } from "@/config";
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "./Login.vue";
@Component({
  components: { Login }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private activeIndex!: string;
  private routerList: any = [];
  private isShow = false;
  private isLogin = 1;
  public handleSelect(key: number, keyPath: any) {
    console.log(key, keyPath);
    // let keyPaths = keyPath[1]
     this.$store.commit('INIT_CRUMB')
     
    if( keyPath.length == 1){
        this.$router.replace({name: this.routerList[keyPath[0]*1].name});
       
        this.$store.commit('SET_CRUMB',[this.routerList[keyPath[0]*1]])
    }else{
        const keyPaths = keyPath[1].split('-')
        // const arr = this.routerList[keyPath[0]*1]
        console.log(this.routerList[keyPaths[0]*1].child[keyPaths[1]*1]);
        
        this.$router.replace({name: this.routerList[keyPaths[0]*1].name,query:{type:this.routerList[keyPaths[0]*1].child[keyPaths[1]*1].name}})
        this.$store.commit('SET_CRUMB',[this.routerList[keyPaths[0]*1],this.routerList[keyPaths[0]*1].child[keyPaths[1]*1]])
        // this.$store.commit('SET_CRUMB',)
    }
    console.log(this.$store.state.crumb);
    
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
  public mounted() {
    this.routerList = ROUTER_CONFIG();
    console.log(ROUTER_CONFIG());
  }
}
</script>
<style lang="scss" scoped>
.contanier {
  // background: linear-gradient(#fff,#d4d7db);
  box-shadow: 3px 3px 5px #ada9a9;
}
.Header {
  position: relative;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  &_brunb {
    height: 60px;
    line-height: 60px;
  }
  &_container {
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &_log {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        height: 60px;
      }
      div {
        display: flex;
        flex-direction: column;
        // align-items: center;
        text-align: left;
        p {
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
 .el-menu-item.is-active {
    border-bottom: 2px solid #409eff;
    color: #303133;
}
.el-drawer {
  min-width: 300px;
}
</style>