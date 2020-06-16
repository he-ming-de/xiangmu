<template>
  <div class="p1">
    <div v-for="(item,index1) in arr" :key="index1">
      <div class="d-f j-c-s-b a-i-c">
        <div>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div>{{item.name}}</div>
      </div>
      <div class="item m-t1 m-b1"></div>

      <div v-for="(item,index) in list" :key="index">
        <div class="d-f p-b1 p-t1 j-c-s-b a-i-c item2">
          <div class="hover">
            <div class=" item4"></div>
            {{item.name}}
          </div>
          <i class="el-icon-close item1" @click="clicks(index)"></i>
        </div>
      </div>
      <div class="item m-t1 m-b1"></div>
    </div>
    <div class="d-f">
      <div v-for="(item,index2) in all" :key="index2">
        <div class="m-r2">{{item.name}}</div>
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
      arr: [{ name: "Todo List" }],
      list: [
        { name: "star this repository", checked: false },
        { name: "fork this repository", checked: false },
        { name: "follow author", checked: false },
        { name: "vue-admin", checked: false },
        { name: "vue", checked: false },
        { name: "element-ui", checked: false },
        { name: "axios", checked: true },
        { name: "webpack", checked: true }
      ],
      all: [
        { name: "6 items left" },
        { name: "All" },
        { name: "Active" },
        { name: "Completed" }
      ]
    };
  },
  components: {},
  methods: {
    clicks(index) {
      this.list.splice(index, 1);
    },
    che() {}
  },
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
.item4{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #000;
}
</style>