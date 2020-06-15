<template>
  <div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="#"  type="index" ></el-table-column>
        <el-table-column prop="标题" label="title" width="180"></el-table-column>
        <el-table-column prop="作者" label="author"></el-table-column>
        <el-table-column prop="类目"  type="category" ></el-table-column>
        <el-table-column prop="来源" label="source" width="180"></el-table-column>
        <el-table-column prop="重要性" label="star"></el-table-column>
        <el-table-column prop="发布时间" label="author"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/article/allArticle`)
        .then(res => {
          console.log(res.data);
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>