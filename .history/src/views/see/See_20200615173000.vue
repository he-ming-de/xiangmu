<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: ""
    };
  },
  components: {},
  methods: {
    // getdata() {
    //   axios
    //     .get(`/api/article/allArticle`)
    //     .then(res => {
    //       this.arr = res.data.data;
    //       console.log(res.data.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    //  查看单个文章: /article/article
    //   - post请求    - 参数:    _id: 文章的_id
    getdata() {
      axios
        .post("/api/article/article", {
          _id: this.id
        })
        .then(res => {
          console.log(res.data);
          this.id=res.data
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    
     this.id = this.$route.query.id;
     console.log(this.id);
     this.getdata()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>