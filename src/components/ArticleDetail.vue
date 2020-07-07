<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-02 23:19:30
 * @LastEditors: 471826078@qq.com
--> 
<template>
  <div class="index">
    <h2 class="indexTitle">{{articleInfo.name}}</h2>
    <div class="indexInfo">
      <div>{{formatDate(articleInfo.createDate*1000)}}</div>
      <div v-if="articleInfo.labels">分类：{{articleInfo.labels[0]}}</div>
      <div>作者：{{articleInfo.isAuthor==1?'管理员':'转载'}}</div>
      <div>阅读：({{articleInfo.readCount?articleInfo.readCount:0}})</div>
    </div>
    <div class="indexInterduce">{{articleInfo.note}}</div>
    <div v-html="articleInfo.htmlContent" class="content"></div>
  </div>
</template>
<script lang="ts">
// import marked from "marked";
import { Component, Prop, Vue } from "vue-property-decorator";
import "@/assets/css/sspai.scss";
import "@/assets/css/atom-one-dark.scss";

@Component
export default class Main extends Vue {
  @Prop() private articleInfo: any;
  //   private content = marked(this.articleInfo.content);
  private add0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  private formatDate(str: number) {
    const time = new Date(str);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const h = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return (
      year +
      "-" +
      this.add0(month) +
      "-" +
      this.add0(day) +
      " " +
      this.add0(h) +
      ":" +
      this.add0(minute) +
      ":" +
      this.add0(second)
    );
  }
  private readArticle(_id: string) {
    this.$router.push({ name: "articleDetail", query: { _id } });
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 850px;
  box-shadow: 3px 3px 3px #ccc;
  background-color: #fff;
  border-radius: 3px;
  &Title {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    margin-top: 40px;
    color: #333;
  }
  &Info {
    display: flex;
    justify-content: center;
    height: 40px;
    align-items: center;
    color: #666;
    border-bottom: 1px dashed #aaa;
    margin: 0 60px;
    div {
      margin-right: 15px;
    }
  }
  &Interduce {
    // height: 60px;
    display: flex;
    align-items: center;
    line-height: 40px;
    font-size: 14px;
    //    justify-content: center;
    padding: 20px 30px;
    text-indent: 30px;
    color: #666;
    // background-color: rgba(0,0,0,.1);
  }
}
</style>