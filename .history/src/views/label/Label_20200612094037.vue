<template>
  <div>
    <div class="d-f m-b2">
      <div>未读消息(2)</div>
      <div class="m-l3 m-r3">已读消息(1)</div>
      <div>回收站(1)</div>
    </div>
    <el-card shadow="always">
      <div class="p1 item d-f j-c-s-b a-i-c">
        <div>系统通知]该系统将于今晚凌晨2点到5点进行升级维护</div>
        <div class="d-f a-i-c">
          <div class="m-r2">2018-04-19 20:00:00</div>
          <el-button type="info">标记已读</el-button>
        </div>
      </div>
      <div class="p1 item m-b2 d-f j-c-s-b a-i-c">
        <div>今晚12点整发大红包,先到先得</div>
        <div class="d-f a-i-c">
          <div class="m-r2">2018-04-19 20:00:00</div>
          <el-button type="info">标记已读</el-button>
        </div>
      </div>
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