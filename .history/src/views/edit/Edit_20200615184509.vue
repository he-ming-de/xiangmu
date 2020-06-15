<template>
  <div>
    <div class="p-b3 d-f j-c-s-a">
      <el-button type="danger" @click="clickBack">返回</el-button>
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
            <el-option label="Vue" value="Vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Node.js" value="Node.js"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="JavaScript" value="JavaScript"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source" :rules="[{required:true}]">
          <el-select v-model="ruleForm.source" placeholder="请选择">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star" :rules="[{required:true}]">
          <el-select v-model="ruleForm.star" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" prop="date">
          <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
      </div>
      <div>
        <mavon-editor v-model="ruleForm.text" />
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
      }
    };
  },
  components: {},
  methods: {
    pub() {
      axios
        .post(`/api/article/update`, {
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
          if (res.data.success === true) {
            this.$message({
              message: '修改成功,已重新发布',
            });
            this.$router.push("/published");
          } else {
            this.$message.error("Sorry！您的文章发布失败，请重新发布");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    postData() {
      axios
        .post("/api/article/article", {
          _id: this.id,
        })
        .then(res => {
          console.log(res.data);
          this.ruleForm = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickBack(){
      this.$router.push('/published')
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.postData();
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