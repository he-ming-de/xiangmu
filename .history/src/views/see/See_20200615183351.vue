<template>
  <div>
    <el-button type="primary" @click="clicks">返回</el-button>
    <div class="f-d-c a-i-c">
      <h2 class="m-b2">{{arr.title}}</h2>
      <div>摘要：{{arr.abstract}}</div>
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
    },
    clicks(){
        this.$router.push('/published')
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