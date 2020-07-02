<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-28 16:44:32
 * @LastEditors: 471826078@qq.com
--> 
<template>
    <div class="index">
        <main>
            <Main />
            <Slider />
        </main>
        
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Slider from '@/components/Slider.vue'
import Main from '@/components/Main.vue'

 @Component({
 components: { Slider ,Main}
 })
    
export default class Index extends Vue {

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