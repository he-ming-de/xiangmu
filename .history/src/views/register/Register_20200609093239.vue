<template>
  <div class="bos d-f j-c-c a-i-c">
    <div class="registers b-c-f p-t3 p-r3">
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (value < 11 && value > 0) {
          callback(new Error("请输入1~11位"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$router.push("/landingpage");
    },
    // resetForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert("注册成功");
    //       this.$router.push('/landingpage');
    //     } else {
    //       return false;
    //     }
    //   });
    // }
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
                this.$router.push("/landingpage");
              } else {
                this.$message.Error(res.data.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.Error("表单有误");
          password: "",
        checkPass: "",
        username: ""
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
</style>