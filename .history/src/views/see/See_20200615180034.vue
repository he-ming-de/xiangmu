<template>
  <div>
  <div class>
    <h2>{{arr.title}}</h2>
    <div>{{arr.abstract}}</div>
    <div>发表于：{{arr.author}}</div>
  </div>
  <div>{{arr.text}}</div>
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