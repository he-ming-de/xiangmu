<template>
  <div>
    <div class="nav p-t1 p-r3 p-b1">
      <el-button type="danger">查看</el-button>
      <el-button type="primary" @click="pub">发布</el-button>
    </div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="发表文章" prop="title" :rules="[{required:true}]" class="m-t2">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="abstract" :rules="[{required:true}]">
        <el-input v-model="ruleForm.abstract"></el-input>
      </el-form-item>
      <div class="d-f">
        <el-form-item label="作者" prop="author" :rules="[{required:true}]">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="category" :rules="[{required:true}]">
          <el-select v-model="ruleForm.category" placeholder="请选择">
            <el-option label="Vue" value="shanghais"></el-option>
            <el-option label="React" value="beijing"></el-option>
            <el-option label="Node.js" value="shanghai"></el-option>
            <el-option label="性能优化" value="beijinga"></el-option>
            <el-option label="JavaScript" value="shanghaiss"></el-option>
            <el-option label="小程序" value="beijings"></el-option>
            <el-option label="工具类" value="shanghaisss"></el-option>
            <el-option label="其他" value="beijingd"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source" :rules="[{required:true}]">
          <el-select v-model="ruleForm.source" placeholder="请选择">
            <el-option label="原创" value="shanghaia"></el-option>
            <el-option label="转载" value="beijingf"></el-option>
            <el-option label="与他人合作" value="shanghaid"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star" :rules="[{required:true}]">
          <el-select v-model="ruleForm.star" placeholder="请选择">
            <el-option label="1">
            <el-rate v-model="value1"></el-rate>
            </el-option>
            <el-option label="2"> <el-rate v-model="value1"></el-rate></el-option>
            <el-option label="3"> <el-rate v-model="value1"></el-rate></el-option>
            <el-option label="4"> <el-rate v-model="value1"></el-rate></el-option>
            <el-option label="5"> <el-rate v-model="value1"></el-rate></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" prop="date">
          <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
      </div>
      <div>
        <mavon-editor v-model="ruleForm.text"/>
      </div>
      <div class="m-t1 d-f j-c-c">
        <el-button type="primary" @click="pub">发布</el-button>
      </div>
    </el-form>
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
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: ""
      },
      value1: ""
    };
  },
  components: {},
  methods: {
    pub() {
      axios
        .post(`/api/article/create`, {
          title: this.ruleForm.title,
          abstract: this.ruleForm.abstract,
          author: this.ruleForm.author,
          category: this.ruleForm.category,
          source: this.ruleForm.source,
          star: this.ruleForm.star,
          text: this.ruleForm.text,
          date: this.ruleForm.date
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code === 200) {
            this.$message({
              message: res.data.data,
              type: "success"
            });
            this.$router.push('/')
          } else {
            this.$message.error("Sorry！您的文章发布失败，请重新发布");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  background: green;
  text-align: right;
}
</style>