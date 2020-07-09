<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-07 23:19:30
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="preNext">
        <div>上一篇:{{preArticle.name}}</div>
        <div v-if='!nextArticle'>已经是最后一篇文章！</div>
        <div v-else>下一篇:{{nextArticle.name}}</div>
    </div>
</template>
<script lang="ts">
import {apiArticelQueryLast} from '@/api/article'
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LastAndNext extends Vue{
 private articleId: any = '';
 private preArticle: any = {};
 private nextArticle: any = {};


 private onload(_id: string){
     apiArticelQueryLast({_id}).then((res: any)=>{
         if(res.isSuccess){
             this.preArticle = res.data.last;
             this.nextArticle = res.data.pre
         }
     })
 }
 private mounted(){
     this.articleId = this.$route.query._id+''
     this.onload(this.articleId)
 }
}
</script>
<style lang="scss" scoped>
.preNext{
    margin-top: 10px;
    line-height: 40px;
    padding: 10px 30px;
    background-color: #fff;
    div{
        font-size: 14px;
        cursor: pointer;
        &:hover{
            color: #409eff;
        }
    }
}
</style>