<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-16 16:33:10
 * @LastEditors: 471826078@qq.com
 -->
<template>
  <div class="time">
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script lang="ts">
import {} from ''
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Timeing extends Vue {}
</script>