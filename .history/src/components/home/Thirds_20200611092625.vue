<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <div v-if="item===0">{{item.name}}</div>
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
        { name: "Todo List", index: 0 },
        { name: "star this repository", index: 1 },
        { name: "fork this repository", index: 2 },
        { name: "follow author", index: 3 },
        { name: "vue-admin", index: 4 },
        { name: "vue", index: 5 },
        { name: "element-ui", index: 6 },
        { name: "axios", index: 7 },
        { name: "webpack", index: 8 },
        { name: "6 items left", index: 9 },
        { name: "All  ", index: 10 },
        { name: "Active", index: 11 },
        { name: "Completed", index: 12 }
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