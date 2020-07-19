<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-15 17:11:03
 * @LastEditors: 471826078@qq.com
 -->
<template>
  <div class="web">
  
    <main>
      <Main :articleList="articleList" />
      <Slider />
    </main>
  </div>
</template>
<script lang="ts">
import { apiArticelQuery } from "@/api/article";

import { Component, Vue } from "vue-property-decorator";
import Slider from "@/components/Slider.vue";
import Main from "@/components/Main.vue";

@Component({
  components: { Slider, Main }
})
export default class Index extends Vue {
  private articleList: any[] = [];
  private onload() {
    apiArticelQuery({}).then((res: any) => {
      console.log(res);
      if (res.isSuccess) {
        this.articleList = res.data;
      }
    });
  }
  mounted() {
    this.onload();
  }
}
</script>
<style lang="scss" scoped>
.web{
   
}
main {
  width: 1200px;
  margin: 0 auto;
  display: -webkit-flex;
  display: -ms-flex; /* 兼容IE */
  display: flex;
  justify-content: space-between;
}
</style>