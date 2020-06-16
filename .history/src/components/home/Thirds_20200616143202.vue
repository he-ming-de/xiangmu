<template>
  <div class="p1">
    <div v-for="(item,index) in list" :key="index">
      <div v-if="index===0">
        <div class="d-f j-c-s-b a-i-c">
          <div>
            <i class="el-icon-arrow-down"></i>
          </div>
          <div>{{item.name}}</div>
        </div>
        <div class="item m-t1 m-b1"></div>
      </div>
      <div v-if="index>=1&&index<=8">
        <div class="d-f p-b1 p-t1 j-c-s-b a-i-c item2">
          <div class="hover" v-if="index>=6&&index<=8">
            <input type="checkbox" value="checked"/>
            {{item.name}}
          </div>
          <i class="el-icon-close item1"></i>
        </div>
      </div>
      <div v-if="index===8">
        <div class="item m-t1 m-b1"></div>
      </div>
    </div>
    <div class="m-item d-f p-t1 p1">
      <div class="m-r1 hover">6 items left</div>
      <div class="m-r1 item3 p-l1 p-r1 hover">All</div>
      <div class="m-r2 hover">Active</div>
      <div class="hover">Completed</div>
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
        { name: "webpack" }
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
.item1 {
  color: red;
  cursor: pointer;
  display: none;
}
.item2:hover {
  .item1 {
    display: block;
    cursor: pointer;
  }
}
.m-item {
  padding-bottom: 61px;
}
.item3 {
  border: 1px solid rgb(240, 215, 215);
}
</style>