<template>
  <div>
    <div class="nav">
      <el-button type="danger">危险按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
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