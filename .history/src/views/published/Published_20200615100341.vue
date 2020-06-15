<template>
  <div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="#"  type="index" ></el-table-column>
        <el-table-column prop="标题" label="ruleForm.title" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
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