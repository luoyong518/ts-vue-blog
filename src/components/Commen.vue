<!--
 * @Author: luoyong/471826078@qq.com
 * @Date: 2020-07-08 17:20:33
 * @LastEditors: 471826078@qq.com
 -->
<template>
  <div class="commen">
    <div class="commenCount">
        <p> 共{{commenCount}}条评论关于{{articleTitle}}</p>
       
        </div>
    <div class="commenForm">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        :label-position="`top`"
        class="commenFormBox"
      >
        <p>发表评论</p>
        <p>电子邮件不回被公开。必填项已用<span style="color:red">*</span>标记</p>
        <el-form-item label="内容" prop="commen"  class="whiteBg">
          <el-input type="textarea" v-model="ruleForm.commen"></el-input>
          <p>来点内容吧！</p>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="昵称" prop="nickName"  class="whiteBg">
              <el-input v-model="ruleForm.nickName"></el-input>
              
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email"  class="whiteBg">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="网址" prop="netAddress"  class="whiteBg">
              <el-input v-model="ruleForm.netAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" >
            <el-form-item label="密码" prop="defaultPassword"  class="whiteBg">
              <el-input v-model="ruleForm.defaultPassword"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form class="btnBox">
          <el-button type="primary" round="" @click="submitForm('ruleForm')">提交评论</el-button>
        </el-form>
      </el-form>
    </div>
    <div class="commenBox">
      <div v-if="commenList.length" class="commenBoxList">
          <div class="commenLists" v-for="(item,index) in commenList" :key="index+item._id">
              <img class="avatar" :src="item.userInfo.avatar" alt="">
              <p class="name">{{item.userInfo.name}}</p>
              <p class="info"><span></span>{{item.content}}</p>
              <p class="times">{{formatDate(item.createDate*1)}}</p>
          </div>
      </div>
      <div v-else class="commenBoxNo"><el-button type="warning">暂无数据！</el-button> </div>
    </div>
  </div>
</template>
<script lang="ts">
interface Forms {
  commen: string;
  nickName: string;
  email: string;
  netAddress: string;
  defaultPassword: string;
}
import { getCommenById, addCommen } from "@/api/commen";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Commen extends Vue {
  @Prop() private commenCount!: number;
  @Prop() private articleTitle!: string;
  private articleId: any = "";
  private commenList: any = [];
  private ruleForm: Forms = {
    commen: "",
    nickName: "",
    email: "",
    netAddress: "",
    defaultPassword: "123456"
  };
  private rules: any = {
    commen: [
      { required: true, message: "请输入留言", trigger: "blur" },
      { min: 3, message: "至少输入3个字符", trigger: "blur" }
    ],
    nickName: [{ required: true, message: "请输入昵称", trigger: "blur" }],
    email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
    defaultPassword: [
      { required: true, message: "请输入密码", trigger: "blur" }
    ]
  };
    private add0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  private formatDate(str: number) {
    const time = new Date(str);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const h = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return (
      year +
      "-" +
      this.add0(month) +
      "-" +
      this.add0(day) +
      " " +
      this.add0(h) +
      ":" +
      this.add0(minute) +
      ":" +
      this.add0(second)
    );
  }
  private mounted() {
    this.articleId = this.$route.query._id;
    this.onload(this.articleId);
  }
  private submitForm(formName: any) {
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        const {
          commen,
          nickName,
          email,
          netAddress,
          defaultPassword
        } = this.ruleForm;
        addCommen({
          articleId: this.articleId,
          name: nickName,
          email,
          recoveryId: "",
          netAddress,
          password: defaultPassword,
          content: commen
        }).then((res: any) => {
          if (res.isSuccess) {
            this.onload(this.articleId);
            this.$message({
              type: "success",
              message: res.message
            });
          }
        });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  private onload(articleId: string) {
    getCommenById({ articleId }).then((res: any) => {
      if (res.isSuccess) {
        this.commenList = res.data;
        // this.$message({
        //   type: "success",
        //   message: res.message
        // });
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.commen{
    margin-top: 15px;
    &Count{
        background-color: #fff;
        text-align: center;
        padding: 10px;
        p{
            line-height: 40px;
            font-size: 16px;
            background-color: #f0f2f7;
            color: #666;
            font-weight: 500;
        }
    }
    &Form{
        margin-top: 15px;
        background-color: #fff;
        padding: 10px;
        &Box{
            padding: 10px;
            background-color: #f0f2f7;
            p{
                line-height: 30px!important;
            }
            .whiteBg{
                padding-left: 10px;
            }
           >>> label{
                height: 26px!important;
                line-height: 26px!important;
                padding: 0;
            }
           
        }
        .btnBox{
            text-align: center;
            .el-button{
                width: 200px;
            }
        }
    }
    &Box{
        background-color: #fff;
        &No{
            padding: 40px;
            text-align: center;
        }
        &List{
            background-color: #fff;
            .commenLists{
                background-color: #f0f2f7;
                margin-left: 100px;
                margin-bottom: 20px;
                position: relative;
                padding: 10px 10px 10px 50px;
                .avatar{
                    position: absolute;
                    top: 10px;
                    left: -30px;
                    border-radius: 5px;
                    width: 60px;
                    height: 60px;
                     
                }
                .name{
                    height: 28px;
                    line-height: 28px;
                }
                .info{
                    margin: 10px 0;
                    line-height: 20px;
                    font-size: 14px;
                    color: #999;
                }
                .times{
                    height: 22px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #999;
                }
            }
        }
    }
}
/deep/ .el-form--label-top .el-form-item__label{
                padding: 0!important;
            }
</style>