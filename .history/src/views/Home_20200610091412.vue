
<template>
  <div><countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo></div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "",
  props: {},
  data() {
    return {
      startVal: 0,
      endVal: 102130
    };
  },
  components: {countTo},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>