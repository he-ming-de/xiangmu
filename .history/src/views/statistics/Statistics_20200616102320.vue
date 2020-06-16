<template>
  <div>
    <div class="d-f item c-f">
      <div class="item1 d-f j-c-c a-i-c f1">
        <div class="f-d-c a-i-c">
          <div>今日发布</div>
          <div>1</div>
        </div>
        <i class="el-icon-check item5"></i>
      </div>
      <div class="item2 d-f j-c-c a-i-c f1">
        <div class="f-d-c a-i-c">
          <div>原创文章</div>
          <div>1</div>
        </div>
        <i class="el-icon-tickets"></i>
      </div>
      <div class="item3 d-f j-c-c a-i-c f1">
        <div class="f-d-c a-i-c">
          <div>新留言</div>
          <div>0</div>
        </div>
        <i class="el-icon-bell"></i>
      </div>
      <div class="item4 d-f j-c-c a-i-c f1">
        <div class="f-d-c a-i-c">
          <div>新消息</div>
          <div>0</div>
        </div>
        <i class="el-icon-phone-outline"></i>
      </div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item1 {
  background: rgb(124, 202, 191);
}
.item2 {
  background: rgb(232, 138, 135);
}
.item3 {
  background: rgb(131, 117, 163);
}
.item4 {
  background: rgb(159, 206, 193);
}
.item {
  width: 100%;
}
.item5 {
  display: flex;
  text-align: right;
}
</style>