<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-02 23:19:30
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="index">
  
    <el-breadcrumb separator="/" class="indexCrumb" v-if="$store.state.crumb.length>1">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div v-for="(item,index) in articleList" :key="index+item._id" class="indexList">
            <div class="indexListImg">
                <img :src="item.imgUrl" alt="">
                <div  class="indexListImgDate">2020-07-07</div>
            </div>
            <div class="indexListInfo">
                <div class="indexListInfoTitle"  @click="readArticle(item._id)">{{item.name}}</div>
                <p class="indexListInfoInterduce">{{item.note}}</p>
                <div class="indexListInfoCounts">
                    
                    <div  class="indexListInfoCountsLeft">
                        <span><i class="el-icon el-icon-time"></i>{{formatDate(item.createDate*1000)}}</span>
                        <span><i class="el-icon el-icon-view"></i>500</span>
                        <span><i class="el-icon el-icon-chat-square"  @click="readArticle(item._id)"></i>评论</span>
                        <span><i class="el-icon el-icon-star-on"></i>点赞</span>
                    </div>
                    <span class="indexListInfoCountsMore" @click="readArticle(item._id)">阅读全文 <i class="el-icon el-icon-arrow-right"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// import { formatDate } from './../config'
// import util from '@/util/common'
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue{
 @Prop() private articleList: any;
   private add0 = (num: number) => {
    return num < 10 ? '0' + num : num
}

private formatDate(str: number) {
    const time = new Date(str);
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const h = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    return year + '-' + this.add0(month) + '-' + this.add0(day) + ' ' + this.add0(h) + ':' + this.add0(minute) + ':' + this.add0(second)
} 
private readArticle(_id: string) {
    this.$router.push({name:'articleDetail', query:{_id}})
}
}
</script>
<style lang="scss" scoped>
.index{
     &Crumb{
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        margin-top: 10px;
    }
    width: 850px;
    // background-color: #ffffff;
    box-shadow: 3px 3px 3px #ccc;
    border-radius: 3px;
    z-index: 1;
    &List{
        margin-top: 10px;
        padding: 15px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 0;
        //幽灵按钮
        &::after{
            position: absolute;
            height: 1px;
            width: 0px;
            top: 0px;
            left: 0;
            background-color: #409Eff;
            z-index: 0;
            content: '';
             transition:  1s  .2s;
        }
        &::before{
            position: absolute;
            height: 1px;
            top: 170px;
            left: 850px;
            right: 0px;
            background-color: #409Eff;
            z-index: 0;
            content: '';
            transition:  1s  .2s;
        }
        &:hover{
            &::after{
                width: 850px;
            }
             &::before{
               left: 0;
            }
        }
        &Img{
            position: relative;
            width: 220px;
            height: 140px;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
            &Date{
                position: absolute;
                color: #fff;
                font-size: 14px;
                top: 25px;
                left: 25px;
                width: 67px;
                height: 58px;
                background-color: rgba(0,0,0,.3);
                z-index: 10;
            }
        }

        &Info{
            width: 585px;
            position: relative;
            &Title{
                height: 28px;
                line-height: 28px;
                margin-bottom: 5px;
                font-size: 18px;
                color: #666;
                 cursor: pointer;
                     &:hover{
                         color: #409eff;
                     }
            }
            &Interduce{
                width: 580px;
                height: 48px;
                line-height: 24px;
                margin-top: 16px;
                color: #aaa;
                font-size: 14px;
                text-overflow:ellipsis;
                white-space: wrap;
                overflow: hidden;
                word-wrap:break-word;
            }
            &Counts{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: space-between;
                &Left{
                    display: flex;
                    height: 20px;
                    align-items: center;
                    flex-direction: row;
                    font-size: 12px;
                    color: #bbb;
                    span{
                        margin-right: 10px;
                        cursor: pointer;
                         &:hover{
                         color: #409eff;
                     }
                    }
                }
                &More{
                     cursor: pointer;
                     &:hover{
                         color: #409eff;
                     }
                }
            }
        }
    }
}
</style>