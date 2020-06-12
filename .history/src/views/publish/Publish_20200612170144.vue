<template>
  <div>
    <div class="nav p1">
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
  background: greenyellow;
}
</style>