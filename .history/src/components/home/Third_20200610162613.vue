<template>
  <div class=" m-t3">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
        <div>
        <div>Order_No</div>
        </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
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
.bg-purple {
    background: #ffffff;
    border-radius: 5px;
}
.grid-content {
    height: 100px;
}
</style>