<template>
  <div><ve-pie :data="chartData" :settings="chartSettings"></ve-pie></div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
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
</style>