<template>
  <div>
    <div class="nav p-t1 p-r3 p-b1">
      <el-button type="danger">查看</el-button>
      <el-button type="primary">发布</el-button>
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
            <el-option label="Vue" value="shanghai"></el-option>
            <el-option label="React" value="beijing"></el-option>
            <el-option label="Node.js" value="shanghai"></el-option>
            <el-option label="性能优化" value="beijing"></el-option>
            <el-option label="JavaScript" value="shanghai"></el-option>
            <el-option label="小程序" value="beijing"></el-option>
            <el-option label="工具类" value="shanghai"></el-option>
            <el-option label="其他" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类目" prop="category" :rules="[{required:true}]">
          <el-select v-model="ruleForm.category" placeholder="请选择">
            <el-option label="原创" value="shanghai"></el-option>
            <el-option label="转载" value="beijing"></el-option>
            <el-option label="与他人合作" value="shanghai"></el-option>
          </el-select>
          </el-form-item>
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
    // getdata(){
    //     axios.post("/api/article/create",{
    //         title:this.ruleForm.title
    //     })
    // }
  },
  mounted() {},
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