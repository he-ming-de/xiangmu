<template>
  <div class="bos d-f j-c-c a-i-c">
    <div class="registers b-c-f p-t3 p-r3">
      <div class="top">欢迎来到小爱后台系统</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        username: ""
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min:6, max:15, message: "密码6~15位", trigger: "blur" }
        ],
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min:2,max:10, message: "用户名2~10位", trigger: "blur" }
        ],
        checkPass:[
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min:6, max:15, message: "密码6~15位", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$router.push("/landingpage");
    },
    resetForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(`/api/user/register`, {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("注册成功");
                this.$router.push("/landingpage");
              } else {
                this.$message.error(res.data.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("表单有误");
          return;
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bos {
  background: url("./de.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.registers {
  width: 400px;
}
.top {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>