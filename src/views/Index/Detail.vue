<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-28 16:44:32
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="index">
        <main>
            <div>
                <ArticleDetail :articleInfo = 'articleInfo' />
                 <LastNext />
                 <Me />
            </div>
            
            <Slider />
        </main>
        
    </div>
</template>
<script lang="ts">
import {apiArticelQueryById} from '@/api/article'

import { Component,  Vue } from "vue-property-decorator";
import Slider from '@/components/Slider.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import LastNext from '@/components/LastAndNext.vue'
import Me from '@/components/Me.vue'


 @Component({
 components: { Slider ,ArticleDetail,LastNext,Me}
 })
    
export default class Index extends Vue {
private articleId: any = '';
private articleInfo: any = {};

    private onload(_id: string){
        apiArticelQueryById({_id}).then((res: any)=>{
            console.log(res);
            if(res.isSuccess){
                this.articleInfo = res.data
            }
        })
    }
    mounted (){
        this.articleId = this.$route.query._id
        this.onload(this.articleId)
    }
}
</script>
<style lang="scss" scoped>

main{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>