<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-06-19 10:49:18
 * @LastEditors: 471826078@qq.com
--> 
<template>
  <div class="home">
    <Header :activeIndex='`1`'/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
@Component({
  components: { Header }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
