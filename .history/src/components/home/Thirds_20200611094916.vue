<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <div v-if="index===0">
        <div class="d-f">
          <div>
            <i class="el-icon-arrow-down"></i>
          </div>
          <div>{{item.name}}</div>
        </div>
        <div class="item"></div>
      </div>
      <div v-if="index>=1&&index<=8">
        <div>{{item.name}}</div>
      </div>
      <div v-if="index===8">
        <div class="item"></div>
      </div>
      <div v-if="index>=9&&index<=12">
        <div class="d-f">
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [
        { name: "Todo List" },
        { name: "star this repository" },
        { name: "fork this repository" },
        { name: "follow author" },
        { name: "vue-admin" },
        { name: "vue" },
        { name: "element-ui" },
        { name: "axios" },
        { name: "webpack" },
        { name: "6 items left" },
        { name: "All  " },
        { name: "Active" },
        { name: "Completed" }
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
  height: 1px;
  width: 100%;
  background: #ccc;
}
</style>