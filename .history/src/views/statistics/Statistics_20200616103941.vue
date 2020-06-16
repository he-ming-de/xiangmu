<template>
  <div>
    <div class="d-f item c-f">
      <div class="item1 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>今日发布</div>
          <div>1</div>
        </div>
        <i class="el-icon-check p-r2"></i>
      </div>
      <div class="item2 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>原创文章</div>
          <div>1</div>
        </div>
        <i class="el-icon-tickets p-r2"></i>
      </div>
      <div class="item3 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>新留言</div>
          <div>0</div>
        </div>
        <i class="el-icon-bell p-r2"></i>
      </div>
      <div class="item4 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>新消息</div>
          <div>0</div>
        </div>
        <i class="el-icon-phone-outline p-r2"></i>
      </div>
    </div>
    <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: ["分类", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
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
.item1 {
  background: rgb(124, 202, 191);
  justify-content: flex-end;
}
.item2 {
  background: rgb(232, 138, 135);
  justify-content: flex-end;
}
.item3 {
  background: rgb(131, 117, 163);
  justify-content: flex-end;
}
.item4 {
  background: rgb(159, 206, 193);
  justify-content: flex-end;
}
.item {
  width: 100%;
}
.item5 {
  padding-right: 90px;
}
</style>