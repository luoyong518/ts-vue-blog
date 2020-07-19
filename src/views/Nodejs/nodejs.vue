<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-16 16:28:54
 * @LastEditors: 471826078@qq.com
 -->
<template>
  <div class="node">
  
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
export default class nodejs extends Vue {
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
main {
  width: 1200px;
  margin: 0 auto;
  display: -webkit-flex;
  display: -ms-flex; /* 兼容IE */
  display: flex;
  justify-content: space-between;
}
</style>