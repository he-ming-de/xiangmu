<template>
  <div class="d-f a-i-c j-c-c">
    <div class="item p1">
      <h2 class="m-b2">期待你的下次光临</h2>
      <el-button type="primary" @click="Out">确认退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    Out() {
      this.$confirm("您正在退出小爱后台系统，是否确认退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "期待您的下次光临"
          });
          localStorage.removeItem("user");
          this.$router.push("/landingpage");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  text-align: center;
}
</style>