<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 10:49:18
 * @LastEditors: 471826078@qq.com
--> 
<template>
  <div class="home">
    <Header :activeIndex='`0`' />
    <router-view class="main"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
@Component({
  components: { Header }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  mounted(){
    // this.$router.push({name:'Index'})
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
}
.main{
  height: calc(100% - 61px);
  background-color: #f0f2f7;
  overflow-y: auto;
}
</style>
