<template>
  <div>
    <div class="nav p-t1 p-r3">
      <el-button type="danger">查看</el-button>
      <el-button type="primary">发布</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    // getdata(){
    //     axios.post("/api/article/create",{
    //         title:this.
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