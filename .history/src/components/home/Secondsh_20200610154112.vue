<template>
  <div>
    <ve-histogram :data="chartData"></ve-histogram>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: ["actual", "date", "expected"],
        rows: []
      }
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/homeChat`)
        .then(res => {
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>