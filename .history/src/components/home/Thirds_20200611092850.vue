<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
    <div v-if="index===0">
    <div>
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
</style>