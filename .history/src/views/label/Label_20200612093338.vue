<template>
  <div>
    <div class="d-f">
      <div>未读消息(2)</div>
      <div class="m-l3 m-r3">已读消息(1)</div>
      <div>回收站(1)</div>
    </div>
    <el-card shadow="always">
      <div class="p2 item">系统通知]该系统将于今晚凌晨2点到5点进行升级维护</div>
      <div class="p2 item m-b2">今晚12点整发大红包,先到先得</div>
      <el-button type="primary" disabled>全部标为已读</el-button>
    </el-card>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  border-bottom: 1px solid #ccc;
}
</style>