
<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <i class="iconfont icon-renqunfenxi"></i>
        <div class="hello">
          <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <i class="iconfont icon-qian"></i>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { countTo },
  methods: {
    getdata() {
      countTo.get(`/api/homeData`);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>