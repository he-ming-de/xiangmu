<template>
  <div>
   <el-button type="primary">主要按钮</el-button>
    <div class="f-d-c a-i-c">
      <h2 class="m-b2">{{arr.title}}</h2>
      <div>{{arr.abstract}}</div>
      <div class="c-c f-s12">发表于：{{arr.author}}</div>
    </div>
    <el-card class="box-card m-t1">
      <div>{{arr.text}}</div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
      arr: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .post("/api/article/article", {
          _id: this.id
        })
        .then(res => {
          console.log(res.data);
          this.id = res.data;
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>