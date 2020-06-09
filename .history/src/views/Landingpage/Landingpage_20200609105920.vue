<template>
  <div class="bos d-f j-c-c a-i-c">
    <div class="landing b-c-f p-t3 p-r3">
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
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
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
        username: ""
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(`/api/user/login`, {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              // if (res.data.code === 200) {
              //   this.$message.success("登录成功");
              //   this.$router.push("/");
              // } else {
              //   this.$message.error(res.data.message);
              // }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("登录失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$router.push("/Register");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bos {
  background: url("./zu.gif") no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.landing {
  width: 400px;
}
.top {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>