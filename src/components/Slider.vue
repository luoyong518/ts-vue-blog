<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-02 22:54:00
 * @LastEditors: 471826078@qq.com
--> 
<template>
  <div class="silder">
    <div class="interduce">
      <div class="interduceTitle">博客简介</div>
      <div></div>
      <div class="interduceInfo"></div>
    </div>
    <div class="updateList">
      <div class="updateListTitle sliderTitle">
        <label>最新跟新</label>
      </div>
      <div class="updateListBox">
        <div v-for="(item,index) in articleList" :key="index" class="updateListContent">
          <img :src="item.img" alt class="updateListContentImg" />
          <div class="updateListContentInfo">
            <p class="updateListContentInfoTitle">{{item.title}}</p>
            <div class="updateListContentInfoLikes">
              <span class="date">{{item.createDate}}</span>
              <span class="like">
                <i class="el-icon el-icon-eye"></i>
                {{item.lookCounts}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 标签 -->
    <div class="labels">
      <div class="labelsTitle sliderTitle">
        <label>热门标签</label>
      </div>
      <div class="labelsBox">
        <div v-for="(item,index) in linkList" :key="index" class="labelsBoxList">{{item.title}}</div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <div class="commentTitle sliderTitle">
        <label>评论列表</label>
      </div>
      <div class="commentBox">
        <div class="commentBoxList" v-for="(item,index) in commentList" :key="index">

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import imgurl =
@Component({})
export default class HelloWorld extends Vue {
  private articleList: any[] = [
    {
      id: 1,
      title: "喂喂喂喂喂喂喂喂我问问 呜呜呜呜吾问无为谓呜呜呜呜",
      img: require("@/assets/images/vue.jpg"),
      createDate: "2020-07-02",
      lookCounts: 5
    },
    {
      id: 2,
      title: "喂喂喂喂喂喂喂喂我问问 呜呜呜呜吾问无为谓呜呜呜呜",
      img: require("@/assets/images/vue.jpg"),
      createDate: "2020-07-02",
      lookCounts: 5
    }
  ];
  private linkList: any[] = [
    { id: 1, title: "百度", url: "http://www.baidu.com" },
    { id: 2, title: "百度", url: "http://www.baidu.com" },
    { id: 3, title: "百度", url: "http://www.baidu.com" },
    { id: 4, title: "百度", url: "http://www.baidu.com" },
    { id: 5, title: "百度", url: "http://www.baidu.com" },
    { id: 6, title: "百度", url: "http://www.baidu.com" }
  ];
  private commentList: any[] = [
    { id: 1, }
  ]
}
</script>
<style lang="scss" scoped>
.silder {
  background-color: #f0f2f7;
  width: 340px;
  box-shadow: 3px 3px 3px #ccc;
  border-radius: 4px;

  .sliderTitle {
    border-bottom: 1px solid #eee;
    label {
      display: inline-block;
      line-height: 44px;
      height: 44px;
      border-bottom: 2px solid aqua;
    }
  }
  //跟新列表
  .updateList {
    margin-top: 15px;
    padding-bottom: 15px;
    background-color: #fff;

    &Box {
      padding: 0 15px;
    }
    &Content {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      &:last-child {
        border-color: transparent;
      }
      &Img {
        width: 105px;
        height: 65px;
      }
      &Info {
        width: 190px;
        &Title {
          width: 100%;
          height: 42px;
          line-height: 20px;
          margin-left: 0;
          text-overflow: ellipsis;
          font-size: 14px;
        }
        &Likes {
          color: #999;
          height: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  }
  .labels {
    margin-top: 15px;
    // padding-bottom: 15px;
    background-color: #fff;
    &Box {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &List {
        // flex: 1;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #f0f2f7;
        color: #999;
        &:hover {
          background-color: aqua;
          color: #fff;
        }
      }
    }
  }
  // 
  .comment{
     margin-top: 15px;
    background-color: #fff;
  }
}
</style>
