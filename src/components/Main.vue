<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-02 23:19:30
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="index">
        <div v-for="(item,index) in articleList" :key="index+item._id" class="indexList">
            <div class="indexListImg">
                <img :src="item.imgUrl" alt="">
                <div  class="indexListImgDate">2020-07-07</div>
            </div>
            <div class="indexListInfo">
                <div class="indexListInfoTitle">{{item.name}}</div>
                <p class="indexListInfoInterduce">{{item.note}}</p>
                <div class="indexListInfoCounts">
                    <div>yy-mm-dd hh:mm:ss week</div>
                    <div>
                        <span>500</span>
                        <span>评论</span>
                        <span>点赞</span>
                    </div>
                    <span>阅读全文</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Main extends Vue{
 @Prop() private articleList: any;
}
</script>
<style lang="scss" scoped>
.index{
    width: 850px;
    // background-color: #ffffff;
    box-shadow: 3px 3px 3px #ccc;
    border-radius: 3px;
    &List{
        padding: 15px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
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
            }
            &Interduce{
                width: 580px;
                height: 48px;
                line-height: 24px;
                margin-top: 16px;
                text-overflow:ellipsis;
                white-space: wrap;
                overflow: hidden;
                word-wrap:break-word;
            }
        }
    }
}
</style>