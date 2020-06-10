<template>
  <div>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["tada", "name"],
        rows: [
        ]
      }
    };
  },
  components: {},
  methods: {
      getdata() {
      axios
        .get(`/api/radarChat`)
        .then(res => {
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
      this.getdata()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>