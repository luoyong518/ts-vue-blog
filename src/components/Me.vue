<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-07 22:45:30
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="me">
        <div class="meImg">
            <img :src="require('@/assets/images/me.jpg')" alt="">
        </div>
        <div class="meInfo">
            <div class="meInfoName">作者简介：青浅</div>

                <p class="meInfoLogo">美丽的皮囊千千万万，有趣的灵魂万里挑一</p>
                <div class="meInfoLink">
                    <img v-for="i in 5" :key="i" :src="require('@/assets/images/me.jpg')" alt="">
                </div>
           
        </div>
    </div>
</template>
<script lang="ts">
import { Component,  Vue } from "vue-property-decorator";
@Component
export default class Me extends Vue {
    
}
</script>
<style lang="scss" scoped>
.me{
    padding: 10px;
    margin-top: 15px;
    display: flex;
    background-color: #fff;
   &Img img{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    &Info{
        &Name{
            border-bottom: 1px solid #e9eaed;
            font-size: 16px;
            line-height: 30px;
        }
        &Logo{
            font-size: 14px;
            line-height: 30px;
        }
        &Link{
            display: flex;
            align-items: center;
            height: 40px;
            img{
                width: 30px;
                height: 30px;
                margin-right: 15px;
            }
        }
    }
}
</style>