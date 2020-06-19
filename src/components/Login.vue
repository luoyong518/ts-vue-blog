<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      :label-position="`top`"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item class="container_btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import  {userLogin}  from "../api/user";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private ruleForm: object = {
    email: "",
    password: ""
  };
  private rules: object = {
    email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
    password: [{ required: true, message: "请输入登录密码", trigger: "blur" }]
  };
  public submitForm(formName: string) {
    const _ref: any = this.$refs[formName];
    _ref.validate((valid: boolean) => {
      if (valid) {
        userLogin( this.ruleForm ).then((res: any) => {
          console.log(res);
          
        });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  public resetForm(formName: string) {
    const _ref: any = this.$refs[formName];
    // eslint-disable-next-line
    _ref.resetFields();
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 300px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &_btn {
    text-align: center;
  }
}
</style>