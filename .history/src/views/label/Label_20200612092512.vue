<template>
  <div>
    <div class="d-f">
      <div>未读消息(2)</div>
      <div class="m-l3 m-r3">已读消息(1)</div>
      <div>回收站(1)</div>
    </div>
    <el-card shadow="always">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date"></el-table-column>
        <el-table-column prop="name"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: [
        {
          data: "系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          name: "今晚12点整发大红包,先到先得"
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>