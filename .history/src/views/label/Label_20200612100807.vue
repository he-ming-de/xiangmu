<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息（）" name="first">
        <el-card shadow="always">
          <div v-for="(item,index) in arr" :key="index" class="d-f j-c-s-b p1 item m-b2">
            <div>{{item.name}}</div>
            <div class="d-f a-i-c">
              <div class="m-r2">{{item.time}}</div>
              <el-button type="info">标记已读</el-button>
            </div>
          </div>
          <el-button type="primary">全部标为已读</el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="已读消息（）" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [
        {
          name: "系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 20:00:00"
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
.item {
  border-bottom: 1px solid #ccc;
}
</style>